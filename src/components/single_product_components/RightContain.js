import React from "react";
import { useState } from "react";
import StarRating from "./StarRating";
import ShareTo from "./rightcontain_components/ShareTo";
import ExclusiveOffer from "./rightcontain_components/ExclusiveOffer";
import Shipping from "./rightcontain_components/Shipping";

const mockProduct = {
    name: "Áo thun nữ tay dài cổ tròn in họa tiết hoa sống động - Chất liệu mềm mại, thoáng khí, thoải mái cho mùa xuân và mùa thu - Thời trang thường ngày đầy phong cách",
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

const Card = () => {
    const images = [
        {
            src: "https://aimg.kwcdn.com/upload_aimg/temu/b1832bbb-07be-4b19-bbd2-40df0752b212.png?imageView2/2/w/100/q/90/format/webp",
            alt: "Image 1",
            width: "36px",
            height: "17px",
        },
        {
            src: "https://aimg.kwcdn.com/upload_aimg/temu/e71ca4d4-c694-42d0-9042-9e71907fc25a.png?imageView2/2/w/100/q/90/format/webp",
            alt: "Image 2",
            width: "36px",
            height: "17px",
        },
        {
            src: "https://commimg-eu.kwcdn.com/upload_commimg_eu/temu/dbbe6f40-8aaf-4b3b-a18b-92f9e2f04840.png?imageView2/2/w/100/q/90/format/webp",
            alt: "Image 3",
            width: "36px",
            height: "17px",
        },
    ];
    return (
        <div class="relative mt-[7px]">
            <div class="w-[22px] h-[8px] absolute top-[-7px] left-[208px] z-10 opacity-100"></div>
            <div class="border border-[#222] rounded-md mt-2 cursor-pointer flex w-full relative overflow-hidden px-[4px] py-[3px]">
                <div
                    class="inline-flex whitespace-nowrap"
                    style={{
                        "--pay-later-translate-distance": "-8px",
                        "--pay-later-translate-duration": "2s",
                    }}
                >
                    {images.map((image, index) => (
                        <div key={index} class="flex justify-center items-center px-1">
                            <img
                                data-cui-image="1"
                                data-state="succ"
                                src={image.src}
                                alt={image.alt}
                                style={{ width: image.width, height: image.height }}
                                aria-hidden="true"
                                data-did-mount="1"
                            />
                        </div>
                    ))}
                    <div
                        class="text-[#222] text-[13px] font-normal mr-1"
                        aria-label="4 interest-free biweekly installments"
                        tabIndex="0"
                        role="button"
                        aria-haspopup="dialog"
                    >
                        4 interest-free biweekly installments
                    </div>
                </div>
            </div>
        </div>
    );
};

const VariationBox = () => {
    return <div className="h-[100px]"></div>;
};

const PurchaseButton = () => {
    const [hover, setHover] = useState(false);
    return (
        <div id="PurchaseButton" class="w-full">
            <div class="text-[16px] leading-6 text-black pt-5 flex flex-row justify-start items-center">
                <div class="flex-1 max-w-full flex flex-row justify-start items-center overflow-visible">
                    <div
                        aria-label="Add to cart"
                        role="button"
                        data-id="button"
                        class="flex-1 relative min-w-0 "
                    >
                        <div
                            tabindex="0"
                            role="button"
                            class="text-center cursor-pointer select-none relative z-[1] w-full h-12 text-lg font-semibold leading-[18px] flex flex-col justify-center items-center "
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <span
                                class="absolute z-[-1] inset-0 rounded-full bg-[#fb7701] transition-all ease-in-out duration-150"
                                style={{
                                    backgroundColor: hover ? "#fbb401" : "#fb7701",
                                    transition: "all 0.15s ease-in-out",
                                    transform: hover ? "scale(1.1)" : "scale(1)",
                                    boxShadow: hover
                                        ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                                        : "0 2px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            ></span>
                            <span
                                tabindex="0"
                                role="button"
                                class="w-full px-[19px] overflow-hidden flex text-white text-[16px] font-semibold leading-[18px]"
                                style={{
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    display: "-webkit-box",
                                }}
                            >
                                Add to cart
                            </span>
                            <div
                                class="whitespace-nowrap opacity-95 w-[calc(100%-50px)] text-[12px] text-white leading-4 font-normal justify-center items-start inline-flex overflow-hidden h-0"
                                style={{
                                    transform: "translateZ(0)",
                                    animation: "_1Ttp-ZWB .3s linear 1s forwards",
                                }}
                            >
                                <div
                                    aria-hidden="true"
                                    class="flex w-full text-center justify-center items-center"
                                >
                                    <img
                                        data-cui-image="1"
                                        data-state="succ"
                                        src="https://aimg.kwcdn.com/upload_aimg_b/lightningdeal/cd4d3f96-3f87-4324-bb2c-eea621fd48f1.png?imageView2/2/w/300/q/70/format/webp"
                                        data-type="100"
                                        alt=""
                                        aria-hidden="true"
                                        class="w-[12px] h-[12px] align-middle"
                                    />
                                    <span
                                        data-type="0"
                                        aria-hidden="true"
                                        class="pl-1 overflow-hidden text-ellipsis whitespace-nowrap align-middle"
                                    >
                                        Almost sold out
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RightContain = ({ product = mockProduct }) => {
    return (
        <div
            id="rightContain"
            class="tab-size-4 font-normal tap-highlight-transparent antialiased leading-inherit box-border border-0 border-solid border-[#e5e7eb]  w-[45.3859%] flex-shrink-0 sticky"
        >
            <div class="w-full bg-white p-[5px_15px_40px_6px] overflow-y-auto overflow-x-hidden scrollbar-none m-[-5px_-6px_0_-5px] relative max-h-[930px]">
                <ExclusiveOffer />

                <ProductName name={product.name} />

                <ProductRating />

                <PriceArea />

                <Card />

                <VariationBox />

                <PurchaseButton />

                <div data-id="modules">
                    <Shipping></Shipping>

                    <div></div>

                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default RightContain;
