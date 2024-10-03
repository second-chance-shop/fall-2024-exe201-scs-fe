import React, { useRef, useState } from "react";
import ProductCard from "../ProductCard";
import Banner from "./Banner";
import ProductDeal from "./ProductDeal";

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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // The multiplier controls scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div class="text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent m-0 mx-auto mt-[30px] p-[0_44px] user-select-none box-border touch-manipulation flex w-full min-w-[1080px] max-w-[1440px]">
            <section class="w-full text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation block relative">
                <Banner />
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-4 pb-2 cursor-grab scrollbar-hide"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative">
                        <div className="relative visible">
                            <div className="relative overflow-hidden z-0">
                                <ul className="flex h-full backface-hidden translate-x-0">
                                    {deals.map((deal) => (
                                        <ProductDeal key={deal.id} deal={deal}></ProductDeal>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LightningDeals;
