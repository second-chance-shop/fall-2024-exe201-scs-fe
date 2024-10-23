import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from 'react-toastify';

const ShopDetail = () => {
    const [shopData, setShopData] = useState(null);
    const navigate = useNavigate();
    const { shopId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShopData = async () => {
            const token = await AsyncStorage.getItem("userToken");

            try {
                // Fetch shop details
                const shopResponse = await axios.get(`https://scs-api.arisavinh.dev/api/v1/shop/${shopId}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                
                const shop = shopResponse.data.data;
                setShopData(shop);

                // Check if the user owns the shop
                const userResponse = await axios.get('https://scs-api.arisavinh.dev/api/v1/user/profile', {
                    headers: {
                        Authorization: `${token}`,
                    },
                });

                const userProfile = userResponse.data.data;

                if (userProfile.userId !== shop.userId) {
                    toast.info('Bạn chưa đăng ký shop!')
                    navigate('/shop-register');
                }

            } catch (error) {
                console.error('Error fetching shop data:', error);
                setError('Unable to fetch shop data. Please try again later.');
            }
        };

        fetchShopData();
    }, [shopId, navigate]);

    if (!shopData) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl">Loading shop data...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-5">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                    src={shopData.shopImage} 
                    alt={shopData.shopName} 
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">{shopData.shopName}</h1>
                    <p className="text-sm text-gray-600 mb-4">{shopData.description}</p>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div className="md:w-1/2">
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Owner:</span> {shopData.ownerName}</p>
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Email:</span> {shopData.shopEmail}</p>
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Phone:</span> {shopData.shopPhonumber}</p>
                        </div>
                        <div className="md:w-1/2 mt-4 md:mt-0">
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Address:</span> {shopData.shopAddress}</p>
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Category:</span> {shopData.categoryName}</p>
                            <p className="text-lg font-semibold text-gray-800"><span className="font-bold">Created On:</span> {new Date(shopData.dateCreate).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200">
                            Contact Shop
                        </button>
                        <button className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-400 transition duration-200">
                            Back to Shops
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail;
