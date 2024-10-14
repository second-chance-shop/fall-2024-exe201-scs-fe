import React from "react";

// Array containing product details

// Reusable ProductCard component
import { useState } from "react";

const ProductCard = ({ src, alt, href, price, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true); // Trigger animation on hover.
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 100); // Adjust the delay (in milliseconds) as needed
    };

    return (
        <div
            className={`bg-white p-0 flex flex-col justify-between items-center border rounded-md w-full 
                        transition-transform duration-150 ease-in-out 
                        ${
                            isHovered
                                ? "scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                                : "scale-100 shadow-none"
                        }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href={href} className="product-link flex flex-col items-center">
                <div className="image-container w-full flex justify-center items-center">
                    <img
                        src={src}
                        alt={alt}
                        className="product-image object-cover w-full aspect-square rounded"
                    />
                </div>
                <h3 className="product-title mt-4 text-center font-semibold text-sm">
                    {description}
                </h3>
            </a>
            <div className="product-price text-lg font-bold mt-2">
                <span>${Math.floor(price)}</span>.
                <span>{(price % 1).toFixed(2).split(".")[1]}</span>
            </div>
        </div>
    );
};

// Main component to display all products
const ProductRecommendList = ({ products }) => {
    return (
        <div className="product-list grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    src={product.src}
                    alt={product.alt}
                    href={product.href}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default ProductRecommendList;
