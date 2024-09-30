import React from "react";
import ProductCard from "../ProductCard";

const ClearanceDeals = () => {
    return (
        <div>
            <h2>Clearance deals</h2>
            <div>
                {/* Similar to LightningDeals, render multiple ProductCard components */}
                <ProductCard />
                <ProductCard />
                {/* ... more ProductCard components */}
            </div>
        </div>
    );
};

export default ClearanceDeals;
