import React from "react";
import { useState } from "react";

// External array for path data
const paths = [
    "M512 727.8l-187 137.4c-16.3 12-39.2 8.5-51.1-7.8-7-9.5-9-21.9-5.3-33.1l73-220.4-188.6-135.3c-16.4-11.8-20.2-34.6-8.3-51.1 6.9-9.6 18.1-15.3 29.9-15.2l232.1 1.3 70.5-221.1c6.1-19.2 26.7-29.9 45.9-23.8 11.3 3.6 20.1 12.4 23.7 23.8l70.5 221.1 232.1-1.3c20.2-0.1 36.7 16.2 36.8 36.4 0.1 11.9-5.6 23-15.2 29.9l-188.6 135.3 73 220.4c6.3 19.2-4 39.9-23.2 46.2-11.2 3.7-23.6 1.8-33.2-5.3l-187-137.4z",
    "M810 470.7c23.6 0 42.7 19.1 42.7 42.6l-0.1 125.5 125.6 0c23.6 0 42.7 19.1 42.6 42.7 0 23.6-19.1 42.7-42.6 42.7l-125.6-0.1 0.1 125.6c0 23.6-19.1 42.7-42.7 42.6-23.6 0-42.7-19.1-42.7-42.6l0-125.6-125.5 0.1c-23.6 0-42.7-19.1-42.6-42.7 0-23.6 19.1-42.7 42.6-42.7l125.5 0 0-125.5c0-23.6 19.1-42.7 42.7-42.6z",
    "M810 470.7c23.6 0 42.7 19.1 42.7 42.6l-0.1 125.5 125.6 0c23.6 0 42.7 19.1 42.6 42.7 0 23.6-19.1 42.7-42.6 42.7l-125.6-0.1 0.1 125.6c0 23.6-19.1 42.7-42.7 42.6-23.6 0-42.7-19.1-42.7-42.6l0-125.6-125.5 0.1c-23.6 0-42.7-19.1-42.6-42.7 0-23.6 19.1-42.7 42.6-42.7l125.5 0 0-125.5c0-23.6 19.1-42.7 42.7-42.6z m-65.2-374c66.7 0 126.6 40.6 151.4 102.5l17 42.3c1.9 4.7 3.5 9.4 4.8 14.3l1.4 6.1-0.6-2.9 3.1 8c5.8 16.4 9.4 33.5 10.6 51.1l0.5 13.3c0 6.3-0.3 12.6-0.9 18.8-0.6 6.4-1.4 12.8-2.5 19.2-4 23.2-26 38.8-49.3 34.8-23.2-4-38.8-26-34.8-49.2l0.6-4.8 0.8-6.8c1.1-14.4-0.4-29.2-4.5-44.7l0-0.6c-1-3.1-2.2-6.2-3.5-9.2l-2.6-8.2c-0.5-2.5-1.3-5-2.3-7.4l-17-42.4c-11.8-29.5-40.4-48.9-72.2-48.9l-518.9 0c-32 0-60.8 19.6-72.5 49.5l-17 43.5c-0.5 1.3-1 2.7-1.3 4l-2.5 6.6c-6.7 14.2-10.3 29.7-10.3 45.8 0 58.9 47.8 106.7 106.7 106.6 37.9 0 72.3-19.9 91.4-51.7 16.6-27.6 56.5-27.6 73.1 0 19.2 31.9 53.6 51.8 91.5 51.7 37.9 0 72.3-19.9 91.3-51.7 7.3-12.2 19.2-19.1 31.7-20.4 16-2.4 32.8 4.4 42.2 18.9 11.3 17.4 18.2 25.9 25.5 31.1 19.2 13.7 23.6 40.4 9.8 59.5-13.7 19.2-40.4 23.6-59.5 9.9-4.7-3.4-9.1-6.9-13.1-10.7-31.8 28.3-72.3 45.7-116 48.4l-11.9 0.4c-48.1 0-93.1-17.8-127.6-48.5l-0.5-0.4c-31.9 28.5-72.4 45.9-116 48.5l-11.9 0.4c-7.2 0-14.4-0.4-21.4-1.2l0 257.2c0 11.8 9.6 21.3 21.4 21.3l256.5 0c23.6 0 42.7 19.1 42.7 42.7 0 23.6-19.1 42.7-42.7 42.6l-256.5 0c-58.9 0-106.7-47.8-106.7-106.6l-0.1-288.4c-51.4-34.4-85.3-93.1-85.2-159.6 0-24 4.4-47.5 12.9-69.5l4.3-9.9 0.7-2.3 2.1-5.7 17-43.5c24.5-62.6 84.8-103.7 151.9-103.8l518.9 0z",
];

