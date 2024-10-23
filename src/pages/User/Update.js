import React, { useEffect, useState } from "react";
import UserMenu from "../../components/user/UserMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "react-toastify";
import axios from "axios";
import defaultProfilePic from "../../assest/avatar-user-default.png";
import { useNavigate } from "react-router-dom";

const UserUpdate = () => {
    const [userInfo, setUserInfo] = useState({
        userId: "",
        username: "",
        email: "",
        phoneNumber: "",
        name: "",
        avatar: "",
        gender: "",
        dob: "",
        address: "",
    });

    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("");
    const navigate = useNavigate();

    // Fetch user information
    const fetchUserInfo = async () => {
        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                setErrorMessage("Authentication token not found.");
                setLoading(false);
                return;
            }

            const response = await axios.get("https://scs-api.arisavinh.dev/api/v1/user/profile", {
                headers: {
                    Authorization: `${token}`,
                },
            });

            if (response.status === 200 && response.data.isSuccess) {
                const { userId, username, email, phoneNumber, name, avatar, gender, dob, address } =
                    response.data.data;
                setUserInfo({
                    userId,
                    username,
                    email,
                    phoneNumber,
                    name,
                    avatar,
                    gender,
                    dob,
                    address,
                });
                setAvatarPreview(avatar || defaultProfilePic);
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "Error fetching user info");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    // Handle avatar change
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
                setUserInfo((prev) => ({ ...prev, avatar: file }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Update user information
    const handleUpdate = async () => {
        if (!userInfo.name || !userInfo.gender || !userInfo.dob) {
            toast.error("Please fill in all required fields (name, gender, date of birth).");
            return;
        }

        try {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                toast.error("Authentication token not found.");
                return;
            }

            const formData = new FormData();
            formData.append(
                "user",
                JSON.stringify({
                    id: userInfo.userId,
                    name: userInfo.name,
                    address: userInfo.address,
                    gender: userInfo.gender,
                    dob: userInfo.dob,
                })
            );

            if (userInfo.avatar) {
                formData.append("file", userInfo.avatar);
            }

            const response = await axios.put(
                "https://scs-api.arisavinh.dev/api/v1/user/update",
                formData,
                {
                    headers: {
                        Authorization: `${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200 && response.data.isSuccess) {
                toast.success("Cập nhật thông tin người dùng thành công!");
                navigate('/user-profile');
                fetchUserInfo();
            } else {
                toast.error(response.data.message || "Đã xảy ra lỗi");
            }
        } catch (error) {
            console.error("Error updating user info:", error);
            setErrorMessage(
                error.response?.data?.message || "Lỗi khi cập nhật thông tin người dùng!"
            );
            toast.error(error.response?.data?.message || "Lỗi khi cập nhật thông tin người dùng");
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <UserMenu />

            <div className="flex-1 p-5">
                <h1 className="text-3xl font-bold mb-5">Cập nhật hồ sơ</h1>
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-2xl font-semibold mb-3">Thông tin hồ sơ</h2>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                    {/* Avatar Field */}
                    <div className="col-span-1 md:col-span-2 flex justify-center mb-6">
                        <div className="w-32 h-32 relative overflow-hidden rounded-full">
                            <img
                                src={avatarPreview || defaultProfilePic}
                                alt="Profile Avatar"
                                className="w-full h-full object-cover mix-blend-multiply"
                            />
                            <label>
                                <div className="text-xs bg-opacity-80 bg-slate-200 pb-3 cursor-pointer text-center absolute bottom-0 w-full">
                                    Tải ảnh
                                </div>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                            </label>
                        </div>
                    </div>

                    {/* UserId Field (disabled) */}
                    <div className="mb-4">
                        <label className="block text-gray-700">ID User:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.userId}
                            readOnly
                        />
                    </div>

                    {/* Username Field (disabled) */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Tên đăng nhập:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.username}
                            readOnly
                        />
                    </div>

                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Họ & tên:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        />
                    </div>

                    {/* Email Field (read-only) */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.email}
                            readOnly
                        />
                    </div>

                    {/* Phone Field (read-only) */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Số điện thoại:</label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.phoneNumber}
                            readOnly
                        />
                    </div>

                    {/* Gender Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Giới tính:</label>
                        <select
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.gender}
                            onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value })}
                        >
                            <option value="">Chọn giới tính</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Date of Birth Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Ngày sinh:</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.dob ? userInfo.dob.split("T")[0] : ""}
                            onChange={(e) => setUserInfo({ ...userInfo, dob: e.target.value })}
                        />
                    </div>

                    {/* Address Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Địa chỉ:</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        />
                    </div>

                    {/* Update Button */}
                    <div className="mt-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onClick={handleUpdate}
                        >
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserUpdate;
