import React from "react";

const HeroBanner = () => {
    return (
        <div className="bg-[#C67017]">
            <div className="mx-auto min-w-[1080px]  px-11">
                <img
                    src="/hero-image.webp" // Assuming it's in the public folder
                    alt="Hero Banner"
                    className="w-full" // Make the image take up the full width of its container
                />
            </div>
        </div>
    );
};

export default HeroBanner;
