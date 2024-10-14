import React from "react";
import LeftContain from "../components/single_product_components/LeftContain";
import RightContain from "../components/single_product_components/RightContain";

const Product = () => {
    return (
        <div className="pt-8 flex justify-center items-center  flex-1  ">
            <div className="relative flex bg-transparent justify-center min-w-[728px] w-[1352px] max-w-[1352px]">
                <LeftContain />
                <RightContain />
            </div>

            <div></div>
        </div>
    );
};

export default Product;
