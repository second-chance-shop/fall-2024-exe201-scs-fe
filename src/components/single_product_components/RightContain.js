import React from "react";
import { useState } from "react";
import StarRating from "./StarRating";

const mockProduct = {
    name: "Vibrant Floral Print Long Sleeve Crew Neck T-Shirt - Soft, Breathable, and Comfortable Casual Top for Spring and Fall - Women's Fashion Clothing for Everyday Wear",
};

const ExclusiveOffer = () => {
    return (
        <div class="text-[16px] leading-6 transition-all duration-150 ease-linear max-h-[100px] will-change-height">
            <div class="bg-[#feefe1] rounded-md pt-[10px] pr-[16px] pb-[10px] pl-[12px] min-h-[38px] box-border z-1 overflow-hidden relative flex justify-start items-center flex-row mb-[12px]">
                <div></div>
                <img
                    data-cui-image="1"
                    data-state="succ"
                    src="https://aimg.kwcdn.com/upload_aimg/promotion/8992b9e0-d3a2-42e6-9fd7-6022bdeed06e.png.slim.png?imageView2/2/w/800/q/70/format/webp"
                    alt=""
                    aria-hidden="true"
                    data-did-mount="1"
                    class="max-w-full align-top w-[16px] h-[16px] mr-[8px]"
                />
                <div class="max-h-[100%] relative flex flex-col items-start justify-center flex-1">
                    <div
                        aria-label="Free shipping special for you"
                        tabindex="0"
                        role="button"
                        aria-haspopup="dialog"
                    >
                        <span class="text-[14px] font-medium leading-6 text-black">
                            Free shipping special for you
                        </span>
                    </div>
                </div>
                <div>
                    <div aria-label="Exclusive offer" tabindex="0" role="button">
                        <span></span>
                        <span>
                            <span class="text-[14px] font-normal leading-[18px] text-[#4B4743] list-none border-0 shrink  max-h-[36px] relative text-right ml-2">
                                Exclusive offer
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShareTo = () => {
    const imageArray = [
        "https://aimg.kwcdn.com/upload_aimg/m-img/a4be7db3-f267-4e33-84fc-e5353601676e.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/c5ad282e-6bc7-4001-af37-540aa54b2c96.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/m-img/0ac31232-2f8f-43fe-8e21-aa0183fe7a48.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/e0ee1ad9-a15a-4dc3-8310-758e7d9791fb.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/c2372c56-c43c-4cf9-8111-82560d0c5fd9.png.slim.png?imageView2/2/w/800/q/70/format/webp",
    ];

    return (
        <div id="shareTo" class="fixed z-[1000] left-[1592.48px] top-[200px] w-[24px] h-0">
            <div class="absolute top-[100%] left-[50%] -translate-x-[50%] w-max border-t-[10px] border-t-transparent -mt-[10px]">
                <svg
                    alt="bubble_arrow"
                    aria-label="bubble_arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="1 0 22 8"
                    width="1em"
                    height="1em"
                    class="w-[22px] h-[8px] stroke-[#dfdfdf] stroke-1 fill-white mx-auto"
                >
                    <path
                        d="M0.913721065,9 C2.56449311,9 4.14234104,8.31987419 5.27579998,7.1197412 L10.5459737,1.53955726 C11.3043971,0.73652071 12.5702105,0.700354613 13.3732471,1.45877803 C13.4009372,1.48492978 13.4278746,1.51186717 13.4540263,1.53955726 L18.7242,7.1197412 C19.857659,8.31987419 21.4355069,9 23.0862789,9"
                        class="stroke-gray-300 stroke-1 fill-white"
                    ></path>
                </svg>

                <div class="relative bg-white shadow-[0_6px_10px_0_rgba(0,0,0,0.1)] border border-[#dfdfdf] rounded z-[1] text-center p-[16px_22px_20px]">
                    <div
                        role="dialog"
                        tabindex="0"
                        class="absolute w-0 h-0 top-0 left-0 z-[-9999] opacity-0"
                    ></div>
                    <div class="text-[14px] leading-none text-[#222] font-medium mb-[17px]">
                        <div class="text-[14px] leading-none text-[#222] font-medium">Share to</div>
                        <div class="mt-2 text-[#888] font-normal w-full flex items-center justify-center">
                            Item ID: RU196570
                            <div class="px-2 rounded-[9px] border inline-flex items-center justify-center text-[12px] font-medium cursor-pointer ml-1.5 pb-[2px] text-[#888] h-[18px]">
                                Copy
                            </div>
                        </div>
                    </div>
                    <div class="whitespace-nowrap w-[220px] flex justify-evenly items-center">
                        {imageArray.map((image, index) => (
                            <div
                                key={index}
                                class="relative inline-block w-[29px] h-[29px] cursor-pointer"
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    class="w-[29px] h-[29px] rounded-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductName = ({ name }) => {
    const [shareToHovered, setShareToHovered] = useState(false);
    return (
        <div id="ProductNameArea" class="flex relative pr-[38px] mt-[-4px]">
            <div
                role="heading"
                tabindex="0"
                aria-level="1"
                class="text-[16px] leading-[23px] font-normal text-[#222] w-full"
            >
                <div class="relative overflow-hidden">
                    <div class="w-full">{name}</div>
                </div>
            </div>

            <div
                class="absolute right-0 top-[-3px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                onMouseEnter={() => setShareToHovered(true)}
                onMouseLeave={() => setShareToHovered(false)}
            >
                <div tabindex="0" role="button" class="relative flex justify-center items-center">
                    <svg
                        aria-label=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        aria-hidden="true"
                        class="w-[24px] h-[24px] cursor-pointer overflow-hidden"
                    >
                        <path d="M320 380.6c16 0 29 13 29 29 0 16-13 29-29 29l-42.7 0c-31.1 0-56.3 25.2-56.3 56.3l0 298.7c0 31.1 25.2 56.3 56.3 56.3l469.4 0c31.1 0 56.3-25.2 56.3-56.3l0-298.7c0-31.1-25.2-56.3-56.3-56.3l-42.7 0c-16 0-29-13-29-29 0-16 13-29 29-29l42.7 0c63.2 0 114.3 51.2 114.3 114.3l0 298.7c0 63.2-51.2 114.3-114.3 114.3l-469.4 0c-63.2 0-114.3-51.2-114.3-114.3l0-298.7c0-63.2 51.2-114.3 114.3-114.3l42.7 0z m213.7-251.8l120.7 120.7c11.3 11.3 11.3 29.7 0 41-11.3 11.3-29.7 11.3-41 0l-72.4-72.3 0 340.7c0 16-13 29-29 29-16 0-29-13-29-29l0-338.4-70 70c-10.5 10.5-26.9 11.3-38.2 2.4l-2.8-2.4c-11.3-11.3-11.3-29.7 0-41l120.7-120.7c11.3-11.3 29.7-11.3 41 0z"></path>
                    </svg>
                </div>
                {shareToHovered && <ShareTo />}
            </div>
        </div>
    );
};

const ProductRating = () => {
    return (
        <div
            id="productRating"
            class="text-[13px] leading-4 text-[#aaa] list-none border-0 tap-highlight-transparent m-0 mt-2 p-0 box-border flex items-center justify-between flex-row flex-nowrap"
        >
            <div class="text-[#aaa] leading-[16px] flex h-4 m-[4px_6px_4px_0] overflow-hidden text-[14px]">
                <div class="inline-flex flex-nowrap shrink-0">
                    <span class="text-[#888] pr-[12px] flex-shrink-0 max-w-[150px] overflow-hidden truncate whitespace-nowrap">
                        1.5K+ sold
                    </span>
                </div>
                <span
                    aria-hidden="true"
                    class="text-[#222] overflow-hidden truncate whitespace-nowrap"
                >
                    Provided by
                </span>
                <a
                    href="/--m-5030521703152.html"
                    class="bg-transparent no-underline text-inherit overflow-hidden"
                >
                    <div class="ml-1 flex flex-row items-center justify-start relative">
                        <div class="flex-shrink-0 mr-[4px] w-[16px] h-[16px] rounded-full overflow-hidden relative">
                            <img
                                data-cui-image="1"
                                data-state="succ"
                                src="https://img.kwcdn.com/supplier-public-tag/1e19d46b22c/555998bf-ad38-425a-9359-424af806be95_300x300.jpeg?imageView2/2/w/48/q/70/format/webp"
                                aria-hidden="true"
                                alt="atman devi"
                                data-did-mount="1"
                            />
                        </div>
                        <div aria-hidden="true" class="overflow-hidden h-[16px] flex items-center">
                            <div
                                aria-hidden="true"
                                class="flex-shrink overflow-hidden text-ellipsis whitespace-nowrap min-w-[30px]"
                            >
                                (100K+ sold)
                            </div>
                        </div>
                        <svg
                            alt=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            width="1em"
                            height="1em"
                            fill="#222222"
                            aria-hidden="true"
                            class="w-[11px] h-[11px] translate-y-[0.5px] overflow-hidden"
                        >
                            <path
                                id="path1"
                                d="M323.7 111.7c19.8-19.8 50.7-21.8 72.7-5.9l6.9 5.9 362.1 362.1c19.8 19.8 21.8 50.7 5.9 72.6l-5.9 7-362.1 362.1c-22 22-57.7 22-79.6 0-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7 322.1-322.2-322.1-322.2c-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7z"
                            ></path>
                        </svg>
                    </div>
                </a>
            </div>

            <div
                tabindex="0"
                class="text-[13px] leading-4 text-[#aaa] flex justify-end items-center cursor-pointer"
            >
                <div class="font-normal text-black mr-[5px] translate-y-[1px]">4.7</div>
                <div
                    role="link"
                    class="text-[13px] leading-4 text-gray-500 cursor-pointer inline-flex"
                >
                    <StarRating size={16} className="inline-flex" />
                </div>
            </div>
        </div>
    );
};

const PriceArea = () => {
    return (
        <div id="PriceArea" class="relative mt-[16px] flex flex-wrap items-end">
            <div class="translate-y-[0.5px] align-baseline">
                <div
                    aria-hidden="true"
                    class="inline-flex items-center text-[0px] mt-[2px] mb-[2px] text-left mr-[5px]"
                >
                    <img
                        data-cui-image="1"
                        data-state="succ"
                        src="https://aimg.kwcdn.com/upload_aimg/rec/1fa1b771-c651-4d7c-8f6a-4f42fa50f66f.png.slim.png?imageView2/2/w/300/q/70/format/webp"
                        alt=""
                        aria-hidden="true"
                        class="w-[16px] h-[20px] align-bottom"
                    />
                </div>
            </div>
            <div aria-hidden="true" class="mr-[8px] whitespace-pre text-left">
                <span class="text-[20px] font-semibold text-[#FB7701] align-bottom">$</span>
                <span class="text-[28px] font-semibold text-[#FB7701] align-top">8</span>
                <span class="text-[20px] font-semibold text-[#FB7701] align-bottom">.04</span>
            </div>
            <div
                id="detail_play_later_price"
                class="text-[16px] leading-[20px] text-black mr-[6px] whitespace-pre-wrap"
            >
                <span class="text-[14px] font-medium leading-6 text-[#FB7701]">
                    Pay $2.01 today
                </span>
            </div>
            <div
                aria-hidden="true"
                class="inline-block align-middle text-0 mt-[2px] mb-[2px] mr-[6px] border-[#FB7701] rounded-[3px] py-[1px] px-[2px] border"
            >
                <span class="text-[10px] font-medium text-[#FB7701] whitespace-pre-wrap">
                    -38% limited time
                </span>
            </div>
            <div
                aria-hidden="true"
                class="inline-block align-middle text-0 mt-[2px] mb-[2px] mr-[6px] text-left"
            >
                <span class="text-[14px] font-normal text-gray-400 line-through">$12.99</span>
                <div class="w-[13px] h-[13px] inline-block leading-[13px] cursor-pointer">
                    <img
                        data-cui-image="1"
                        data-state="succ"
                        src="https://aimg.kwcdn.com/upload_aimg/goods_details/ca61fedf-474e-48d8-a0c2-1c375d4a833e.png.slim.png?imageView2/2/w/300/q/70/format/webp"
                        alt=""
                        aria-hidden="true"
                        class="w-[12px] h-[12px] mr-[1px] align-middle"
                    />
                </div>
            </div>
        </div>
    );
};

const RightContain = ({ product = mockProduct }) => {
    return (
        <div
            id="rightContain"
            class="tab-size-4 font-normal tap-highlight-transparent antialiased leading-inherit box-border border-0 border-solid border-[#e5e7eb] relative w-[45.3859%] flex-shrink-0"
        >
            <div class="w-full bg-white p-[5px_15px_40px_6px] overflow-y-auto overflow-x-hidden scrollbar-none m-[-5px_-6px_0_-5px] relative max-h-[930px]">
                <ExclusiveOffer />

                <ProductName name={product.name} />

                <ProductRating />

                <PriceArea />

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>

                <div></div>
            </div>
        </div>
    );
};

export default RightContain;
