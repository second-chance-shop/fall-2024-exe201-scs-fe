import React from "react";

const hrefs = [
    "/terms-of-use.html",
    "/privacy-and-cookie-policy.html?title=Privacy%20%26%20Cookie%20Policy&amp;_bg_fs=0",
    "/bgp-privacy-policy-and-setting.html",
    "/cookie-and-similar-technologies-policy.html?anchor_id=limit_interest_base_advertising",
];

const imgSrc =
    "https://aimg.kwcdn.com/upload_aimg/bgcountry/8ef10c76-45e5-4998-b3c7-d19dea4c5375.png.slim.png?imageView2/2/w/50/q/70/format/webp";

const FooterBottom = () => {
    return (
        <div class="text-[12px] leading-6 text-white list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex flex-row justify-center items-center border-t-[1px] border-t-white/[0.1] mt-[30px] h-[76px]">
            <div class="opacity-50">© 2024 WhaleCo Inc.</div>
            <div class="ml-1 flex justify-start items-center flex-row">
                <a href={hrefs[0]} rel="" class="underline ml-[20px]">
                    <span class="opacity-50">Terms of use</span>
                </a>
                <a href={hrefs[1]} rel="" class="underline ml-[20px]">
                    <span class="opacity-50">Privacy policy</span>
                </a>
                <a
                    href={hrefs[2]}
                    rel=""
                    class=" underline flex justify-start items-center ml-[20px]"
                >
                    <span class="text-[12px] leading-6 list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation opacity-50">
                        Your privacy choices
                    </span>
                    <img
                        data-state="succ"
                        alt=""
                        aria-hidden="true"
                        src={imgSrc}
                        class="text-[12px] leading-6 list-none text-inherit tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation border-0 max-w-full align-top min-w-[1px] min-h-[1px] ml-4 w-[25px] h-[12px]"
                    />
                </a>
                <a href={hrefs[3]} rel="" class="underline ml-[20px]">
                    <span class="opacity-50">Ad Choices</span>
                </a>
            </div>
        </div>
    );
};

export default FooterBottom;
