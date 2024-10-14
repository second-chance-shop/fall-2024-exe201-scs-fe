import React, { useRef, useState } from "react";
import Banner from "./Banner";
import ProductDeal from "./ProductDeal";

const mockProducts = [
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/04614cad-ef5e-4237-a13c-d4d0322d1fdc.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$129.99",
        product_sale_price: "$32.29",
        product_sale_percentage: "-75%",
        product_sold: "40",
        product_rating: "4.7",
        product_number_of_rating: "3",
        product_sale_remaining: "Only 8 left",
        product_time: "01:23:52:37",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/b4ba30ea-c6ad-47f3-82f8-467eb720b676.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$19.99",
        product_sale_price: "$12.34",
        product_sale_percentage: "-38%",
        product_sold: "232",
        product_rating: "3",
        product_number_of_rating: "2",
        product_sale_remaining: "",
        product_time: "",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/local-goods-image/1f66680440/a3731e36-c038-4e03-b099-7a567260fae1.jpeg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$129.99",
        product_sale_price: "$5.83",
        product_sale_percentage: "-75%",
        product_sold: "",
        product_rating: "4.7",
        product_number_of_rating: "3",
        product_sale_remaining: "Almost sold out",
        product_time: "04:23:47:57",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/0d0f3042-a613-474f-8472-9ab989ed0d34.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$16.99",
        product_sale_price: "$1.96",
        product_sale_percentage: "-88%",
        product_sold: "8100",
        product_rating: "4.7",
        product_number_of_rating: "754",
        product_sale_remaining: "",
        product_time: "01:23:47:03",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/d135c7ae-910e-4ba2-b74f-724d1352583c.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$13.95",
        product_sale_price: "$1.47",
        product_sale_percentage: "-89%",
        product_sold: "34442",
        product_rating: "4.8",
        product_number_of_rating: "4,123",
        product_sale_remaining: null, // No "Only X left" data provided
        product_time: "23:46:28",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/market/406c944ddca3720d93a464f84dd7b582_ZUF7Q9RVxnlfR.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$119.00",
        product_sale_price: "$39.47",
        product_sale_percentage: "-66%",
        product_sold: "3452",
        product_rating: "4.7",
        product_number_of_rating: "512",
        product_sale_remaining: "Almost sold out",
        product_time: "N/A", // Not specified in the second HTML block
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/market/4a0eb569ab00abe33982bcf6e06f88db_F362gvohxVvSX.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$54.95",
        product_sale_price: "$9.89",
        product_sale_percentage: "-82%",
        product_sold: "24412",
        product_rating: "4.8",
        product_number_of_rating: "2,896",
        product_sale_remaining: "Almost sold out",
        product_time: "03:23:44:45",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/0ed6dd66-eb2c-4680-be3d-1c3c087fa375.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$13.99",
        product_sale_price: "$11.69",
        product_sale_percentage: "-16%",
        product_sold: "1600",
        product_rating: "4.9",
        product_number_of_rating: "205",
        product_sale_remaining: "Only 7 left",
        product_time: "03:23:43:43",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/market/0356c1dece709cd226aec259e2bcc61d_6ebPGqULzAqCk.jpeg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$62.51",
        product_sale_price: "$8.22",
        product_sale_percentage: "-86%",
        product_sold: "457",
        product_rating: "4.5",
        product_number_of_rating: "8",
        product_sale_remaining: "",
        product_time: "23:42:55",
    },
    {
        title: "Product Title",

        product_image:
            "https://img.kwcdn.com/product/fancy/41e8bcb9-6b17-49f2-92f0-ae3435ff1baa.jpg?imageView2/2/w/500/q/70/format/webp",
        product_price: "$39.64",
        product_sale_price: "$8.29",
        product_sale_percentage: "-79%",
        product_sold: "306",
        product_rating: "5",
        product_number_of_rating: "15",
        product_sale_remaining: "Only 7 left",
        product_time: "03:23:41:48",
    },
];

const LightningDeals = ({ deals = mockProducts, type, text1, text2 }) => {
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
        const walk = x - startX; // The multiplier controls scroll speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div class="mx-auto mt-8 flex w-full min-w-[1080px] max-w-[1440px] mb-[32px]   ">
            <section class="w-full user-select-none block relative scrollbarHide">
                <Banner imageIndex={type == "lightning" ? 0 : 1} text1={text1} text2={text2} />
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        paddingBottom: "8px", // pb-2 equivalent
                        cursor: "grab",
                        gap: "16px", // space-x-4 equivalent
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
