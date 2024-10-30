import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StarRating from "../single_product_components/StarRating";
const svg_card_path =
    "M409.5 758.8c28.3 0 51.2 22.9 51.1 51.2 0 28.3-22.9 51.2-51.1 51.2-28.3 0-51.2-22.9-51.2-51.2 0-28.3 22.9-51.2 51.2-51.2zm327.7 0c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2-28.3 0-51.2-22.9-51.1-51.2 0-28.3 22.9-51.2 51.1-51.2zm-541-563.2c18.1 0 36.7 3.5 56.9 15.6 19.3 11.6 34.7 29.3 44.4 52.8l3.4 9 1.4 5.6 18.5 113.1L352.2 591c3.4 20.9 20.4 36.7 41 39l5.3.3h347.2c21.3 0 39.6-14.3 45.3-35.1l1.2-5.4 48.6-260.5c3.9-20.8 23.9-34.6 44.8-30.7 19.2 3.6 32.4 21 31.3 40l-.6 4.8-48.5 259.5c-9.2 57.5-57.1 100.4-114.5 103.9l-7.6.3H398.5c-60.6 0-112.3-43.9-122.1-104L240 372.8l-12.8-77.6-1-2.8c-2.6-6-5.9-10.3-9.8-13.3l-3-2.1c-4.4-2.6-8.8-3.9-13-4.4l-4.2-.2h-85.3c-21.2 0-38.4-17.2-38.4-38.4 0-19.6 14.6-35.7 33.6-38.1l4.8-.3h85.3zm382.2-1.2c19.6 0 35.7 14.6 38.1 33.6l.3 4.8v72.5h72.6c21.2 0 38.4 17.2 38.4 38.4 0 19.6-14.6 35.7-33.6 38.1l-4.8.3h-72.6v72.5c0 21.2-17.2 38.4-38.4 38.4-19.6 0-35.7-14.6-38.1-33.5l-.3-4.9v-72.5h-72.5c-21.2 0-38.4-17.2-38.4-38.4 0-19.6 14.6-35.7 33.6-38.1l4.8-.3H540v-72.5c0-21.2 17.2-38.4 38.4-38.4z";

