import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered image index

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    return (
        <div className="flex-[1.5] flex justify-center mt-20 md:mt-0 space-x-10">
            {[...Array(3)].map((_, index) => (
                <motion.div
                    key={index}
                    className="relative transform rounded-[30px] overflow-hidden shadow-2xl"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    animate={
                        hoveredIndex === index
                            ? { scale: 1.5, width: "700px", rotate: 0 } // Scale up, increase width
                            : hoveredIndex === null
                            ? { scale: 1, width: "600px", rotate: index === 1 ? 5 : -5 } // Reset
                            : { scale: 0.8, width: "500px", x: index < hoveredIndex ? -20 : 20 } // Shrink & move
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <img
                        src={
                            index === 0
                                ? "https://m.media-amazon.com/images/I/811BWlyGc7L._AC_UF1000,1000_QL80_.jpg"
                                : index === 1
                                ? "https://pbs.twimg.com/media/EaLG8OnX0AU6-eL.jpg:large"
                                : "https://m.media-amazon.com/images/I/51VzSLbARtS._AC_UF894,1000_QL80_.jpg"
                        }
                        alt={`Model ${index + 1}`}
                        className="w-[600px] h-[600px] object-cover"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGallery;
