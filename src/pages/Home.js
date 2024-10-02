import React from "react";
import HeroBanner from "../components/home_components/HeroBanner"; // Adjust path as needed
import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ClearanceDeals from "../components/home_components/ClearanceDeals";
import BonusCoupons from "../components/home_components/BonusCoupons";

const Home = () => {
    return (
        <div class="text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex w-full">
            <div class="text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation">
                <HeroBanner />
                <WarningBanner />
                <LightningDeals />
                <ClearanceDeals />
                <BonusCoupons />
            </div>
            <div></div>

            {/* <ThreeBoxes></ThreeBoxes>
            <TwoBoxes></TwoBoxes>
            <CategoriesFest></CategoriesFest>
            <LocalProvider></LocalProvider>
            <PayLatterBanner></PayLatterBanner> */}
        </div>
    );
};

export default Home;
