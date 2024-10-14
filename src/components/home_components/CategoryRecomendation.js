import React, { useRef, useState, useEffect, useCallback } from "react";

const categories = [
    "Recommended",
    "Women's Clothing",
    "Home & Kitchen",
    "Women's Curve Clothing",
    "Sports & Outdoors",
    "Women's Lingerie & Lounge",
    "Office & School Supplies",
    "Toys & Games",
    "Kids' Shoes",
    "Beachwear",
    "Men's Shoes",
    "Women's Shoes",
    "Smart Home",
    "Appliances",
    "Men's Underwear & Sleepwear",
    "Electronics",
    "Kids' Fashion",
    "Bags & Luggage",
    "Baby & Maternity",
    "Beauty & Health",
    "Musical Instruments",
    "Jewelry & Accessories",
    "Pet Supplies",
    "Business, Industry & Science",
    "Tools & Home Improvement",
    "Automotive",
    "Men's Clothing",
    "Health & Household",
    "Cell Phones & Accessories",
    "Patio, Lawn & Garden",
    "Arts, Crafts & Sewing",
    "Men's Big & Tall",
    "Food & Grocery",
    "Books",
];

const CategoryList = ({ onCategorySelect }) => {
    const [selectedCategory, setSelectedCategory] = useState("Recommended");
    const [isDragging, setIsDragging] = useState(false);
    const mouseIsDown = useRef(false); // Track if the mouse is actually down
    const startPos = useRef({ x: 0, y: 0 });
    const listRef = useRef();

    const handleSelect = (category) => {
        if (!isDragging) {
            // Select only if not dragging
            setSelectedCategory(category);
            onCategorySelect(category);
        }
    };

    const handleMouseDown = (event) => {
        mouseIsDown.current = true; // Set mouse down flag
        startPos.current = { x: event.clientX, y: event.clientY };
        setIsDragging(false);
        event.preventDefault(); // Prevent default to avoid text selection etc.
    };

    const handleMouseMove = (event) => {
        if (mouseIsDown.current) {
            // Only proceed if the mouse is actually down
            const xDiff = Math.abs(event.clientX - startPos.current.x);

            if (xDiff > 10 && !isDragging) {
                // Initiate dragging if moved significantly
                setIsDragging(true);
            }

            if (isDragging) {
                const distance = event.clientX - startPos.current.x;
                listRef.current.scrollLeft -= distance * 1.1;
                startPos.current.x = event.clientX; // Update current x position for smooth dragging
            }
        }
    };

    const handleMouseUp = (event) => {
        mouseIsDown.current = false; // Reset mouse down flag
        if (isDragging) {
            setIsDragging(false);
        } else {
            // Handle category selection if not dragging
            const button = document.elementFromPoint(event.clientX, event.clientY);
            if (button && button.getAttribute("role") === "button") {
                handleSelect(button.getAttribute("title"));
            }
        }
    };

    const handleMouseLeave = () => {
        mouseIsDown.current = false; // Ensure to reset on mouse leave
        setIsDragging(false);
    };

    return (
        <div
            ref={listRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="relative z-0 p-[10px] m-[-10px] overflow-hidden cursor-grab"
        >
            <ul className="flex h-full transition-transform">
                {categories.map((category, index) => (
                    <li key={index} className="flex-shrink-0 relative">
                        <div
                            tabIndex="0"
                            className="visible list-none px-[12px] h-[56px] text-[14px] leading-[18px] font-medium text-[#222] flex flex-row "
                        >
                            <div
                                title={category}
                                role="button"
                                className={`font-semibold border-2 rounded-[28px] px-[25px] py-[5px] align-middle transition-all ${
                                    selectedCategory === category
                                        ? "border-black"
                                        : "border-gray-300"
                                } hover:shadow-lg`}
                                onClick={() => handleSelect(category)} // Ensure this is the correct target for clicks
                            >
                                <div className="text-[14px] leading-6 text-[#222] font-semibold whitespace-nowrap">
                                    {category.split(" ")[0]}
                                </div>
                                <div className="text-[14px] leading-[18px] font-semibold whitespace-nowrap w-fit max-w-[200px] overflow-hidden text-ellipsis">
                                    {category.split(" ").slice(1).join(" ")}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CategoryRecomendation = ({ onCategorySelect }) => {
    return (
        <div id="CategoryRecomendation" class="relative mt-[20px] mb-[10px]">
            <div
                id="splide03"
                role="region"
                aria-roledescription="carousel"
                class="inline-block max-w-full"
            >
                <div>
                    <div
                        aria-label="Previous slide"
                        aria-controls="splide03-track"
                        class="absolute w-[84px] h-full flex items-center justify-end bg-gradient-to-r from-white to-transparent left-[-2px] z-10 opacity-0"
                    >
                        <div class="flex justify-center items-center w-[44px] h-[44px] relative">
                            <div class="w-full h-full rounded-full bg-white border border-[rgba(0,0,0,0.05)] absolute shadow-[0_-4px_7px_rgba(0,0,0,0.1)] transition-transform duration-150 ease"></div>
                            <svg
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                alt="common_arrows"
                                aria-label="common_arrows"
                                aria-hidden="true"
                                class="w-4 h-4 fill-black relative z-2 rotate-[-90deg]"
                            >
                                <path d="M846.6 329.7c19.9-17.2 49.9-15 67.1 4.9 15.4 17.9 15.2 44 0.5 61.6l-5.4 5.5-365.3 315.5c-15.9 13.7-38.5 15.2-55.8 4.6l-6.3-4.6-366.1-315.5c-19.9-17.1-22.1-47.2-5-67 15.4-17.9 41.3-21.5 60.8-9.6l6.2 4.6 335.1 288.7 334.2-288.7z"></path>
                            </svg>
                        </div>
                    </div>

                    <div aria-label="Next slide" aria-controls="splide03-track">
                        <div>
                            <svg
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                alt="common_arrows"
                                aria-label="common_arrows"
                                aria-hidden="true"
                            >
                                <path></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <CategoryList onCategorySelect={onCategorySelect} />
            </div>
        </div>
    );
};

export default CategoryRecomendation;
