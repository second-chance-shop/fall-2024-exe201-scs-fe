import React from "react";

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

export default ExclusiveOffer;
