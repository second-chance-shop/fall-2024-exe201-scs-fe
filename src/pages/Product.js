import React from "react";
import LeftContain from "../components/single_product_components/LeftContain";
import RightContain from "../components/single_product_components/RightContain";

const Product = () => {
    return (
        <div className="pt-8 flex justify-center items-center  flex-1 max-w-[1352px] min-w-[728px] w-[1352px]">
            <div className="relative w-full flex bg-transparent justify-center items-center">
                <LeftContain />
                <RightContain />
            </div>

            <div></div>
        </div>
    );
};

export default Product;
