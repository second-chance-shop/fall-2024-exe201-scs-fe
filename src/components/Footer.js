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
        <footer class="text-[12px] leading-6 text-white list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation block w-full pt-[29px] mt-[60px] bg-[#1e1e1e]">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <CompanyInfo />
                    <QuickLinks />
                    <SocialLinks />
                </div>
            </div>
            <FooterMiddle />
            <FooterBottom />
        </footer>
    );
};

export default Footer;
