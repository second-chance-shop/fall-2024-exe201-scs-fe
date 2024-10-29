import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ShopMenu from "../../components/ShopMenu";
import { toast } from "react-toastify";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all products for the shop
  const fetchProducts = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const shopId = await AsyncStorage.getItem("selectedShopId");

      if (!token || !shopId) {
        navigate("/shop-manage");
        return;
      }

      const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/product/shop/${shopId}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      if (response.status === 200 && response.data.isSuccess) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleDetailsClick = async (productId, productName) => {
    try {
      await AsyncStorage.setItem("productId", productId.toString());
      navigate(`/shop/product/details/${productName}`);
    } catch(error) {
      console.error("Error storing shopId in AsyncStorage:", error);
      toast.error("Failed to navigate to shop dashboard.");
    }
  }
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <ShopMenu />
  
      {/* Right Content Area */}
      <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Quản lý sản phẩm</h1>
  
        {/* Add Product Button */}
        <button
          className="flex items-center bg-orange-500 text-white px-3 py-1 rounded-md mb-4 text-sm"
          onClick={() => navigate("/shop/product/add")}
        >
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Thêm sản phẩm
        </button>

  
        {/* Check if products are available */}
        {products.length === 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4 rounded-md">
            <p className="font-semibold">Thông báo:</p>
            <p>Shop chưa có sản phẩm nào. Vui lòng thêm sản phẩm mới!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.productId} className="bg-white p-3 rounded-lg shadow-md flex flex-col">
                <img
                  src={product.image[0]}
                  alt={product.productName}
                  className="w-full h-36 object-contain rounded-md mb-2"
                />
                <h2 className="text-lg font-bold text-gray-800 truncate">{product.productName}</h2>
                <p className={`mt-1 font-semibold ${product.status === "ACTIVE" ? "text-green-500" : "text-red-500"}`}>
                  Status: {product.status}
                </p>
                <button
                  className="bg-orange-500 text-white px-3 py-1 rounded-md mt-2 text-sm"
                  onClick={(e) => { e.stopPropagation(); handleDetailsClick(product.productId, product.productName); }}
                >
                  Chi tiết
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ProductManagement;
