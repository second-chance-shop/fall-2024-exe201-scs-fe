import React from "react";
import {
    CompanyInfo,
    QuickLinks,
    SocialLinks,
    Copyright,
    FooterTop,
    FooterMiddle,
    FooterBottom,
} from "./footer_components";

const Footer = () => {
    return (
        <footer class="text-[12px] leading-6 text-white list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation block w-full pt-8 bg-[#1e1e1e] flex justify-center items-center">
            <div className="max-w-[1440px]">
                <FooterTop />
                <FooterMiddle />
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
