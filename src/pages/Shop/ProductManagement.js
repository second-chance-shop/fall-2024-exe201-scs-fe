import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ShopMenu from "../../components/ShopMenu";

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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <ShopMenu />

      {/* Right Content Area */}
      <div className="w-3/4 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Quản lý sản phẩm</h1>

        {/* Add Product Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
          onClick={() => navigate("/shop/product/add")}
        >
          Thêm sản phẩm
        </button>

        {/* Check if products are available */}
        {products.length === 0 ? (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded-md">
            <p className="font-semibold">Thông báo:</p>
            <p>Shop chưa có sản phẩm nào. Vui lòng thêm sản phẩm mới!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.productId} className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={product.image[0]}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{product.productName}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <b className="text-gray-600 mt-2">Số lượng: {product.quantity}</b>
                <p className="text-gray-600 mt-2">Giá: {product.prices.toLocaleString()} VND</p>
                <p className={`mt-2 font-semibold ${product.status === "ACTIVE" ? "text-green-500" : "text-red-500"}`}>
                  Status: {product.status}
                </p>
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-md mt-4"
                  onClick={() => navigate(`/shop/product/${product.productId}`)}
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
