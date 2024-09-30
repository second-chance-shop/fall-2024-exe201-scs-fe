import React from "react";
import { useRef } from "react";
import ProductCard from "../ProductCard";

/* MOCK DATA*/
const deals = [
    {
        id: 1,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    // Add more deals as needed
    {
        id: 1,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 3,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 4,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 5,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 1,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    // Add more deals as needed
    {
        id: 1,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 3,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 4,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
    {
        id: 5,
        title: "Product Title",
        originalPrice: "$100",
        salePrice: "$75",
        imageUrl: null, // Replace with your actual image URL
    },
];
/* MOCK DATA*/

const LightningDeals = ({}) => {
    const scrollRef = useRef(null);

    // Handle drag to scroll behavior
    const handleMouseDown = (e) => {
        const slider = scrollRef.current;
        slider.isDown = true;
        slider.startX = e.pageX - slider.offsetLeft;
        slider.scrollLeftStart = slider.scrollLeft;
    };

    const handleMouseMove = (e) => {
        const slider = scrollRef.current;
        if (!slider.isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - slider.startX) * 1.5; // Scroll speed
        slider.scrollLeft = slider.scrollLeftStart - walk;
    };

    const handleMouseUp = () => {
        scrollRef.current.isDown = false;
    };

    const handleMouseLeave = () => {
        scrollRef.current.isDown = false;
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">Lightning Deals</h2>
            <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 pb-2 cursor-grab scrollbar-hide"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex space-x-4 w-full">
                    {deals.map((deal) => (
                        <div className="min-w-[25%] max-w-[25%] flex-shrink-0" key={deal.id}>
                            <ProductCard deal={deal} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LightningDeals;
