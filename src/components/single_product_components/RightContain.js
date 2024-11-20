import React from "react";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import ShareTo from "./rightcontain_components/ShareTo";
import ExclusiveOffer from "./rightcontain_components/ExclusiveOffer";
import Cookies from "js-cookie";
import Shipping from "./rightcontain_components/Shipping";

const mockProduct = {
    name: "Áo thun nữ tay dài cổ tròn in họa tiết hoa sống động - Chất liệu mềm mại, thoáng khí, thoải mái cho mùa xuân và mùa thu - Thời trang thường ngày đầy phong cách",
};

const ProductName = ({ name }) => {
    const [shareToHovered, setShareToHovered] = useState(false);
    return (
        <div id="ProductNameArea" className="flex relative pr-[38px] mt-[-4px]">
            <div
                role="heading"
                tabIndex="0"
                aria-level="1"
                className="text-[16px] leading-[23px] font-normal text-[#222] w-full"
            >
                <div className="relative overflow-hidden">
                    <div className="w-full">{name}</div>
                </div>
            </div>

            <div
                className="absolute right-0 top-[-3px] w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
                onMouseEnter={() => setShareToHovered(true)}
                onMouseLeave={() => setShareToHovered(false)}
            >
                <div
                    tabIndex="0"
                    role="button"
                    className="relative flex justify-center items-center"
                >
                    <svg
                        aria-label=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        aria-hidden="true"
                        className="w-[24px] h-[24px] cursor-pointer overflow-hidden"
                    >
                        <path d="..."></path>
                    </svg>
                </div>
                {shareToHovered && <ShareTo />}
            </div>
        </div>
    );
};

const ProductRating = ({ productId }) => {
    const [sold, setSold] = useState(0);

    useEffect(() => {
        const cookieKey = `product-sold-${productId}`;
        let sold = Cookies.get(cookieKey);

        if (!sold) {
            sold = Math.floor(Math.random() * 20) + 1;
            Cookies.set(cookieKey, sold, { path: "", sameSite: "strict" });
        }

        setSold(parseInt(sold, 10));
    }, [productId]);

    return (
        <div
            id="productRating"
            className="text-[13px] leading-4 text-[#aaa] list-none border-0 tap-highlight-transparent m-0 mt-2 p-0 box-border flex items-center justify-between flex-row flex-nowrap"
        >
            <div className="text-[#aaa] leading-[16px] flex h-4 m-[4px_6px_4px_0] overflow-hidden text-[14px]">
                <div className="inline-flex flex-nowrap shrink-0">
                    <span className="text-[#888] pr-[12px] flex-shrink-0 max-w-[150px] overflow-hidden truncate whitespace-nowrap">
                        {sold}+ đã bán
                    </span>
                </div>
            </div>
            <div
                tabIndex="0"
                className="text-[13px] leading-4 text-[#aaa] flex justify-end items-center cursor-pointer"
            >
                <div className="font-normal text-black mr-[5px] translate-y-[1px]">4.7</div>
                <StarRating size={16} className="inline-flex" />
            </div>
        </div>
    );
};

const PriceArea = ({ price, discountPercentage = 80 }) => {
    const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(0);
    return (
        <div id="PriceArea" className="relative mt-[16px] flex flex-wrap items-end">
            <div className="mr-[8px] whitespace-pre text-left">
                <span className="text-[20px] font-semibold text-[#FB7701] align-bottom">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(discountedPrice)}
                </span>
            </div>
            <div
                aria-hidden="true"
                className="inline-block align-middle text-0 mt-[2px] mb-[2px] mr-[6px] border-[#FB7701] rounded-[3px] py-[1px] px-[2px] border"
            >
                <span className="text-[10px] font-medium text-[#FB7701] whitespace-pre-wrap">
                    -{discountPercentage}% Thời gian có hạn
                </span>
            </div>
            <div
                aria-hidden="true"
                className="inline-block align-middle text-0 mt-[2px] mb-[2px] mr-[6px] text-left"
            >
                <span className="text-[14px] font-normal text-gray-400 line-through">
                    {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(price)}
                </span>
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

const RightContain = ({ product }) => {
    console.log(product);
    return (
        <div
            id="rightContain"
            class="tab-size-4 font-normal tap-highlight-transparent antialiased leading-inherit box-border border-0 border-solid border-[#e5e7eb] w-[45.3859%] flex-shrink-0 "
        >
            <div
                class="w-full bg-white p-[5px_15px_40px_6px] overflow-y-auto overflow-x-hidden scrollbar-none m-[-5px_-6px_0_-5px] max-h-[930px] "
                style={{ position: "sticky", top: "0px", overflow: "visible" }}
            >
                <ExclusiveOffer />

                <ProductName name={product.productName} />

                <ProductRating sold={1500} />

                <PriceArea price={product.prices} discountPercentage={80} />

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
