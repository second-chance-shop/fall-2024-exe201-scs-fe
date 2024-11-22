import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
    const images = Array(20).fill("/hero-image.webp"); // 20 placeholder images
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative bg-gradient-to-br from-[#C67017] via-[#D87A20] to-[#E88933] h-[80vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Hero Text */}
            <div className="absolute text-center z-10 mb-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="text-white text-5xl font-bold mb-2 drop-shadow-lg"
                >
                    Unleash the Power of Design
                </motion.h1>
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#E67017",
                        color: "#FFF",
                    }}
                    className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                    Get Started
                </motion.button>
            </div>

            {/* Carousel 1 */}
            <div
                className="absolute bottom-16 left-0 w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex space-x-4"
                    initial={{ x: 0 }}
                    animate={{
                        x: isHovered ? 0 : ["0%", "-100%"],
                        transition: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={`carousel1-${index}`}
                            className="flex-none w-[200px] h-[120px] bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                rotate: 3,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <img
                                src={image}
                                alt={`Carousel Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Carousel 2 (Opposite Direction) */}
            <div
                className="absolute bottom-8 left-0 w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex space-x-4"
                    initial={{ x: 0 }}
                    animate={{
                        x: isHovered ? 0 : ["0%", "100%"],
                        transition: {
                            repeat: Infinity,
                            duration: 22,
                            ease: "linear",
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={`carousel2-${index}`}
                            className="flex-none w-[200px] h-[120px] bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                rotate: -3,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <img
                                src={image}
                                alt={`Carousel Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Carousel 3 (Slower Movement) */}
            <div
                className="absolute bottom-0 left-0 w-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    className="flex space-x-4"
                    initial={{ x: 0 }}
                    animate={{
                        x: isHovered ? 0 : ["0%", "-100%"],
                        transition: {
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={`carousel3-${index}`}
                            className="flex-none w-[200px] h-[120px] bg-white rounded-lg shadow-lg overflow-hidden relative cursor-pointer"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <img
                                src={image}
                                alt={`Carousel Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default HeroBanner;
