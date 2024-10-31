import React, { useEffect, useState } from "react";
import ShopMenu from "../../components/ShopMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import { FaStar, FaComment, FaThumbsUp, FaUserFriends } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ShopDashboard = () => {
  const [shopData, setShopData] = useState(null);
  const [dashboardMetrics, setDashboardMetrics] = useState({
    stars: 0,
    comments: 0,
    likes: 0,
    follows: 0,
  });
  const [starData, setStarData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchShopData = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const shopId = await AsyncStorage.getItem("selectedShopId");

      if (!token || !shopId) {
        navigate("/user/shop-manage");
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

        // Fetch data for comments trends from shop API
        const commentsResponse = await axios.get('https://scs-api.arisavinh.dev/api/v1/comment', {
          headers: {
            Authorization: `${token}`,
          },
        });
        
        // Extracting the comment counts for charting
        const commentCounts = commentsResponse.data.data.map(comment => comment.count); // Adjust this according to the actual response structure
        setCommentData(commentCounts);

        // Fetch star rating trends from the rating API
        const starsResponse = await axios.get('https://scs-api.arisavinh.dev/api/v1/rating', {
          headers: {
            Authorization: `${token}`,
          },
        });

        // Extracting star rating counts for charting
        const starCounts = starsResponse.data.data.map(star => star.count); // Adjust this according to the actual response structure
        setStarData(starCounts);
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
    return <Loading />;
  }

  // Configurations for Star and Comment charts
  const starChartConfig = {
    labels: starData.map((_, idx) => `Ngày ${idx + 1}`),
    datasets: [
      {
        label: "Star Rating",
        data: starData,
        borderColor: "rgba(255, 205, 86, 1)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
      },
    ],
  };

  const commentChartConfig = {
    labels: commentData.map((_, idx) => `Ngày ${idx + 1}`),
    datasets: [
      {
        label: "Comments",
        data: commentData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ShopMenu />

      <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">
        <div className="bg-white rounded-lg shadow-md mb-6 p-4">
          <h1 className="text-3xl font-bold text-gray-800">Shop Dashboard</h1>
          <p className="text-gray-600 mt-2">
            {shopData ? `Welcome to the dashboard for ${shopData.shopName}` : 'Loading shop data...'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaStar className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.stars}</h2>
            <p className="text-gray-600">Star Rating</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaComment className="text-blue-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.comments}</h2>
            <p className="text-gray-600">Comments</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaThumbsUp className="text-green-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.likes}</h2>
            <p className="text-gray-600">Likes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <FaUserFriends className="text-purple-400 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{dashboardMetrics.follows}</h2>
            <p className="text-gray-600">Followers</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shop Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Star Rating Over Time</h3>
              <Line data={starChartConfig} />
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Comments Over Time</h3>
              <Line data={commentChartConfig} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDashboard;
