import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import OtpVerification from "../pages/OTP_Verification";
import ForgotPassword from "../pages/ForgotPassword";
import About from "../pages/About";
import Test from "../pages/Test";
import ShoppingCart from "../pages/ShoppingCart";
import UserProfile from "../pages/User/Profile";
import UserSetting from "../pages/User/Setting";
import UserUpdate from "../pages/User/Update";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";
import RegisterShop from "../pages/Shop/RegisterShop";
import ShopManage from "../pages/Shop/ShopManage";
import ShopUpdate from "../pages/Shop/ShopUpdate";
import CommitmentPage from "../pages/CommimentPage";

// Import các component mới
import ShopDashboard from "../pages/Shop/Dashboard";
import AddProduct from "../pages/Shop/AddProduct";
import ProductManagement from "../pages/Shop/ProductManagement";
import StarAndComment from "../pages/Shop/StarAndComment";

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
                path: "user/",
                children: [
                    {
                        path: "profile",
                        element: <UserProfile />,
                    },
                    {
                        path: "update",
                        element: <UserUpdate />,
                    },
                    {
                        path: "setting",
                        element: <UserSetting />,
                    },
                    {
                        path: "shop-manage",
                        element: <ShopManage />,
                    },
                ],
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
                path: "shop/",
                children: [
                    {
                        path: "dashboard",
                        element: <ShopDashboard />,
                    },
                    {
                        path: "update",
                        element: <ShopUpdate />,
                    },
                    {
                        path: "add-product",
                        element: <AddProduct />,
                    },
                    {
                        path: "product-management",
                        element: <ProductManagement />,
                    },
                    {
                        path: "star-comment",
                        element: <StarAndComment />,
                    },
                ],
            },


            {
                path: "commitments",
                element: <CommitmentPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
