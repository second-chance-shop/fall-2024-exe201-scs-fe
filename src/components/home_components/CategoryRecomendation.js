import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

const CategoryList = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0); // Default to the first categoryId (0)
    const [isDragging, setIsDragging] = useState(false);
    const mouseIsDown = useRef(false); // Track if the mouse is actually down
    const startPos = useRef({ x: 0, y: 0 });
    const listRef = useRef();

    useEffect(() => {
        const fetchCategories = async () => {
            let fetchedCategories = [
                {
                    categoryId: 0,
                    categoryName: "Gợi Ý",
                },
            ];
            let categoryId = 10;
            let isSuccess = true;

            // Loop to fetch categories one by one until we reach 20 or hit an error
            while (isSuccess && fetchedCategories.length < 20) {
                try {
                    const response = await axios.get(
                        `https://scs-api.arisavinh.dev/api/v1/category/${categoryId}`,
                        {
                            headers: {
                                accept: "*/*",
                            },
                        }
                    );

                    if (response.data.isSuccess) {
                        fetchedCategories.push(response.data.data); // Push successful category
                        categoryId += 1; // Move to the next category
                    } else {
                        isSuccess = false; // Stop fetching if isSuccess is false
                    }
                } catch (error) {
                    // Stop fetching if there's an error (e.g., category doesn't exist)
                    break;
                }
            }

            // Assign fetched categories if we have any, otherwise use mockCategories
            if (fetchedCategories.length > 0) {
                setCategories(fetchedCategories); // Use successfully fetched categories
            }
        };

        fetchCategories();
    }, []);

    const handleSelect = (categoryId) => {
        if (!isDragging) {
            // Select only if not dragging
            setSelectedCategory(categoryId); // Set the selected category by ID
            onCategorySelect(categoryId); // Pass the selected categoryId back to the parent component
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
            const xDiff = Math.abs(event.clientX - startPos.current.x);

            if (xDiff > 10 && !isDragging) {
                setIsDragging(true); // Initiate dragging if moved significantly
            }

            if (isDragging) {
                const distance = event.clientX - startPos.current.x;
                listRef.current.scrollLeft -= distance * 1.1;
                startPos.current.x = event.clientX; // Update current x position for smooth dragging
            }
        }
    };

    const handleMouseUp = (event) => {
        mouseIsDown.current = false;
        if (isDragging) {
            setIsDragging(false);
        } else {
            // Handle category selection if not dragging
            const button = document.elementFromPoint(event.clientX, event.clientY);
            if (button && button.getAttribute("role") === "button") {
                handleSelect(Number(button.getAttribute("data-categoryid"))); // Select category based on ID
            }
        }
    };

    const handleMouseLeave = () => {
        mouseIsDown.current = false;
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
                {categories.length > 0 &&
                    categories.map((category) => (
                        <li key={category.categoryId} className="flex-shrink-0 relative">
                            <div
                                tabIndex="0"
                                className="visible list-none px-[12px] h-[56px] text-[14px] leading-[18px] font-medium text-[#222] flex flex-row"
                            >
                                <div
                                    title={category.categoryName}
                                    data-categoryid={category.categoryId} // Added categoryId as data attribute
                                    role="button"
                                    className={`font-semibold border-2 rounded-[28px] px-[25px] py-[5px] align-middle transition-all ${
                                        selectedCategory === category.categoryId
                                            ? "border-black"
                                            : "border-gray-300"
                                    } hover:shadow-lg`}
                                    onClick={() => handleSelect(category.categoryId)} // Pass the categoryId for selection
                                >
                                    <div className="text-[14px] leading-6 text-[#222] font-semibold whitespace-nowrap">
                                        {category.categoryName}
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
        <div id="CategoryRecomendation" className="relative mt-[20px] mb-[10px]">
            <div
                id="splide03"
                role="region"
                aria-roledescription="carousel"
                className="inline-block max-w-full"
            >
                <CategoryList onCategorySelect={onCategorySelect} />
            </div>
        </div>
    );
};

export default CategoryRecomendation;
