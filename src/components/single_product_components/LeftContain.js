import React from "react";
import { useState } from "react";
import SellerBasicInformation from "./SellerBasicInformation";
import StarRating from "./StarRating";

const mockImageList = [
    {
        src: "https://img.kwcdn.com/product/fancy/market/3495e016613b51a34eb5e3d2dd36a95a_fj4hZeReeqITt.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 0",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/38c47a43-c133-4a63-8eda-5e015ca4344a.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 5",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/3c44dbe8-790f-4429-a4e7-f19147ac39a8.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 1",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/42c37cc8-844a-4f55-9cfd-872b5faf6c30.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 2",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/967e70fc-a061-4df3-b1d0-13135703383f.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 3",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/0b85dbc5-2e10-4df8-9971-2557ad0008be.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 4",
    },
];

const mockUserReviews = [
    {
        username: "sa***e1",
        date: "Sep 21, 2024",
        location: "United States",
        content:
            "Just love. The casual look with a jacket & a pair of heels you will look and feel absolutely fabulous!! The quality is out of this world. Would do business with again.",
        rating: 5,
    },
    {
        username: "lu***62",
        date: "Sep 27, 2024",
        location: "United States",
        content:
            "Highly recommended, 100% really love it. So soft and pretty. Lightweight, easy dry, perfect fit, excellent item.",
        rating: 4.5,
    },
    {
        username: "Sy***ge",
        date: "Sep 20, 2024",
        location: "Viet nam",
        content: "Very pretty, great material and very comfortable.",
        rating: 3.9,
    },
    {
        username: "Sy***ge",
        date: "Sep 20, 2024",
        location: "Thailand",
        content: "Very pretty, great material and very comfortable.",
        rating: 3.7,
    },
    {
        username: "Sy***ge",
        date: "Sep 20, 2024",
        location: "United States",
        content: "Very pretty, great material and very comfortable.",
        rating: 2.7,
    },
];

