import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserMenu from "../../components/User/UserMenu";
import Modal from "react-modal";
import { FiSettings, FiPlus, FiTrash2 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../components/Loading";

const ShopManage = () => {
    const navigate = useNavigate();
    const [shops, setShops] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                if (!token) {
                    setErrorMessage("Authentication token not found.");
                    setLoading(false);
                    return;
                }

                const response = await axios.get("https://scs-api.arisavinh.dev/api/v1/shop/user", {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                setShops(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching shops:", error);
                setErrorMessage("Failed to fetch shop data.");
                setLoading(false);
            }
        };

        fetchShops();
    }, []);

    const openModal = (shop) => {
        setSelectedShop(shop);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedShop(null);
    };

    const handleSettingsClick = async (shopId) => {
        try {
            await AsyncStorage.setItem("selectedShopId", shopId);
            navigate("/shop/dashboard");
        } catch (error) {
            console.error("Error storing shopId in AsyncStorage:", error);
            toast.error("Failed to navigate to shop dashboard.");
        }
    };

    const handleAddShopClick = () => {
        navigate("/shop/create");
    };

    const handleDeleteShop = async (shopId) => {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) {
            setErrorMessage("Authentication token not found.");
            return;
        }

        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa cửa hàng này không?");
        if (!isConfirmed) return;

        try {
            // Find the shop by ID to get the shopName
            const shopToDelete = shops.find((shop) => shop.shopId === shopId);

            const response = await axios.delete(
                `https://scs-api.arisavinh.dev/api/v1/shop/delete/${shopId}`,
                {
                    headers: {
                        Authorization: `${token}`,
                    },
                }
            );

            if (response.status === 200) {
                setShops(shops.filter((shop) => shop.shopId !== shopId));
                toast.success(`Đã xoá cửa hàng: ${shopToDelete.shopName}`); // Use shopName instead of shopId
                closeModal();
            }
        } catch (error) {
            console.error("Error deleting shop:", error);

            if (error.response) {
                console.error("Response data:", error.response.data);
                setErrorMessage(
                    `Failed to delete shop: ${error.response.data.message || "Unknown error"}`
                );
            } else {
                setErrorMessage("Failed to delete shop.");
            }
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (errorMessage) {
        return <div className="text-red-500 text-center">{errorMessage}</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <UserMenu />

            <div className="flex-1 p-5">
                <h1 className="text-3xl font-bold mb-5">Quản lý cửa hàng</h1>

                <button
                    onClick={handleAddShopClick}
                    className="mb-4 bg-orange-500 text-white py-2 px-4 rounded flex items-center hover:bg-orange-600 transition"
                >
                    <FiPlus className="mr-2" size={20} />
                    Thêm cửa hàng
                </button>

                <div className="space-y-4">
                    {shops.length > 0 ? (
                        shops.map((shop) => (
                            <div
                                key={shop.shopId}
                                className="p-4 border rounded-lg shadow-md flex justify-between items-center cursor-pointer hover:shadow-lg transition"
                                onClick={() => openModal(shop)}
                            >
                                <div>
                                    <h2 className="text-xl font-semibold">{shop.shopName}</h2>
                                    <p className="text-gray-600">{shop.categoryName}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSettingsClick(shop.shopId);
                                        }}
                                        className="text-gray-600 hover:text-gray-800 transition"
                                        title="Cài đặt cửa hàng"
                                    >
                                        <FiSettings size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteShop(shop.shopId);
                                        }}
                                        className="text-red-600 hover:text-red-800 transition ml-4"
                                        title="Xóa cửa hàng"
                                    >
                                        <FiTrash2 size={24} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Bạn chưa sở hữu cửa hàng nào.</p>
                    )}
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    overlayClassName="fixed inset-0"
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                        <h2 className="text-2xl font-bold">{selectedShop?.shopName}</h2>
                        <img
                            src={selectedShop?.shopImage}
                            alt={selectedShop?.shopName}
                            className="w-full h-48 object-cover rounded mt-4"
                        />
                        <p className="mt-4">{selectedShop?.description}</p>
                        <p className="mt-2">
                            <strong>Email:</strong> {selectedShop?.shopEmail}
                        </p>
                        <p className="mt-2">
                            <strong>Điện thoại:</strong> {selectedShop?.shopPhoneNumber}
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeModal}
                                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </Modal>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ShopManage;
