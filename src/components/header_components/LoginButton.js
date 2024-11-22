import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoginButton = () => {
    const user = useSelector((state) => state.user.user);

    if (user) {
        return null; // Hide the login button if the user is already logged in
    }

    return (
        <Link
            to={"/login"}
            className="text-white bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 rounded-full font-bold shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
        >
            Login
        </Link>
    );
};

export default LoginButton;