// SmallImage Component
const SmallImage = ({ setCurrentImage, currentImage }) => {
    return (
        <div aria-label="Goods image" tabIndex="0" class=" absolute left-0 top-0 w-[62px] h-full">
            <div className="w-[57px] relative">
                {mockImageList.map((image, index) => (
                    <div key={index} className={`h-0 overflow-hidden relative mb-5 pb-[133.33%] `}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            tabIndex="0"
                            fetchpriority="high"
                            className={`max-w-full h-auto w-full align-top cursor-pointer ${
                                currentImage.src === image.src ? "border-2 border-black" : ""
                            } `} // Apply border on hover
                            onMouseEnter={() => setCurrentImage(image)} // Update the image on hover
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

// BigImage Component
const BigImages = ({ currentImage }) => {
    return (
        <div role="region" className="relative">
            <div className="">
                <div className="">
                    <div className="">
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt}
                            aria-label="Goods Image"
                            className="flex-shrink-0 w-[589px] h-[785px] bg-contain bg-no-repeat bg-center"
                            fetchpriority="high"
                            draggable="false"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const OverviewReviews = ({ reviews = 80, rating = 4.7 }) => {
    return (
        <div
            id="_1AFVb_qh"
            class="relative flex flex-row flex-wrap items-center justify-between gap-y-[7px]"
        >
            <div class="box-border flex flex-row flex-wrap justify-start mr-2">
                <div
                    tabindex="0"
                    role="link"
                    class="text-[18px] font-medium leading-[18px] text-[#222] my-[5px] "
                >
                    {reviews} Đánh giá
                </div>
                <div class="text-black w-[1px] h-[18px] m-0 mr-[12px] ml-[14px] mt-[5px] mx-auto box-border relative rounded-none bg-slate-400"></div>
                <div
                    tabindex="0"
                    role="link"
                    aria-label="4.7 star rating"
                    class="text-[18px] leading-[29px] font-medium text-[#222] flex flex-row justify-center items-center"
                >
                    <span>{rating}</span>
                    <StarRating
                        className="inline-flex leading-none relative top-[-1px]"
                        rating={rating}
                    ></StarRating>
                </div>
            </div>
            <a href="" role="button">
                <section class="text-[13px] font-medium leading-[18px] text-[#0a8800] bg-[rgba(10,136,0,0.06)] rounded-md flex items-center gap-x-[8px] max-w-full h-[22px] pr-[6px]">
                    <div
                        aria-hidden="true"
                        class="text-[#0a8800] flex flex-shrink-0 items-center justify-center w-[22px] h-[22px] bg-[#0a8800] rounded-tl-md rounded-bl-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 1024 1024"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            alt="All reviews are from verified purchases"
                            class="w-[15px] h-[15px]  fill-white "
                        >
                            <path d="M557.4 67.6l357.5 136.7c28.3 10.8 46.5 38.5 45.2 68.8l-8.6 199.8c-6.8 157.9-86.7 303.6-216.2 394.3l-97.7 68.3c-72.7 50.8-169.4 50.9-242.1 0l-96.1-67.2c-129.2-90.3-208-236.5-212.4-394.2l-5.6-201.2c-0.8-29.6 16.9-56.5 44.4-67.4l345.9-137.3c27.5-10.9 58.1-11.1 85.7-0.6z m75.6 412.9l-224 0c-61.9 0-112 50.1-112 112l0 76.8c0 24.7 20.1 44.8 44.8 44.8l358.4 0c24.7 0 44.8-20.1 44.8-44.8l0-76.8c0-61.9-50.1-112-112-112z m-112-243.7c-48.1 0-87.1 40.1-87.2 89.6 0 49.5 39 89.6 87.2 89.6 48.1 0 87.1-40.1 87.1-89.6 0-49.5-39-89.6-87.1-89.6z"></path>
                        </svg>
                    </div>
                    <div class="font-medium leading-[18px] ">100% đánh giá từ người mua thật</div>
                </section>
            </a>
        </div>
    );
};

const DetailUserReviews = ({ userReviews = mockUserReviews }) => {
    return (
        <div id="UserReviews" class="box-border border-0">
            {userReviews.map((userReview, index) => (
                <div key={index} class="relative w-full py-3 box-border border-0">
                    <div class="text-0 border-0">
                        <div class="flex flex-row flex-wrap gap-y-[2px] gap-x-[6px] items-center justify-between">
                            <div class="flex items-center max-w-full">
                                <div class="flex flex-row flex-wrap gap-y-2 items-center max-w-full justify-between">
                                    <img
                                        src="https://avatar-us.kwcdn.com/avatarj-us/avatar/default/7d96f863-b4c1-43d6-8f03-ebd1c4e23e25.png?imageView2/2/w/48/q/70/format/webp"
                                        alt="avatar"
                                        class="list-none rounded-full box-border relative  w-[30px] h-[30px] cursor-pointer"
                                    />
                                    <div class="text-[14px] leading-[18px] text-[#222] font-semibold border-0 m-0 p-0 box-border overflow-hidden truncate whitespace-nowrap cursor-pointer">
                                        Semiiiiiiiiii {userReviews.username}
                                    </div>
                                    <div class="ml-[4px] text-[14px] leading-[18px] font-normal flex items-center border-0 box-border shrink-0 whitespace-nowrap">
                                        <span>
                                            <span class="text-[14px] font-normal leading-6 text-[#AAAAAA]">
                                                in{" "}
                                            </span>
                                        </span>
                                        <span>
                                            <img
                                                src="https://aimg.kwcdn.com/upload_aimg/openingemail/flags/559eb015-f86e-4573-9585-c11bc8f69c33.png.slim.png?imageView2/2/w/51/q/70/format/webp"
                                                alt=""
                                                class="font-normal box-border max-w-full align-top w-[17px] h-[13px] mr-[4px] ml-[4px]"
                                            />
                                        </span>
                                        <span>
                                            <span class="text-[14px] font-normal leading-6 text-[#AAAAAA]">
                                                {userReviews.location} on {userReviews.date}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2 flex flex-wrap justify-between items-center">
                            <div>
                                <StarRating
                                    className="box-border inline-flex "
                                    rating={userReview.rating}
                                ></StarRating>
                            </div>
                        </div>

                        <div class="text-[14px] leading-[22px] text-[#222] box-border relative mt-2 overflow-hidden max-h-[110px]">
                            <section>
                                <div>
                                    <span class="text-[14px] leading-[22px] text-[#222] break-words">
                                        {userReview.content}
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SeeMoreButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            tabIndex="0"
            role="button"
            className="flex items-center justify-center text-center cursor-pointer select-none relative z-1 h-[42px] w-fit min-w-[220px] px-[17px] my-[20px] mx-auto font-semibold text-[14px] leading-[16px] text-[#222]"
            onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
            onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
        >
            <span
                onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
                onMouseLeave={() => setHovered(false)}
                className={`box-border inline-block absolute z-[-1] inset-0 rounded-full bg-white border-[1px] ${
                    hovered ? "border-[#222] scale-[1.02] shadow-[0_0_0_1px_#222]" : "border-[#888]"
                } transition-all duration-300 ease-in-out`}
            ></span>
            <span>See all reviews</span>
        </div>
    );
};

// LeftContain Component
const LeftContain = () => {
    // State for the currently selected image
    const [currentImage, setCurrentImage] = useState(mockImageList[0]); // Default to first image

    return (
        <div id="leftcontain" className="relative pr-12 box-border max-w-[771px] min-w-[325px]">
            <div id="imageContent" class="flex-1 user-select-none relative pl-[70px]">
                <SmallImage setCurrentImage={setCurrentImage} currentImage={currentImage} />
                <BigImages currentImage={currentImage} />
            </div>
            {/* Mai làm  */}
            <div id="reviewContent" class="relative w-full p-0 pt-7">
                <OverviewReviews />
                <div class=" w-full h-[1px] mt-[11px] bg-[#b4b4b4]"></div>
                <DetailUserReviews />
                <SeeMoreButton />
            </div>

            <SellerBasicInformation />
        </div>
    );
};

export default LeftContain;
