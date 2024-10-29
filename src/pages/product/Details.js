import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading"; // Loading component for loading state
import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import ShopMenu from "../../components/ShopMenu";

const Details = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // State for zoomed image
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const shopId = await AsyncStorage.getItem("selectedShopId");
        const productId = await AsyncStorage.getItem("productId");

        if (!token || !shopId || !productId) {
          navigate("/shop/product/management");
          return;
        }

        const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/product/${productId}`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (response.status === 200 && response.data.isSuccess) {
          setProduct(response.data.data);
        } else {
          setError("Failed to fetch product details.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("An error occurred while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <Loading />;

  if (error) {
    toast.error(error);
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleImageClick = (url) => {
    setZoomedImage(url); // Set the zoomed image
  };

  const closeZoom = () => {
    setZoomedImage(null); // Close zoomed image
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
        {/* Left Sidebar */}
        <ShopMenu />

        {/* Right Content Area */}
        <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">
            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{product.productName}</h1>

            {/* Product Images */}
            <div className="flex justify-center space-x-4 mb-4">
                {product.image.map((url, index) => (
                <img
                    key={index}
                    src={url}
                    alt={`${product.productName} image ${index + 1}`}
                    className="w-40 h-40 object-cover rounded-lg shadow-md cursor-pointer"
                    onClick={() => handleImageClick(url)}
                />
                ))}
            </div>

            {/* Zoomed Image Modal */}
            {zoomedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                <div className="relative">
                    <button
                    onClick={closeZoom}
                    className="absolute top-4 right-4 text-white text-2xl"
                    >
                    <AiOutlineClose />
                    </button>
                    <img
                    src={zoomedImage}
                    alt="Zoomed product"
                    className="w-[90vw] h-[80vh] object-contain rounded-lg"
                    />
                </div>
                </div>
            )}

            {/* Product Details */}
            <div className="space-y-6">
                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Mô tả:</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Loại:</h3>
                <p className="text-gray-600">{product.categoryNames.join(", ")}</p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Giá:</h3>
                <p className="text-gray-600 text-xl font-bold">
                    {product.prices.toLocaleString()} VND
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Số lượng có sẵn:</h3>
                <p className="text-gray-600">{product.quantity}</p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Trạng thái</h3>
                <p
                    className={`text-xl font-semibold ${
                    product.status === "ACTIVE" ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {product.status}
                </p>
                </div>

                <div>
                <h3 className="text-2xl font-semibold text-gray-700">Ngày tạo:</h3>
                <p className="text-gray-600">{new Date(product.dateCreate).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    </div> 
  );
};

export default Details;
