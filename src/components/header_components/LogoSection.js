import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const LogoSection = () => {
    return (
        <div className="logo-container pl-4 flex items-center gap-3">
            <Link to={"/"} className="flex items-center group">
                <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
                <span className="ml-2 text-2xl font-extrabold text-gray-800 group-hover:text-gray-900 transition-all duration-300">
                    SecondChance
                </span>
            </Link>
        </div>
    );
};

export default LogoSection;
