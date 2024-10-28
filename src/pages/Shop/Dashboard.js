import React, { useEffect, useState } from "react";
import ShopMenu from "../../components/ShopMenu"; // Import ShopMenu component
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar, FaComment, FaThumbsUp, FaUserFriends } from "react-icons/fa";

const ShopDashboard = () => {
  const [shopData, setShopData] = useState(null);
  const [dashboardMetrics, setDashboardMetrics] = useState({
    stars: 0,
    comments: 0,
    likes: 0,
    follows: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch shop data based on shopId stored in AsyncStorage
  const fetchShopData = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const shopId = await AsyncStorage.getItem("selectedShopId");

      if (!token || !shopId) {
        navigate("/shop-manage");
        return;
      }

      const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/shop/${shopId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200 && response.data.isSuccess) {
        setShopData(response.data.data);
        setDashboardMetrics({
          stars: response.data.data.stars,
          comments: response.data.data.comments,
          likes: response.data.data.likes,
          follows: response.data.data.follows,
        });
      }
    } catch (error) {
      console.error("Error fetching shop data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShopData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <ShopMenu />

      {/* Right Content Area */}
      <div className="bg-white shadow-lg rounded-lg w-3/4 p-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md mb-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">Shop Dashboard</h1>
          <p className="text-gray-600 mt-2">
            {shopData ? `Welcome to the dashboard for ${shopData.shopName}` : 'Loading shop data...'}
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Stars */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaStar className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.stars}</h2>
            <p className="text-gray-600">Star Rating</p>
          </div>

          {/* Comments */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaComment className="text-blue-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.comments}</h2>
            <p className="text-gray-600">Comments</p>
          </div>

          {/* Likes */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaThumbsUp className="text-green-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.likes}</h2>
            <p className="text-gray-600">Likes</p>
          </div>

          {/* Follows */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaUserFriends className="text-purple-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.follows}</h2>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>

        {/* Charts Section (Mock Data for Star & Comment trends) */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Star Trends Chart */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Star Rating Over Time</h3>
              <div className="bg-gray-300 h-48 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Star Rating Trend Chart (Mock Data)</p>
              </div>
            </div>

            {/* Comment Trends Chart */}
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Comments Over Time</h3>
              <div className="bg-gray-300 h-48 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Comment Trend Chart (Mock Data)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDashboard;
