import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BackgroundBanner from "./BackgroundBanner";
const fonts = [
    "font-montserrat",
    "font-robotoMono",
    "font-oswald",
    "font-nunito",
    "font-playfair",
    "font-manrope",
    "font-quicksand",
    "font-dosis",
    "font-hanoienne",
];

const fontStyles = {
    "font-montserrat": "md:text-[100px] leading-[1.4]",
    "font-robotoMono": "md:text-[120px] leading-[1.25]",
    "font-oswald": "md:text-[120px] leading-[1.25]",
    "font-nunito": "md:text-[100px] leading-[1.4]",
    "font-playfair": "md:text-[100px] leading-[1.4]",
    "font-manrope": "md:text-[100px] leading-[1.4]",
    "font-quicksand": "md:text-[100px] leading-[1.4]",
    "font-dosis": "md:text-[120px] leading-[1.1]",
    "font-hanoienne": "md:text-[100px] leading-[1.4]",
};

const Banner2 = () => {
    const [currentFont, setCurrentFont] = useState(fonts[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let animationFrameId;
        const changeFont = () => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % fonts.length; // Loop back to start
                setCurrentFont(fonts[nextIndex]); // Update the font
                return nextIndex; // Update the index
            });
            animationFrameId = setTimeout(changeFont, 1000); // Repeat every 1 second
        };

        changeFont();

        return () => {
            clearTimeout(animationFrameId); // Cleanup animation frame on unmount
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center px-16 md:px-40  overflow-hidden gap-16 md:gap-32 pt-8">
            {/* Background Animation */}
            <BackgroundBanner />
            {/* Left Text Section */}
            <motion.div
                className="flex-1 text-center md:text-left self-start"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Topline Text */}
                <motion.h1
                    className={`h-[600px] text-[48px] ${fontStyles[currentFont]} font-light md:font-bold uppercase tracking-[2px] md:tracking-wider ${currentFont}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    whileHover={{
                        letterSpacing: "4px",
                        color: "#E88933",
                    }}
                >
                    Second Chance Shop <br />
                    <span className="text-[70px] md:text-[80px] italic text-orange-300">
                        Bền vững
                    </span>
                </motion.h1>

                {/* Supporting Paragraph */}
                <motion.p
                    className="mt-2 text-[24px] md:text-[28px] font-medium leading-relaxed tracking-wider uppercase font-[Be Vietnam Pro]"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Kho báu hợp túi tiền. Mua sắm bền vững. <br />
                    Phong cách tạo nên sự khác biệt.
                </motion.p>

                {/* Call-to-Action Button */}
                <motion.button
                    className="mt-10 px-12 py-4 border-4 border-white text-white text-[24px] font-bold uppercase rounded-full tracking-wider hover:bg-white hover:text-black transition-all duration-300 relative"
                    whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.3)",
                        backgroundColor: "#E88933",
                        color: "#FFF",
                    }}
                >
                    Shop Now!
                    <motion.div
                        className="absolute inset-0 rounded-full border-[6px] border-orange-500 opacity-0"
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                    />
                </motion.button>
            </motion.div>

            {/* Right Image Section */}
            <div className="flex-1 flex justify-center mt-20 md:mt-0 space-x-10">
                {/* First Image */}
                <motion.div
                    className="relative transform rotate-[-10deg] rounded-[30px] overflow-hidden shadow-2xl"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img
                        src="https://m.media-amazon.com/images/I/811BWlyGc7L._AC_UF1000,1000_QL80_.jpg"
                        alt="Model 1"
                        className="w-[400px] h-[600px] object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Second Image */}
                <motion.div
                    className="relative transform rotate-[5deg] rounded-[30px] overflow-hidden shadow-2xl"
                    whileHover={{ rotate: 0, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img
                        src="https://pbs.twimg.com/media/EaLG8OnX0AU6-eL.jpg:large"
                        alt="Model 2"
                        className="w-[400px] h-[600px] object-cover"
                        loading="lazy"
                    />
                </motion.div>

                {/* Third Image */}
                <motion.div
                    className="relative transform rotate-[-5deg] rounded-[30px] overflow-hidden shadow-2xl"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img
                        src="https://m.media-amazon.com/images/I/51VzSLbARtS._AC_UF894,1000_QL80_.jpg"
                        alt="Model 3"
                        className="w-[400px] h-[600px] object-cover"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner2;
