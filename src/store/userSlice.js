/**
 * userSlice.js
 *
 * This file manages the global user state using Redux Toolkit. It is designed to handle both:
 * 1. Old code logic (used in the old Header component).
 * 2. New features and improvements (for the new Header2 component).
 *
 * Key Features:
 * - Backward compatibility: Retains original functions like `setUserProfile` and `clearUserProfile`.
 * - Centralized login/logout management: Introduces `fetchUserProfile` and `logoutUser` async thunks.
 * - Improved user experience: Ensures consistent global state for both legacy and modern components.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "react-toastify";

/* ---------------------------------------------------
 * New Logic: fetchUserProfile
 * ---------------------------------------------------
 * This async thunk is used to fetch the user profile
 * from the API using the token stored in AsyncStorage.
 *
 * Designed for the new Header2 component.
 */
export const fetchUserProfile = createAsyncThunk(
    "user/fetchUserProfile",
    async (_, { rejectWithValue }) => {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) return rejectWithValue("No token found");

        try {
            const response = await fetch("https://scs-api.arisavinh.dev/api/v1/user/profile", {
                headers: { Authorization: token },
            });
            const result = await response.json();
            if (result.isSuccess) {
                return result.data; // User profile data
            } else {
                throw new Error(result.message || "Failed to fetch user profile");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/* ---------------------------------------------------
 * New Logic: logoutUser
 * ---------------------------------------------------
 * This async thunk manages the user logout process:
 * - Clears AsyncStorage (e.g., `userToken`, etc.).
 * - Resets global user state in Redux.
 * - Provides feedback via toast notifications.
 *
 * Designed for the new Header2 component.
 */
export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { dispatch, rejectWithValue }) => {
        try {
            // Clear all relevant data from AsyncStorage
            await AsyncStorage.removeItem("userToken");
            await AsyncStorage.removeItem("selectedShopId");
            await AsyncStorage.removeItem("productId");

            // Dispatch clearUserProfile to reset Redux state
            dispatch(clearUserProfile());

            // Show success message
            toast.success("Đăng xuất thành công!");
        } catch (error) {
            console.error("Error during logout:", error);
            toast.error("Đã xảy ra lỗi trong quá trình đăng xuất.");
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    user: null, // Holds user profile data
    isLoggedIn: false, // Indicates login status (new addition for Header2)
    loading: false, // Tracks loading status for async actions
    error: null, // Holds any error message from async actions
};

/* ---------------------------------------------------
 * userSlice
 * ---------------------------------------------------
 * This slice manages user-related state globally.
 * Includes both old and new logic for compatibility.
 */
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        /* --------------------------------------------
         * Old Logic: setUserProfile
         * --------------------------------------------
         * Sets the user profile in the Redux store.
         * Used in the old Header component.
         */
        setUserProfile: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = !!action.payload; // Automatically sync login status
        },

        /* --------------------------------------------
         * Old Logic: clearUserProfile
         * --------------------------------------------
         * Clears the user profile and resets login state.
         * Used in the old Header component.
         */
        clearUserProfile: (state) => {
            state.user = null;
            state.isLoggedIn = false; // Automatically sync login status
        },
    },
    extraReducers: (builder) => {
        builder
            /* --------------------------------------------
             * New Logic: fetchUserProfile
             * --------------------------------------------
             * Handles user profile fetching for Header2.
             */
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.loading = false;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.user = null;
                state.isLoggedIn = false;
                state.loading = false;
                state.error = action.payload || "Failed to fetch user profile";
            })

            /* --------------------------------------------
             * New Logic: logoutUser
             * --------------------------------------------
             * Handles user logout for Header2.
             */
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;

/* ---------------------------------------------------
 * Developer Notes:
 * ---------------------------------------------------
 * 1. Backward Compatibility:
 *    - Old reducers (`setUserProfile`, `clearUserProfile`) remain untouched.
 *    - Old Header uses these directly.
 *
 * 2. New Features:
 *    - `fetchUserProfile` is an async thunk for fetching user data.
 *    - `logoutUser` is an async thunk for handling logout.
 *
 * 3. Future Development:
 *    - All user-related logic should live here to avoid duplication.
 *    - Consider adding token refresh logic for seamless login sessions.
 */
