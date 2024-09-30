import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3">Follow Us</h3>
            <div className="flex text-white space-x-4">
                <a href="#" className="p-3 bg-orange-500 rounded-full hover:bg-orange-300">
                    <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-orange-500 rounded-full hover:bg-orange-300">
                    <FaTwitter />
                </a>
                <a href="#" className="p-3 bg-orange-500 rounded-full hover:bg-orange-300">
                    <FaInstagram />
                </a>
                <a href="#" className="p-3 bg-orange-500 rounded-full hover:bg-orange-300">
                    <FaLinkedinIn />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
