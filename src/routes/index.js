import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Test from "../pages/Test";
import ForgotPassword from "../pages/ForgotPassword";
import ShoppingCart from "../pages/ShoppingCart";
import UserProfile from "../pages/User/Profile";
import UserSetting from "../pages/User/Setting";

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
                path: 'shopping-cart',
                element: <ShoppingCart />,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword/>,
            },
            {
                path: 'user-profile',
                element: <UserProfile />,
            },
            {
                path: 'user-setting',
                element: <UserSetting />,
            },
        ],
    },
]);

export default router;