const UserTitle = ({ user_titles }) => {
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        // Add a class to trigger the animation once mounted
        setAnimationClass("animate");
    }, []);
    //This will
    const keyframes = `
    @keyframes loop {
      0% { transform: translateY(-0px); }
45% { transform: translateY(-0px);}
50% { transform: translateY(-20px); }
95% { transform: translateY(-20px);}
100% { transform: translateY(-40px); }
    }
  `;

    const inlineAnimationStyles = {
        animation: "loop 6s ease-out infinite",
    };

    return (
        <div className="text-[12px] leading-6 cursor-pointer select-none mt-2 relative h-5 w-full overflow-hidden">
            {/* Inject Keyframes into a <style> tag */}
            <style>{keyframes}</style>

            <div className={`${animationClass}`} style={inlineAnimationStyles}>
                {[...user_titles, user_titles[0]].map((userTitle, index) => (
                    <div key={index} className="h-[20px] flex items-center">
                        <img
                            data-state="succ"
                            aria-hidden="true"
                            src={userTitle?.icon}
                            alt=""
                            data-was-processed="true"
                            className="shrink-0 w-4 h-4 mr-1"
                        />
                        <span className="text-[14px] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                            {userTitle?.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({
    title,
    sale_price,
    original_price,
    is_local,
    image,
    has_video,
    is_last_day,
    text_section,
    sold_number,
    is_almost_sold_out,
    number_of_rating,
    user_titles,
    rating,
    createByUsername,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate(); // Initialize navigation hook

    const handleMouseEnter = () => {
        setIsHovered(true); // Trigger animation on hover.
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false);
        }, 100); // Adjust the delay (in milliseconds) as needed
    };
    const handleNavigation = () => {
        navigate("/product"); // Redirect to product page
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
            role="button"
            onClick={handleNavigation}
        >
            <div
                aria-label="24in Lifelike Soft Silicone Reborn Doll - 60cm Handmade Art Toy with 3D-Paint Skin, Realistic Blood Vessels, and Unique Birthday Gift Idea"
                tabindex="-1"
                role="link"
                class="rounded-md relative w-full"
            >
                <div class=" p-[9px] h-full">
                    <div class="relavitve">
                        <div class="max-h-[256px] overflow-hidden">
                            <img
                                data-state="succ"
                                alt={title}
                                src={image}
                                data-was-processed="true"
                                className="h-[256px]"
                            />
                        </div>
                    </div>

                    <div class=" relative mt-2">
                        <a
                            href=""
                            class="text-[12px] leading-6 bg-transparent no-underline flex items-center"
                        >
                            <div class="text-[12px] leading-6 max-w-[calc(100%-40px)] flex items-center flex-shrink-0">
                                {is_local && (
                                    <div className="text-[13px] font-medium leading-[18px] text-[rgb(10,136,0)] flex items-center h-[18px] whitespace-nowrap rounded-[3px] border px-1 mr-[3px] min-w-0">
                                        <span className="text-[13px] font-medium leading-6 overflow-hidden text-ellipsis whitespace-nowrap">
                                            Gần bạn
                                        </span>
                                    </div>
                                )}
                            </div>

                            <h3 class="text-[14px] leading-[20px] text-[#777] block w-full whitespace-nowrap overflow-hidden text-ellipsis">
                                {title}
                            </h3>
                        </a>
                    </div>
                    {createByUsername && (
                        <div
                            data-type="saleTips"
                            className="text-[13px] text-[#777] ml-1 cursor-pointer select-none whitespace-nowrap mb-[4px]"
                        >
                            <span
                                aria-label={`bán bởi ${createByUsername}`}
                                className="inline-flex"
                            >
                                <span>bán bởi {createByUsername + " "}</span>
                            </span>
                        </div>
                    )}

                    <div class=" flex flex-row justify-between items-center relative mt-1">
                        <div
                            data-sales="true"
                            data-priority-list="5321489"
                            class="flex flex-col w-full overflow-hidden h-[22px] min-w-0 flex-wrap flex-shrink-0 basis-min-content max-w-[calc(100%-46px)]"
                        >
                            <div
                                data-ignore="true"
                                class="flex flex-wrap flex-row-reverse justify-end max-w-full shrink-0"
                            >
                                <div
                                    data-type="price"
                                    role="link"
                                    aria-label="Sale Price"
                                    class="text-[12px] leading-[22px] text-[#222] cursor-pointer select-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex h-[22px] whitespace-nowrap origin-[0_50%] mb-[10px] ml-[2px]"
                                >
                                    <div
                                        aria-hidden="true"
                                        class="text-[18px] leading-5 font-semibold text-[#222] mt-1"
                                    >
                                        {sale_price.toLocaleString("vi-VN") + "đ"}
                                    </div>
                                </div>
                            </div>

                            <div
                                data-ignore="true"
                                class="mt-[3px] flex flex-wrap items-baseline relative h-full shrink-0"
                            >
                                <div data-ignore="true" class="max-w-full flex flex-wrap mb-[10px]">
                                    <div
                                        data-type="marketPrice"
                                        class="text-[13px] text-[#777] ml-1 cursor-pointer select-none whitespace-nowrap"
                                    >
                                        <div class="inline-block whitespace-nowrap">
                                            <span class="font-sans relative line-through">
                                                {" "}
                                                {/* {original_price.toLocaleString("vi-VN") + "đ"} */}
                                            </span>
                                        </div>
                                    </div>

                                    {sold_number > 0 && (
                                        <div
                                            data-type="saleTips"
                                            className="text-[13px] text-[#777] ml-1 cursor-pointer select-none whitespace-nowrap mb-[4px]"
                                        >
                                            <span
                                                aria-label={`${sold_number} đã bán`}
                                                className="inline-flex"
                                            >
                                                <span>{sold_number + " "} đã bán</span>
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                role="button"
                                aria-label="Add to cart"
                                data-type="goodsCart"
                                class="text-[12px] bg-white leading-6 text-black list-none user-select-none border-0 tap-highlight-transparent m-0 ml-[4px] p-0 px-[6px] user-select-none box-border touch-manipulation cursor-pointer h-[28px] min-w-[43px] max-w-[124px] flex flex-row justify-center items-center relative"
                            >
                                <div className="absolute top-0 left-0 w-full h-full bg-white border border-[#222] rounded-[15px] transition-all duration-300 hover:border-[5px]"></div>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024"
                                    className="relative inline-block w-6 h-6 cursor-pointer overflow-hidden select-none"
                                >
                                    <path d={svg_card_path} />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {text_section.length > 0 && (
                        <div
                            data-active="0"
                            class="relative overflow-hidden h-[18px] m-[4px_0_-1px] mt-[2px]"
                        >
                            <div
                                data-active="1"
                                role="link"
                                aria-label="Almost sold out"
                                data-tag-id="91004"
                                class="text-[14px] leading-[18px] text-yellow-500 overflow-hidden max-w-[95%] inline-block text-ellipsis whitespace-nowrap duration-300 mr-2 h-[18px] opacity-100"
                            >
                                <div>
                                    <span>{text_section[0]}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {rating && (
                        <StarRating
                            className="text-[12px] leading-6 text-black list-none cursor-pointer select-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation mt-2 flex items-center"
                            rating={rating}
                            size={18}
                        />
                    )}

                    {user_titles && <UserTitle user_titles={user_titles} />}
                </div>
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
                    key={product.productId || index}
                    title={product.productName || product.title || ""} // productName in the API
                    sale_price={product.sale_price || product.prices}
                    is_local={product.is_local}
                    image={
                        Array.isArray(product.image) && product.image.length > 0
                            ? product.image[0]
                            : typeof product.image === "string" && product.image.trim() !== ""
                            ? product.image
                            : "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
                    }
                    has_video={product.has_video || "false"}
                    original_price={product.original_price || 0}
                    is_last_day={product.is_last_day || false}
                    text_section={product.text_section || false}
                    sold_number={product.sold_number || 0}
                    is_almost_sold_out={product.is_almost_sold_out || false}
                    rating={product.rating || 5}
                    number_of_rating={product.number_of_rating || 0}
                    user_titles={product.user_titles || []}
                    createByUsername={product.createByUsername || ""}
                />
            ))}
        </div>
    );
};

export default ProductRecommendList;
