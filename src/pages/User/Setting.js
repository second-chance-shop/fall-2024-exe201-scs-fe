// UserSetting.js
import React, { useState } from 'react';
import UserMenu from '../../components/User/UserMenu';

const UserSetting = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [error, setError] = useState('');

  const handleCurrentPasswordSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your logic to verify the current password
    if (currentPassword === 'correctOldPassword') { // Replace with actual logic
      setIsPasswordVerified(true);
      setError('');
    } else {
      setError('Mật khẩu không đúng. Vui lòng thử lại.');
    }
  };

  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword === confirmNewPassword) {
      // Implement password change logic here
      alert('Mật khẩu đã được thay đổi thành công!');
    } else {
      setError('Mật khẩu mới không khớp.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserMenu /> {/* Integrate UserMenu here */}

      {/* Settings Content */}
      <div className="flex-1 p-5">
        <h1 className="text-3xl font-bold mb-5">Cài đặt người dùng</h1>

        {!isPasswordVerified ? (
          <form onSubmit={handleCurrentPasswordSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">Xác thực mật khẩu hiện tại</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700">Mật khẩu hiện tại</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-orange-400 text-white py-2 px-2 rounded-md hover:bg-orange-600">
              Xác thực
            </button>
          </form>
        ) : (
          <form onSubmit={handleNewPasswordSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl mb-4">Đặt mật khẩu mới</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700">Mật khẩu mới</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Xác nhận mật khẩu mới</label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="bg-orange-400 text-white py-2 rounded-md hover:bg-orange-600">
              Thay đổi mật khẩu
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserSetting;
