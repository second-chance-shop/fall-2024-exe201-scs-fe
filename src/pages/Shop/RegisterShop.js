import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-modal';

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

    fetchCategories();
  }, [navigate]);

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

    if (!isAgree) {
        toast.error('Bạn phải đồng ý với các điều khoản của 2ndChanceShop.');
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
        formData.append('imageShop', data.shopImage);
    } else {
        toast.error('Bạn phải cung cấp hình ảnh cho shop.');
        return;
    }

    if (data.frontSideOfCCCD) {
        formData.append('cccdFont', data.frontSideOfCCCD);
    } else {
        toast.error('Bạn phải cung cấp hình ảnh cho mặt trước của CCCD.');
        return;
    }

    if (data.backSideOfCCCD) {
        formData.append('cccdBack', data.backSideOfCCCD);
    } else {
        toast.error('Bạn phải cung cấp hình ảnh cho mặt sau của CCCD.');
        return;
    }
    
    try {
        const response = await axios.post('https://scs-api.arisavinh.dev/api/v1/shop/create', formData, {
            headers: {
                Authorization: `${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200 && response.data.isSuccess) {
            toast.success('Đăng ký shop thành công!');
            navigate('/shop-manage');
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
              name="frontSideOfCCCD"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Hình ảnh CCCD Mặt sau</label>
            <input
              type="file"
              name="backSideOfCCCD"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="agree"
              checked={isAgree}
              onChange={() => setIsAgree(!isAgree)}
              required
            />
            <label htmlFor="agree" className="ml-2">
              Tôi đồng ý với{' '}
              <button type="button" onClick={openTermsModal} className="text-blue-500 underline">
                điều khoản
              </button>
            </label>
          </div>
          <button
            type="submit"
            className={`w-full p-2 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={loading}
          >
            {loading ? 'Đang xử lý...' : 'Đăng ký Shop'}
          </button>
        </form>
      </div>

      <Modal isOpen={isTermsOpen} onRequestClose={closeTermsModal} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transition-transform transform scale-95 hover:scale-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Điều khoản và điều kiện</h2>
          <p className="text-gray-600 mb-4">
            Chào mừng bạn đến với 2ndChanceShop! Trước khi bạn đăng ký một shop, hãy đọc kỹ các điều khoản và điều kiện dưới đây:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Bạn phải trên 18 tuổi để đăng ký.</li>
            <li>Bạn phải cung cấp thông tin chính xác và đầy đủ.</li>
            <li>Chúng tôi bảo lưu quyền từ chối hoặc chấm dứt tài khoản của bạn nếu bạn vi phạm các điều khoản.</li>
            <li>Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào liên quan đến shop của bạn.</li>
          </ul>
          <button onClick={closeTermsModal} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">Đóng</button>
        </div>
      </Modal>

    </div>
  );
};

export default RegisterShop;