// External object for image data
const images = {
    secondImage:
        "https://aimg.kwcdn.com/upload_aimg/pho/57cbade9-8b56-4587-9fa4-ae58c61830ff.png.slim.png?imageView2/2/w/800/q/70/format/webp",
    thirdImage:
        "https://aimg.kwcdn.com/upload_aimg/pho/f4259b07-fa91-4db1-b543-4a82619a7d99.png.slim.png?imageView2/2/w/800/q/70/format/webp",
};

const ButtonContainers = () => {
    const [hoveredFollow, setHoveredFollow] = useState(false);
    const [hoveredShop, setHoveredShop] = useState(false);

    return (
        <div class=" justify-start h-[38px] mb-1 w-full gap-x-[10px] flex items-center flex-row">
            <div
                tabindex="0"
                role="button"
                class="flex items-center justify-center cursor-pointer select-none relative z-1 p-[0_17px] w-[42%] h-[42px] flex-shrink-0 flex-grow-0 rounded-[21px]"
                onMouseEnter={() => setHoveredFollow(true)} // Set hovered to true on mouse enter
                onMouseLeave={() => setHoveredFollow(false)} // Set hovered to false on mouse leave
            >
                <span
                    class={`inline-block absolute z-[-1] inset-0 rounded-full bg-white border border-solid border-[#888] ${
                        hoveredFollow
                            ? "border-[#222] scale-[1.02] shadow-[0_0_0_1px_#222]"
                            : "border-[#888]"
                    } transition-all duration-300 ease-in-out`}
                ></span>
                <div>
                    <span className="box-border inline-flex items-center max-h-[32px] overflow-hidden line-clamp-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 1024 1024"
                            width="1em"
                            height="1em"
                            fill="#000000"
                            class="text-[1.2em] font-semibold text-center cursor-pointer select-none leading-4 text-[#222] w-1em h-1em border-0 tap-highlight-transparent m-0 p-0 box-border relative mr-[3px]  align-top overflow-visible fill-[#222]"
                        >
                            <path d={paths[2]}></path>
                        </svg>
                        Follow
                    </span>
                </div>
            </div>
            <div
                tabindex="0"
                role="button"
                class="flex items-center justify-center cursor-pointer select-none relative z-1 p-[0_17px] w-[42%] h-[42px] flex-shrink-0 flex-grow-0 rounded-[21px]"
                onMouseEnter={() => setHoveredShop(true)} // Set hovered to true on mouse enter
                onMouseLeave={() => setHoveredShop(false)} // Set hovered to false on mouse leave
            >
                <span
                    class={`inline-block absolute z-[-1] inset-0 rounded-full bg-white border border-solid border-[#888] ${
                        hoveredShop
                            ? "border-[#222] scale-[1.02] shadow-[0_0_0_1px_#222]"
                            : "border-[#888]"
                    } transition-all duration-300 ease-in-out`}
                ></span>
                <div>
                    <span class="text-[14px] leading-4 font-semibold text-center cursor-pointer">
                        <a href="/--m-5030521703152.html">Shop all items (102)</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

const SellerImage = ({ image, name }) => {
    return (
        <a href="#">
            <div class="box-border mr-[20px] rounded-full overflow-hidden relative w-[100px] h-[100px]">
                <img src={image} alt={name} loading="lazy" decoding="async" />
            </div>
        </a>
    );
};

const mockSeller = {
    name: "atman devi",
    followers: 794,
    products_sold: 120389,
    rating: 4.8,
    profile_image:
        "https://img.kwcdn.com/supplier-public-tag/1e19d46b22c/555998bf-ad38-425a-9359-424af806be95_300x300.jpeg?imageView2/2/w/300/q/70/format/webp",
};

const SellerBasicInformation = ({ seller = mockSeller }) => {
    return (
        <div id="SellerBasicInformation" class="box-border w-full mt-[48px]">
            <div class="w-full flex items-center">
                <SellerImage image={seller.profile_image} name={seller.name} />

                <div class="w-[calc(100%-120px)] flex flex-col justify-between gap-[8px] h-[100px]">
                    <div class="w-full">
                        <div
                            tabindex="0"
                            role="link"
                            class="h-[26px] text-[22px] leading-[25px] text-[#222] font-semibold cursor-pointer text-ellipsis whitespace-nowrap"
                        >
                            {seller.name}
                        </div>

                        <div class="mt-[2px] flex items-center">
                            <div class="flex items-center">
                                <div
                                    tabindex="0"
                                    role="link"
                                    aria-label="794 Followers"
                                    class="flex items-center mr-[15px]"
                                >
                                    <div
                                        aria-hidden="true"
                                        class="text-[14px] leading-[20px] font-semibold text-black mr-[4px] whitespace-nowrap"
                                    >
                                        {seller.followers}
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        class="text-[14px] leading-5 text-gray-500 font-light"
                                    >
                                        Followers
                                    </div>
                                </div>
                                <div
                                    tabindex="0"
                                    role="link"
                                    aria-label="100K+ Sold"
                                    class="flex items-center mr-[15px] px-[15px]"
                                >
                                    <div
                                        aria-hidden="true"
                                        class="text-[14px] leading-6 text-black font-semibold mr-[4px] whitespace-nowrap"
                                    >
                                        {seller.products_sold}
                                    </div>
                                    <div
                                        aria-hidden="true"
                                        class="text-[14px] leading-5 text-[#888] font-light"
                                    >
                                        Sold
                                    </div>
                                </div>
                                <div
                                    tabindex="0"
                                    role="link"
                                    aria-label="4.8 Rating"
                                    class="m-0 p-0 box-border flex flex-row items-center relative mr-[15px]"
                                >
                                    <div
                                        aria-hidden="true"
                                        class="text-[14px] leading-6 text-black font-semibold list-none text-center mr-[4px] whitespace-nowrap"
                                    >
                                        {seller.rating}
                                    </div>
                                    <div aria-hidden="true">
                                        <svg viewBox="0 0 1024 1024" width="1em" height="1em">
                                            <path d={paths[0]}></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ButtonContainers />
                </div>
            </div>
            <div class="mt-[16px] relative overflow-x-hidden">
                <div class="flex flex-wrap w-[calc(100%+23px)] gap-y-[10px]">
                    <div class="flex justify-center items-center">
                        <img
                            src={images.secondImage}
                            aria-hidden="true"
                            alt=""
                            class="w-[17px] h-[17px] mr-4"
                        />
                        <div class="text-[13px] font-medium leading-6 text-black whitespace-nowrap overflow-hidden overflow-ellipsis">
                            High repeat customers provider
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="w-[1px] h-[9px] bg-black mx-[11px]"></div>
                        <img
                            src={images.thirdImage}
                            aria-hidden="true"
                            alt=""
                            class="w-[17px] h-[17px] mr-[4px]"
                        />
                        <div class="text-[13px] font-medium leading-6 text-black">
                            Established 1 year ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerBasicInformation;
