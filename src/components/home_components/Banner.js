import React from "react";

const image = [
    "https://aimg.kwcdn.com/material-put/1f14f500e88/95a36a07-662e-4d77-bbf0-607e271451a7.png?imageView2/2/w/2000/q/80/format/webp",
    "https://aimg.kwcdn.com/material-put/1f14f5013d8/613be121-7fdc-4575-91dd-6ffb72811353.png?imageView2/2/w/2000/q/80/format/webp",
];

const Banner = ({ imageIndex, text1, text2 }) => {
    return (
        <a
            href="/channel/lightning-deals.html"
            class="bg-transparent no-underline text-inherit hover:brightness-110"
        >
            <div class="relative mb-7 pb-[4.88%] w-full h-0">
                <div class="absolute inset-0 w-full h-full">
                    <div class="flex items-center justify-center w-full h-full bg-[#CE0909]">
                        <img
                            class="absolute w-full h-full"
                            data-state="succ"
                            alt="95a36a07 662e 4d77 bbf0 607e271451a7.png"
                            aria-hidden="true"
                            src={image[imageIndex]}
                            data-was-processed="true"
                        />
                        <div class="absolute w-full h-full"></div>
                        <div class="relative flex items-center justify-center w-full h-full">
                            <svg
                                class="relative top-[2px] mr-[5px] w-[24px] h-[24px] fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                width="1em"
                                height="1em"
                                aria-hidden="true"
                            >
                                <path d="M347.4 8.1l376.3 0c14.9 0 26.9 12.1 27 26.9 0 3.7-0.8 7.4-2.3 10.8l-135 309.4 0 0 264.6 0c14.9 0 26.9 12.1 27 26.9 0 6.9-2.6 13.5-7.4 18.5l-572.1 607.7c-10.2 10.8-27.3 11.3-38.1 1.1-7.2-6.8-10.1-17-7.6-26.6l103.7-388.4 0 0-236.8 0c-14.9 0-26.9-12.1-26.9-27 0-3.2 0.6-6.5 1.7-9.5l200.7-532.4c4-10.5 14-17.4 25.2-17.4z"></path>
                            </svg>
                            <h2
                                class="relative text-white font-extrabold italic text-[24px]"
                                aria-label="Lightning deals"
                            >
                                {text1}
                            </h2>
                            <span class="relative top-[1px] text-white text-[14px] font-medium ml-[20px] mr-[2px]">
                                {text2}
                            </span>
                            <svg
                                class="relative top-[1px] rotate-[-90deg] w-4 h-4 fill-white"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                aria-label="common_arrows"
                                aria-hidden="true"
                            >
                                <path d="M846.6 329.7c19.9-17.2 49.9-15 67.1 4.9 15.4 17.9 15.2 44 0.5 61.6l-5.4 5.5-365.3 315.5c-15.9 13.7-38.5 15.2-55.8 4.6l-6.3-4.6-366.1-315.5c-19.9-17.1-22.1-47.2-5-67 15.4-17.9 41.3-21.5 60.8-9.6l6.2 4.6 335.1 288.7 334.2-288.7z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Banner;
