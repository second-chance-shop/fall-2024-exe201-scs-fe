import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Sản phẩm 1',
      price: 29.99,
      quantity: 1,
      image: 'https://minhtuanmobile.com/uploads/products/240910114303-iphone-16-ultramarine-pdp-image-position-1a-ultramarine-color-vn-vi.jpg',
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      price: 19.99,
      quantity: 1,
      image: 'https://24hstore.vn/images/products/2024/08/22/large/iphone-15-hinh-1.jpg',
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle quantity change
  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle payment click
  const handlePay = () => {
    alert(`Đang tiến hành thanh toán với số tiền $${calculateTotal()}`);
  };

  // Navigate to home page
  const handleShopNow = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-5">Giỏ hàng</h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-5">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500">Giỏ hàng của bạn còn trống!</p>
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500 transition-all duration-300"
              onClick={handleShopNow}
            >
              Mua sắm ngay
            </button>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-4" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="border rounded px-2 py-1 mr-2"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="border rounded px-2 py-1 ml-2"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 text-red-600"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="mt-5 flex justify-between">
            <h2 className="text-xl font-semibold">Tổng cộng:</h2>
            <p className="text-xl">${calculateTotal()}</p>
          </div>
        )}
        {cartItems.length > 0 && (
          <button
            className="mt-5 w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition-all duration-300"
            onClick={handlePay}
          >
            Thanh toán
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
