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
import CareersPage from "../pages/CareersPage";

//shop
import ShopDashboard from "../pages/Shop/Dashboard";
import ProductManagement from "../pages/Shop/ProductManagement";
import StarAndComment from "../pages/Shop/StarAndComment";

//product
import UploadProduct from "../pages/UploadProduct";
import AddProduct from "../pages/product/AddProduct";
import Details from "../pages/product/Details";
import Checkout from "../pages/Checkout";

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
                        path: "profile/:name",
                        element: <UserProfile />,
                    },
                    {
                        path: "update/:name",
                        element: <UserUpdate />,
                    },
                    {
                        path: "setting/:name",
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
                path: "product/:productId",
                element: <Product />, // Dynamic route for product with productId
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
                path: "shop/",
                children: [
                    {
                        path: "create",
                        element: <RegisterShop />,
                    },
                    {
                        path: "dashboard",
                        element: <ShopDashboard />,
                    },
                    {
                        path: "update/:shopName",
                        element: <ShopUpdate />,
                    },
                    {
                        path: "product/",
                        children: [
                            {
                                path: "management",
                                element: <ProductManagement />,
                            },
                            {
                                path: "add",
                                element: <AddProduct />,
                            },
                            {
                                path: "update/:productName",
                                element: <AddProduct />,
                            },
                            {
                                path: "details/:productName",
                                element: <Details />,
                            },
                        ],
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
            {
                path: "uploadproduct",
                element: <UploadProduct />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
            {
                path: "career",
                element: <CareersPage />,
            },
        ],
    },
]);

export default router;
