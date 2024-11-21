import React, { useEffect, useState } from "react";
import UserMenu from "../../components/User/UserMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultProfilePic from "../../assest/avatar-user-default.png";
import Loading from "../../components/Loading";

const UserProfile = () => {
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

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <UserMenu />

            <div className="flex-1 p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Hồ sơ người dùng</h1>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Thông tin cá nhân</h2>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                    {/* Display User Information */}
                    <div className="flex justify-center mb-8">
                        <div className="w-32 h-32 relative overflow-hidden rounded-full border-4 border-orange-500 shadow-lg">
                            <img
                                src={avatarPreview || defaultProfilePic}
                                alt="Profile Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong className="text-gray-600">Tên đăng nhập:</strong>
                            <p className="text-gray-800">{userInfo.username}</p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Họ & tên:</strong>
                            <p className="text-gray-800">{userInfo.name}</p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Email:</strong>
                            <p className="text-gray-800">{userInfo.email}</p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Số điện thoại:</strong>
                            <p className="text-gray-800">{userInfo.phoneNumber}</p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Giới tính:</strong>
                            <p className="text-gray-800">{userInfo.gender}</p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Ngày sinh:</strong>
                            <p className="text-gray-800">
                                {userInfo.dob ? userInfo.dob.split("T")[0] : ""}
                            </p>
                        </div>
                        <div>
                            <strong className="text-gray-600">Địa chỉ:</strong>
                            <p className="text-gray-800">{userInfo.address}</p>
                        </div>
                    </div>

                    {/* Edit Button */}
                    <div className="mt-6">
                        <button
                            onClick={() =>
                                navigate(`/user/update/${encodeURIComponent(userInfo.name)}`)
                            }
                            className="bg-orange-600 text-white px-5 py-3 rounded-lg hover:bg-orange-500 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                        >
                            Chỉnh sửa hồ sơ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
