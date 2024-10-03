import React from "react";
import ProductCountdown from "../product_components/ProductCountdown";
import ProductStars from "../product_components/ProductStars";
import ProductPrice from "../product_components/ProductPrice";
import ProductImage from "../product_components/ProductImage";

const ProductDeal = ({ deal }) => {
    return (
        <li className="relative flex-shrink-0 mr-[18px] w-[calc(20%_-_14.4px)]" key={deal.id}>
            <div className="block cursor-pointer flex-shrink-0 w-full">
                <div className="h-full pb-[14px] cursor-pointer">
                    <ProductImage />
                    <ProductPrice />
                    <ProductCountdown />
                    <ProductStars />
                </div>
            </div>
        </li>
    );
};

export default ProductDeal;
