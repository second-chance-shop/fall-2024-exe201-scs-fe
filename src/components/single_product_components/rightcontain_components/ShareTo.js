import React from "react";

const ShareTo = () => {
    const imageArray = [
        "https://aimg.kwcdn.com/upload_aimg/m-img/a4be7db3-f267-4e33-84fc-e5353601676e.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/c5ad282e-6bc7-4001-af37-540aa54b2c96.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/m-img/0ac31232-2f8f-43fe-8e21-aa0183fe7a48.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/e0ee1ad9-a15a-4dc3-8310-758e7d9791fb.png.slim.png?imageView2/2/w/800/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/pc/c2372c56-c43c-4cf9-8111-82560d0c5fd9.png.slim.png?imageView2/2/w/800/q/70/format/webp",
    ];

    return (
        <div id="shareTo" class="fixed z-[1000] left-[1582.48px] top-[180px] w-[24px] h-0">
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

export default ShareTo;
