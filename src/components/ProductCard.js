import React from "react";

const ProductCard = ({ deal }) => {
    if (!deal) {
        return ""; // Or render a placeholder/error message if you prefer
    }
    const { title, originalPrice, salePrice, imageUrl } = deal;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            ) : (
                <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            )}
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <div className="flex items-center">
                    <span className="text-gray-600 line-through mr-2">{originalPrice}</span>
                    <span className="text-red-500 font-bold">{salePrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
