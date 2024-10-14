import React from "react";
import ProductImage from "../product_components/ProductImage";

const leftImageHolders = [
    {
        src: "https://img.kwcdn.com/product/fancy/d77c78a1-040c-4139-b617-6d9e5586b9d7.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "d77c78a1 040c 4139 b617 6d9e5586b9d7.jpg",
        price: 16.93,
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "16f3f68c 3f1f 4f9b bc75 c24f44b71c6b.jpg",
        price: 1.98,
    },
    {
        src: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7b72f140214b6afc6023bda888e9a12f.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "7b72f140214b6afc6023bda888e9a12f.jpg",
        price: 6.99,
    },
];

// Reusable ImageCard component
const ImageCard = ({ src, alt, price }) => {
    return (
        <div class="flex justify-center items-center w-full cursor-pointer select-none">
            <div class="w-full h-[200px] relative">
                <div class="absolute inset-0">
                    <img
                        data-state="succ"
                        alt={alt}
                        src={src}
                        data-was-processed="true"
                        class="w-full h-full"
                    />
                    <div class="flex justify-center items-center w-full absolute bottom-2 px-4 z-1">
                        <div
                            title={`$${price}`}
                            class="text-[14px] font-semibold text-white bg-[rgba(0,0,0,0.6)] rounded-[20px] border border-[hsla(0,0%,100%,.4)] text-center px-2 py-2"
                        >
                            <span class="">
                                <div class="relative top-1">
                                    $<span class="font-semibold">{Math.floor(price)}</span>.
                                    {(price % 1).toFixed(2).split(".")[1]}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TwoBoxes = () => {
    return (
        <div
            role="region"
            class="mx-auto w-full min-w-[1080px] max-w-[1440px] mt-8 flex flex-1 gap-4"
        >
            {/* First <a> tag */}
            <a
                href="/attendance/fashion-collection-15868-2-a-psurl.html"
                class="relative overflow-hidden w-1/2 h-[350px] cursor-pointer group"
            >
                {/* This image will stay static */}
                <img
                    data-state="succ"
                    alt="fashion collection 15868 2 a psurl"
                    src="https://commimg-us.kwcdn.com/anta-image/df5c5f09-aaed-4fca-8b52-fd3566d5f789.png?imageView2/q/70/format/webp"
                    data-was-processed="true"
                    class="absolute inset-0 w-full h-[320px] object-cover"
                />
                {/* Everything inside will scale on hover */}
                <div class="flex flex-col pb-5 absolute inset-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                        data-state="succ"
                        alt="6cd4f3e3 6143 4e40 8ac1 2d8f58f98e7e.png"
                        src="https://commimg-us.kwcdn.com/anta-image/24b9fbc2-ec64-4932-acec-f7d1e7f1fce2.png?imageView2/2/w/1000/q/70/format/webp"
                        class="w-full h-[31.15%] object-contain"
                    />
                    <div class="px-4 w-full flex justify-between items-center gap-4">
                        {leftImageHolders.map((image, index) => (
                            <div class="w-1/3">
                                <ImageCard
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    price={image.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </a>

            {/* Second <a> tag */}
            <a
                href="/attendance/todays-pick-16039-2-a-psurl.html"
                class="relative overflow-hidden w-1/2 h-[350px] cursor-pointer group"
            >
                {/* This image will stay static */}
                <img
                    data-state="succ"
                    alt="todays pick 16039 2 a psurl"
                    src="https://commimg-us.kwcdn.com/anta-image/444fade2-8761-4ba1-9a63-6ae45a5d6b68.png?imageView2/q/70/format/webp"
                    data-was-processed="true"
                    class="absolute inset-0 w-full h-[320px]  object-cover"
                />
                {/* Everything inside will scale on hover */}
                <div class="flex flex-col pb-5  absolute inset-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                        data-state="succ"
                        alt="6cd4f3e3 6143 4e40 8ac1 2d8f58f98e7e.png"
                        src="https://commimg-us.kwcdn.com/anta-image/6cd4f3e3-6143-4e40-8ac1-2d8f58f98e7e.png?imageView2/2/w/1000/q/70/format/webp"
                        class="w-full h-[31.15%] object-contain"
                    />
                    <div class="px-4 w-full flex justify-between items-center gap-4">
                        {leftImageHolders.map((image, index) => (
                            <div class="w-1/3">
                                <ImageCard
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    price={image.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
};

export default TwoBoxes;
