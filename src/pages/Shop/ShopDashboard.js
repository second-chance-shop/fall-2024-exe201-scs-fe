import React, { useEffect, useState } from 'react'; 
import { Outlet, useParams } from 'react-router-dom';
import ShopMenu from '../../components/ShopMenu/index';
import ShopDetail from '../../pages/Shop/ShopDetail';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShopDashboard = () => {
    const { shopId } = useParams();
    const [shop, setShop] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchShopData = async () => {
          const token = await AsyncStorage.getItem('userToken');
          if (!token) {
            setErrorMessage('Authentication token not found.');
            setLoading(false);
            return;
          }
    
          try {
            const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/shop/${shopId}`, {
              headers: {
                Authorization: `${token}`,
              },
            });
            if (response.data.isSuccess) {
              setShop(response.data.data);
            } else {
              throw new Error(response.data.message);
            }
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchShopData();
      }, [shopId]);

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>; // Error state

    return (
        <div className="flex">
            {/* Shop Menu bên trái */}
            <div className="w-1/4 h-screen">
                <ShopMenu />
            </div>
            {/* Nội dung chính của dashboard */}
            <div className="w-3/4 p-5">
                <h1 className="text-2xl font-bold mb-4">Dashboard của Shop</h1>
                <p className="mb-4">Chào mừng bạn đến với trang quản lý cửa hàng của bạn!</p>
                {shop && <ShopDetail shop={shop} />} {/* Pass shop data to ShopDetail */}
                <Outlet /> {/* This is where the content of subpages will be displayed */}
            </div>
        </div>
    );
};

export default ShopDashboard;
