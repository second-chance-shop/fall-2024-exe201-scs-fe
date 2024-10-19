import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterShop = () => {
  const [data, setData] = useState({
    shopName: '',
    description: '',
    shopEmail: '',
    shopPhoneNumber: '',
    cccdNumber: '',
    industry: '',
    shippingAddress: '',
    shopAddress: '',
    categoryId: 0,
    shopImage: null, 
    frontSideOfCCCD: null, 
    backSideOfCCCD: null, 
    userId: null
  });

  const [categories, setCategories] = useState([]);
  const [isAgree, setIsAgree] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          toast.error('Authentication token not found.');
          navigate('/login');
          return;
        }

        const response = await axios.get('https://scs-api.arisavinh.dev/api/v1/user/profile', {
          headers: { Authorization: `${token}` },
        });
        if (response.status === 200 && response.data.isSuccess) {
          const { userId } = response.data.data;
          setData((prevData) => ({ ...prevData, userId }));
        } else {
          throw new Error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        toast.error('Không thể lấy thông tin người dùng. Vui lòng đăng nhập lại.');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          toast.error('Authentication token not found.');
          setLoading(false);
          return;
        }
        const response = await axios.get('https://scs-api.arisavinh.dev/api/v1/category/getAllCategory?page=0&size=100', {
          headers: { Authorization: `${token}` },
        });
        if (response.status === 200 && response.data.isSuccess && Array.isArray(response.data.data.content)) {
          setCategories(response.data.data.content);
        } else {
          toast.error('Không thể lấy danh mục.');
          setCategories([]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Lỗi khi kết nối đến server.');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
    fetchCategories();
  }, [navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setData((prevData) => ({ ...prevData, [name]: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check agreement to terms
    if (!isAgree) {
        toast.error('Bạn phải đồng ý với các điều khoản của SecondChanceShop.');
        return;
    }

    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
        toast.error('Authentication token not found.');
        return;
    }

    const formData = new FormData();
    formData.append('product', JSON.stringify({
        shopName: data.shopName,
        description: data.description,
        shopEmail: data.shopEmail,
        shopPhoneNumber: data.shopPhoneNumber,
        cccdNumber: data.cccdNumber,
        industry: data.industry,
        shippingAddress: data.shippingAddress,
        shopAddress: data.shopAddress,
        categoryId: data.categoryId,
        userId: data.userId,
    }));

    if (data.shopImage) {
      formData.append('shopImage', data.shopImage);
    } else {
      toast.error('Bạn phải cung cấp hình ảnh cho shop.');
      return;
    }

    if (!data.frontSideOfCCCD) {
        toast.error('Bạn phải cung cấp hình ảnh cho mặt trước của CCCD.');
        return;
    } else {
        formData.append('cccdFont', data.cccdFont);
    }

    if (!data.backSideOfCCCD) {
        toast.error('Bạn phải cung cấp hình ảnh cho mặt sau của CCCD.');
        return;
    } else {
        formData.append('cccdBack', data.cccdBack);
    }

    // Make the API call
    try {
        const response = await axios.post('https://scs-api.arisavinh.dev/api/v1/shop/create', formData, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200 && response.data.isSuccess) {
            toast.success('Đăng ký shop thành công!');
            navigate('/');
        } else {
            toast.error(response.data.message || 'Đã xảy ra lỗi');
        }
    } catch (error) {
        toast.error(error.response?.data?.message || 'Lỗi kết nối đến server');
    }
};


  const openTermsModal = () => setIsTermsOpen(true);
  const closeTermsModal = () => setIsTermsOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký Shop</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Tên Shop</label>
            <input
              type="text"
              name="shopName"
              value={data.shopName}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Mô tả</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email của Shop</label>
            <input
              type="email"
              name="shopEmail"
              value={data.shopEmail}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Số điện thoại của Shop</label>
            <input
              type="text"
              name="shopPhoneNumber"
              value={data.shopPhoneNumber}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">CCCD Number</label>
            <input
              type="text"
              name="cccdNumber"
              value={data.cccdNumber}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Ngành</label>
            <input
              type="text"
              name="industry"
              value={data.industry}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Địa chỉ giao hàng</label>
            <input
              type="text"
              name="shippingAddress"
              value={data.shippingAddress}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Địa chỉ Shop</label>
            <input
              type="text"
              name="shopAddress"
              value={data.shopAddress}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Danh mục</label>
            <select
              name="categoryId"
              value={data.categoryId}
              onChange={handleOnChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Hình ảnh shop</label>
            <input
              type="file"
              name="shopImage"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Hình ảnh CCCD Mặt trước</label>
            <input
              type="file"
              name="cccdFont"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Hình ảnh CCCD Mặt sau</label>
            <input
              type="file"
              name="cccdBack"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isAgree}
              onChange={() => setIsAgree(!isAgree)}
              required
              className="mr-2"
            />
            <span>Tôi đồng ý với <a href="#" onClick={openTermsModal} className="text-blue-600 underline">các điều khoản</a></span>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white rounded-md ${loading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Đang tải...' : 'Đăng ký Shop'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterShop;
