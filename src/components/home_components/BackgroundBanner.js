import React from "react";
import { motion } from "framer-motion";

const carousel1 = [
    "1.png",
    "10.jpg",
    "100.png",
    "101.png",
    "102.png",
    "103.png",
    "104.png",
    "105.png",
    "106.png",
    "107.png",
    "108.png",
    "109.png",
    "11.jpg",
    "110.png",
    "111.png",
    "112.png",
    "113.png",
    "114.png",
    "115.png",
    "116.png",
];

const carousel2 = [
    "117.png",
    "118.png",
    "119.png",
    "12.png",
    "120.png",
    "121.png",
    "122.png",
    "123.png",
    "124.png",
    "125.png",
    "126.png",
    "127.webp",
    "128.png",
    "129.png",
    "13.jpg",
    "130.png",
    "131.png",
    "132.webp",
    "133.webp",
    "134.png",
];

const carousel3 = [
    "135.png",
    "136.png",
    "137.png",
    "138.png",
    "139.png",
    "14.webp",
    "140.png",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "17.png",
    "18.jpg",
    "19.jpg",
    "2.jpg",
    "20.jpg",
    "21.webp",
    "22.png",
    "23.png",
    "24.jpg",
    "25.jpg",
];

const carousel4 = [
    "26.png",
    "27.webp",
    "28.jpg",
    "29.webp",
    "3.jpg",
    "30.jpg",
    "31.webp",
    "32.jpg",
    "33.jpg",
    "34.png",
    "35.png",
    "36.jpg",
    "37.webp",
    "38.jpg",
    "39.webp",
    "3c8c29f6e2e74502144d20cb6f7473a0.png_2200x2200q80.png_.webp",
    "4.jpg",
    "40.jpg",
    "41.jpg",
];

const carousel5 = [
    "42.webp",
    "43.jpg",
    "44.jpg",
    "45.webp",
    "46.jpg",
    "47.jpg",
    "48.png",
    "49.png",
    "5.jpg",
    "50.webp",
    "51.jpg",
    "52.webp",
    "53.webp",
    "54.png",
    "55.png",
    "56.jpg",
    "57.png",
    "58.png",
    "59.png",
    "6.png",
];

const carousel6 = [
    "60.png",
    "61.png",
    "62.png",
    "63.png",
    "64.png",
    "65.png",
    "66.png",
    "67.webp",
    "68.png",
    "69.png",
    "7.jpg",
    "70.png",
    "71.png",
    "71T93tzqVhL._SX466_.jpg",
    "72.png",
    "73.png",
    "74.png",
    "75.png",
    "76.png",
    "77.png",
];

const carousel7 = [
    "78.jpg",
    "79.png",
    "8.png",
    "80.png",
    "81.png",
    "82.png",
    "83.png",
    "84.png",
    "85.png",
    "86.png",
    "87.png",
    "88.png",
    "89.jpg",
    "90.png",
    "91.png",
    "92.png",
    "93.png",
    "94.png",
    "95.png",
    "96.png",
];

const BackgroundBanner = () => {
    // Dynamically load images and shuffle them
    const carousels = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7];

    return (
        <div className="absolute inset-0 overflow-hidden z-0" style={{ top: "50px" }}>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Dynamic Carousels */}
            {carousels.map((images, index) => (
                <div
                    key={index}
                    className="absolute w-full overflow-hidden"
                    style={{ bottom: `${95 - index * 16}%` }} // Dynamically adjust bottom position
                >
                    <motion.div
                        className="flex space-x-8"
                        initial={{ x: index % 2 === 0 ? "0%" : "-100%" }}
                        animate={{
                            x: index % 2 === 0 ? "-100%" : "0%",
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 18 + index, // Adjust speed dynamically
                            ease: "linear",
                        }}
                    >
                        {images.map((image, idx) => (
                            <div
                                key={`carousel-${index}-${idx}`}
                                className="flex-none h-[120px] bg-white rounded-lg shadow-lg overflow-hidden relative"
                            >
                                <img
                                    src={`/BackgroundImages/resized_images/${image}`}
                                    alt={`Carousel Image ${idx + 1}`}
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default BackgroundBanner;
