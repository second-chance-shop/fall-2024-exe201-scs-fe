import React, { useRef, useState } from "react";
import Banner from "./Banner";
import ProductDeal from "./ProductDeal";

const LightningDeals = ({ deals, type, text1, text2 }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragged, setDragged] = useState(false); // Tracks if the user dragged
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const displayedDeals =
        type === "lightning"
            ? deals.slice(0, 10) // First 10 deals for "lightning" type
            : deals.slice(10, 20); // Deals 11 to 20 for other types

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragged(false); // Reset dragged state on mousedown
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - walk;

        // If the user moves more than a few pixels, set dragged to true
        if (Math.abs(walk) > 5) {
            setDragged(true);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="mx-auto mt-8 flex w-full min-w-[1080px] max-w-[1440px] mb-[32px]">
            <section className="w-full user-select-none block relative scrollbarHide">
                <Banner imageIndex={type === "lightning" ? 0 : 1} text1={text1} text2={text2} />
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        paddingBottom: "8px",
                        cursor: "grab",
                        gap: "16px",
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // IE and Edge
                    }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative">
                        <div className="relative visible">
                            <div className="relative overflow-hidden z-0">
                                <ul className="flex h-full backface-hidden translate-x-0 scrollbar-hide select-none">
                                    {displayedDeals.map((deal) => (
                                        <ProductDeal
                                            key={deal.id}
                                            deal={deal}
                                            isDragging={dragged} // Pass dragging state
                                        ></ProductDeal>
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
