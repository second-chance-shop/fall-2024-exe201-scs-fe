import React from "react";
import HeroBanner from "../components/home_components/HeroBanner"; // Adjust path as needed
import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ClearanceDeals from "../components/home_components/ClearanceDeals";
import ThreeBoxes from "../components/home_components/ThreeBoxes";
import TwoBoxes from "../components/home_components/TwoBoxes";
import HomeRecommendList from "../components/home_components/HomeRecommendList";

const Home = () => {
    return (
        <div class="">
            <div class="">
                <HeroBanner />
                <WarningBanner />
                <LightningDeals />
                <LightningDeals />
                <ThreeBoxes />
                <TwoBoxes></TwoBoxes>
            </div>

            <div class="text-[12px] leading-6 text-black flex w-full min-w-[1080px] max-w-[1840px] mx-auto border-0 p-[0_44px] mt-[60px] user-select-none box-border touch-manipulation">
                <div class="bg-white w-full mb-10">
                    <div></div>

                    <div></div>

                    <HomeRecommendList />
                </div>
            </div>

            {/* Uncomment these sections if needed, but make sure they do not push the width */}
            {/* 
    <TwoBoxes></TwoBoxes>
    <CategoriesFest></CategoriesFest>
    <LocalProvider></LocalProvider>
    <PayLatterBanner></PayLatterBanner> */}
        </div>
    );
};

export default Home;
