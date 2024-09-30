import React from "react";
import CompanyInfo from "./footer_components/CompanyInfo";
import QuickLinks from "./footer_components/QuickLinks";
import SocialLinks from "./footer_components/SocialLinks";
import Copyright from "./footer_components/Copyright";

const Footer = () => {
    return (
        <footer className="bg-[#F5F5DC] text-black py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <CompanyInfo />
                    <QuickLinks />
                    <SocialLinks />
                </div>

                <Copyright />
            </div>
        </footer>
    );
};

export default Footer;
