import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Test from "../pages/Test";
import ForgotPassword from "../pages/ForgotPassword";
import ShoppingCart from "../pages/ShoppingCart";
import UserProfile from "../pages/User/Profile";
import UserSetting from "../pages/User/Setting";
import Product from "../pages/Product";
import OtpVerification from "../pages/OTP_Verification";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "test",
                element: <Test />,
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
            {
                path: "user-profile",
                element: <UserProfile />,
            },
            {
                path: "user-setting",
                element: <UserSetting />,
            },
            {
                path: "product",
                element: <Product />,
            },
            {
                path: "otp-verification",
                element: <OtpVerification />,
            },
            {
                path: "about-us",
                element: <About />,
            },
            // Redirect to homepage ("/") if route not found
            {
                path: "*",
                element: <Navigate to="/" replace />,
            },
        ],
    },
]);

export default router;
