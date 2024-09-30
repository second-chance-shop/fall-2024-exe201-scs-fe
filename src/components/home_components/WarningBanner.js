import React from "react";

const WarningComponent = () => {
    return (
        <div className="mx-auto p-5  items-center mt-7">
            <div className="border-1  border-green-500 text-white rounded-sm">
                <div
                    className="flex items-center space-x-2 justify-between bg-green-600 w-full px-5 text-base rounded-t-lg"
                    style={{ backgroundColor: "#0a8800" }}
                >
                    <div className="flex items-center">
                        <img
                            src="/warning_svg/security-check.webp"
                            alt="Temu's Commitments Icon"
                            className="h-5 w-5 text-white"
                        />
                        <span className="font-bold ml-1">Temu's Commitments</span>
                    </div>
                    <div>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <img
                                    src="/warning_svg/lock.webp"
                                    alt="Temu's Commitments Icon"
                                    className="h-5 w-5 text-white"
                                />
                                <span className="ml-1">Secure privacy</span>
                            </div>
                            <div className="flex items-center">
                                <img
                                    src="/warning_svg/credit.webp"
                                    alt="Temu's Commitments Icon"
                                    className="h-5 w-5 text-white"
                                />
                                <span className="ml-1">Safe payments</span>
                            </div>
                            <div className="flex items-center">
                                <img
                                    src="/warning_svg/delivery.webp"
                                    alt="Temu's Commitments Icon"
                                    className="h-5 w-5 text-white"
                                />
                                <span className="ml-1">Delivery guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-gray-400 bg-gray-100 text-green-700 flex items-center space-x-2 rounded-bl-md rounded-br-md ">
                    <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1 4h.01M12 8h.01M21 12c0 4.418-3.582 8-8 8S5 16.418 5 12s3.582-8 8-8 8 3.582 8 8z"
                        />
                    </svg>
                    <span className="text-green-100">
                        Be wary of messages about delivery issues claiming to be from USPS.
                    </span>
                    <a href="#" className="text-white underline">
                        View
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WarningComponent;
