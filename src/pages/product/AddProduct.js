import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from 'react-toastify';
import ShopMenu from "../../components/ShopMenu";
import Loading from '../../components/Loading';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    description: '',
    categoryIds: [],
    prices: '',
    file: [],
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const shopId = await AsyncStorage.getItem("selectedShopId");

        if (!token || !shopId) {
          navigate("/user/shop-manage");
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
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      const newFiles = Array.from(files);
      setFormData((prev) => ({ 
        ...prev, file: [...prev.file, ...newFiles]
      }));
    } else {
      setFormData((prev) => ({ 
        ...prev, [name]: value 
      }));
    }
  };

  const handleCategoryChange = (e) => {
    const options = e.target.options;
    const selectedCategories = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedCategories.push(parseInt(options[i].value));
      }
    }
    setFormData((prev) => ({ ...prev, categoryIds: selectedCategories }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = await AsyncStorage.getItem("userToken");
    const shopId = await AsyncStorage.getItem("selectedShopId");

    if (!token || !shopId) {
      navigate("/user/shop-manage");
      return;
    }

    const { productName, quantity, description, prices, categoryIds, file } = formData;

    const productData = {
      productName,
      quantity: parseInt(quantity),
      description,
      categoryIds,
      prices: parseInt(prices),
      shopId: shopId,
    };

    const form = new FormData();
    form.append('product', JSON.stringify(productData));

    // Kiểm tra xem file có phải là một mảng và có ảnh không trước khi dùng forEach
    if (Array.isArray(file) && file.length > 0) {
      file.forEach((fileItem) => {
        form.append('file', fileItem);
      });
    }

    try {
      const response = await axios.post('https://scs-api.arisavinh.dev/api/v1/product/add', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `${token}`,
        },
      });
      console.log('Product added successfully', response.data);
      toast.success('Tạo sản phẩm thành công!')
      navigate('/shop/product/management');
    } catch (error) {
      console.error('Error adding product', error);
    } finally {
      setLoading(false);
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thêm sản phẩm</h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Tên sản phẩm */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Số lượng */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Mô tả */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Loại */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select
              name="categoryId"
              value={formData.categoryIds}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
              required
            >
              <option value="">Chọn danh mục</option>
              {categories.map((category) => (
                <option key={category.categoryIds} value={category.categoryId}>{category.categoryName}</option>
              ))}
            </select>
          </div>

          {/* Giá */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Giá</label>
            <input
              type="number"
              name="prices"
              value={formData.prices}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Ảnh sản phẩm */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Hình ảnh sản phẩm</label>
            <input
              type="file"
              name="file"
              accept="image/*"
              multiple
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md">
            Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
