import React from "react";
import HeroBanner from "../components/home_components/HeroBanner"; // Adjust path as needed
import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ClearanceDeals from "../components/home_components/ClearanceDeals";
import ThreeBoxes from "../components/home_components/ThreeBoxes";
import TwoBoxes from "../components/home_components/TwoBoxes";

const Home = () => {
    return (
        <div class="">
            <div class="">
                <HeroBanner />
                <WarningBanner />
                <LightningDeals />
                <LightningDeals />
                <ClearanceDeals />
                <ThreeBoxes />
                <TwoBoxes></TwoBoxes>
            </div>

            <div></div>

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
