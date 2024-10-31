import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import ShopMenu from "../../components/ShopMenu";
import StarRating from '../../components/StarRating';

const Details = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [ratings, setRatings] = useState([]);
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
          headers: { Authorization: `${token}` },
        });

        if (response.status === 200 && response.data.isSuccess) {
          setProduct(response.data.data);
        } else {
          setError("Không thể lấy thông tin sản phẩm.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin sản phẩm:", error);
        setError("Đã xảy ra lỗi khi lấy thông tin sản phẩm.");
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const productId = await AsyncStorage.getItem("productId");

        const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/comment/get-by-product/${productId}`, {
          headers: { Authorization: ` ${token}` },
        });

        if (response.status === 200 && response.data.isSuccess) {
          setComments(response.data.data);
        } else {
          console.error("Không thể lấy bình luận.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy bình luận:", error);
      }
    };

    const fetchRatings = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const productId = await AsyncStorage.getItem("productId");

        const response = await axios.get(`https://scs-api.arisavinh.dev/api/v1/rating/product{id}?id=${productId}`, {
          headers: { Authorization: ` ${token}` },
        });

        if (response.status === 200 && response.data.isSuccess) {
          setRatings(response.data.data);
        } else {
          console.error("Không thể lấy đánh giá.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy đánh giá:", error);
      }
    };

    fetchProduct();
    fetchComments();
    fetchRatings();
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
    setZoomedImage(url);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <ShopMenu />

      <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">

        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">{product.productName}</h1>

        <div className="flex flex-wrap justify-center mb-4 gap-4">
          {product.image.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${product.productName} hình ảnh ${index + 1}`}
              className="w-full sm:w-40 h-40 object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(url)}
            />
          ))}
        </div>

        {zoomedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="relative">
              <button onClick={closeZoom} className="absolute top-4 right-4 text-white text-2xl">
                <AiOutlineClose />
              </button>
              <img src={zoomedImage} alt="Sản phẩm phóng to" className="w-[90vw] h-[80vh] object-contain rounded-lg" />
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Mô tả:</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Danh mục:</h3>
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
            <h3 className="text-2xl font-semibold text-gray-700">Trạng thái:</h3>
            <p className={`text-xl font-semibold ${product.status === "ACTIVE" ? "text-green-500" : "text-red-500"}`}>
              {product.status}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Ngày tạo:</h3>
            <p className="text-gray-600">{new Date(product.dateCreate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-700">Bình luận:</h3>
          <div className="space-y-4 mt-4">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.commentId} className="border rounded-lg p-4 bg-gray-50">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-gray-800">{comment.content}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Chưa có bình luận nào.</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-700">Đánh giá:</h3>
          <div className="space-y-4 mt-4">
            {ratings.length > 0 ? (
              ratings.map((rating) => (
                <div key={rating.commentId} className="border rounded-lg p-4 bg-gray-50">
                  <StarRating rating={rating.start} /> {/* Sử dụng StarRating ở đây */}
                  <p className="font-semibold text-gray-800">{rating.name}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(rating.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Chưa có đánh giá nào.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
