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
import NotFound from "../pages/NotFound";
import RegisterShop from "../pages/Shop/RegisterShop";
import ShopDashboard from "../pages/Shop/ShopDashboard";
import Order from "../pages/Shop/Order";
import UserUpdate from "../pages/User/Update";
import CommitmentPage from "../pages/CommimentPage";

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
                path: "user-update",
                element: <UserUpdate />,
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
            {
                path: "shop-register",
                element: <RegisterShop />,
            },
            {
                path: "shop-dashboard",
                element: <ShopDashboard />,
                children: [
                    {
                        path: "add-product",
                        element: <RegisterShop />,
                    },
                    {
                        path: "orders",
                        element: <Order />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFound />,
            },
            {
                path: "commitments",
                element: <CommitmentPage />,
            },
        ],
    },
]);

export default router;
