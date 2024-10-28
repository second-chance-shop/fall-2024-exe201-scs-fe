import React from 'react';
import welcomeGif from '../assest/welcome.gif';

const Welcome = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md transition-transform transform hover:scale-105">
        <img 
          src={welcomeGif} 
          alt="Chào mừng" 
          className="mb-4 rounded-lg shadow-md"
        />
        <h1 className="text-3xl font-bold mb-4 animate-bounce">Chào mừng bạn đến với 2ndChanceShop!</h1>
        <p className="text-lg mb-6">
          Chúng tôi rất vui mừng được chào đón bạn tham gia vào cộng đồng bán hàng của chúng tôi.
        </p>
        <p className="text-md mb-4">
          Bắt đầu tạo shop của bạn và khám phá các cơ hội kinh doanh mới ngay hôm nay!
        </p>
        <button
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-200"
          onClick={onStart}
        >
          Bắt đầu
        </button>
      </div>
    </div>
  );
};

export default Welcome;
