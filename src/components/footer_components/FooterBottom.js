import React from "react";

const hrefs = [
    "/terms-of-use.html",
    "/privacy-and-cookie-policy.html?title=Privacy%20%26%20Cookie%20Policy&amp;_bg_fs=0",
    "/bgp-privacy-policy-and-setting.html",
    "/cookie-and-similar-technologies-policy.html?anchor_id=limit_interest_base_advertising",
];

const imgSrc =
    "https://aimg.kwcdn.com/upload_aimg/bgcountry/8ef10c76-45e5-4998-b3c7-d19dea4c5375.png.slim.png?imageView2/2/w/50/q/70/format/webp";

const FooterBottom = ({}) => {
    return (
        <div className="text-[12px] leading-6 text-white flex flex-row justify-center items-center border-t-[1px] border-t-white/[0.1] mt-[30px] h-[76px]">
            <div className="opacity-50">© 2024 SCS Inc.</div>
            <div className="ml-1 flex justify-start items-center flex-row">
                <a href={hrefs[0]} rel="" className="underline ml-[20px] group">
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        Terms of use
                    </span>
                </a>
                <a href={hrefs[1]} rel="" className="underline ml-[20px] group">
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        Privacy policy
                    </span>
                </a>
                <a
                    href={hrefs[2]}
                    rel=""
                    className="underline flex justify-start items-center ml-[20px] group"
                >
                    <span className="text-[12px] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        Your privacy choices
                    </span>
                    <img
                        data-state="succ"
                        alt=""
                        aria-hidden="true"
                        src={imgSrc}
                        className="text-[12px] max-w-full align-top min-w-[1px] min-h-[1px] ml-[4px] w-[25px] h-[12px]"
                    />
                </a>
                <a href={hrefs[3]} rel="" className="underline ml-[20px] group">
                    <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        Ad Choices
                    </span>
                </a>
            </div>
        </div>
    );
};

export default FooterBottom;
