import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ShopMenu from '../../components/ShopMenu/index'
import Loading from '../../components/Loading'

const ShopUpdate = () => {
  const [data, setData] = useState({
    shopName: '',
    description: '',
    shopEmail: '',
    shopPhoneNumber: '',
    cccdNumber: '',
    industry: '',
    shippingAddress: '',
    shopAddress: '',
    categoryId: '',
    shopImage: '',
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
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
          toast.error('Cannot fetch categories.');
          setCategories([]);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Error connecting to the server.');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [navigate]);

  // Fetch shop data based on shopId stored in AsyncStorage
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
        const { shopId, shopName, description, shopEmail, shopPhoneNumber, cccdNumber, 
          industry, shippingAddress, shopAddress, categoryId, shopImage } =
                    response.data.data;
        setData({
          shopName,
          description,
          shopEmail,
          shopPhoneNumber,
          cccdNumber,
          industry,
          shippingAddress,
          shopAddress,
          categoryId,
        });
        setAvatarPreview(shopImage || null);
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    
    if (file) {
      console.log(`File selected for ${name}:`, file);
      setData((prevData) => ({ ...prevData, [name]: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shopId = await AsyncStorage.getItem('selectedShopId');
    if (!shopId) {
      toast.error("Shop ID is required.");
      return;
    }

    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      toast.error('Authentication token not found.');
      return;
    }

    const formData = new FormData();
    formData.append('product', JSON.stringify({
      id: shopId,
      shopName: data.shopName,
      description: data.description,
      shopEmail: data.shopEmail,
      shopPhonumber: data.shopPhoneNumber,
      industry: data.industry,
      shippingAddress: data.shippingAddress,
      shopAddress: data.shopAddress,
      categoryId: data.categoryId,
    }));

    if (data.shopImage) {
      formData.append('file', data.shopImage);
    }

    try {
      const response = await axios.put('https://scs-api.arisavinh.dev/api/v1/shop/update', formData, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 && response.data.isSuccess) {
        toast.success('Shop updated successfully!');
        navigate('/shop/dashboard');
      } else {
        toast.error(response.data.message || 'An error occurred');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error connecting to the server');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <ShopMenu />
  
      {/* Right Content Area */}  
      <div className="bg-white shadow-md rounded-lg w-full md:w-3/4 p-6 mx-auto lg:ml-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Chỉnh sửa cửa hàng</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên cửa hàng</label>
            <input
              type="text"
              name="shopName"
              value={data.shopName}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              rows="3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email của cửa hàng</label>
            <input
              type="email"
              name="shopEmail"
              value={data.shopEmail}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại của cửa hàng</label>
            <input
              type="tel"
              name="shopPhonumber"
              value={data.shopPhoneNumber}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CCCD của chủ sở hữu</label>
            <input
              type="text"
              name="cccdNumber"
              value={data.cccdNumber}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ngành</label>
            <input
              type="text"
              name="industry"
              value={data.industry}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ giao hàng</label>
            <input
              type="text"
              name="shippingAddress"
              value={data.shippingAddress}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ cửa hàng</label>
            <input
              type="text"
              name="shopAddress"
              value={data.shopAddress}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select
              name="categoryId"
              value={data.categoryId}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
              ))}
            </select>
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh cửa hàng</label>
            {avatarPreview && <img src={avatarPreview} alt="Avatar Preview" className="w-32 h-32 object-cover mb-3" />}
            <input
              type="file"
              name="shopImage"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2"
            />
          </div>
  
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-md transition duration-200"
            >
              Cập nhật cửa hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopUpdate;
