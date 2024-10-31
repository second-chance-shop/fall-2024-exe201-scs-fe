// authUtils.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toast } from 'react-toastify';
import { store } from '../store/store';
import { setUserProfile } from '../store/userSlice';

export const logoutUser = async () => {
  try {
    // Clear token from AsyncStorage
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('selectedShopId');
    await AsyncStorage.removeItem('productId');
    // Clear user profile in Redux store
    store.dispatch(setUserProfile());

    // Show success message
    toast.success('Đăng xuất thành công!');
  } catch (error) {
    console.error('Error during logout:', error);
    toast.error('Đã xảy ra lỗi trong quá trình đăng xuất.');
  }
};
