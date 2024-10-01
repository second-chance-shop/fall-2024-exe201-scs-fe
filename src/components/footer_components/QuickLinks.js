import React from "react";

const QuickLinks = () => {
    return (
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
                <li>
                    <a href="#" className="hover:text-gray-300">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-gray-300">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default QuickLinks;
