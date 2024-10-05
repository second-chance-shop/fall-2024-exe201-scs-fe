import React from "react";
import ProductCountdown from "../product_components/ProductCountdown";
import ProductStars from "../product_components/ProductStars";
import ProductPrice from "../product_components/ProductPrice";
import ProductImage from "../product_components/ProductImage";

const ProductDeal = ({ deal }) => {
    return (
        <li className="relative flex-shrink-0 mr-[18px] group" key={deal.id}>
            <div className="block cursor-pointer flex-shrink-0 w-full">
                <div className="h-full pb-[14px] cursor-pointer">
                    <ProductImage src={deal.src} alt={deal.description || deal.alt} />
                    <ProductPrice
                        price={deal.price}
                        discountPrice={deal.discountPrice}
                        discountPercentage={deal.discountPercentage}
                        sold={deal.sold}
                    />
                    <ProductCountdown initialTimeInSeconds={100000} />
                    <ProductStars rating={deal.rating} />
                </div>
            </div>
        </li>
    );
};

export default ProductDeal;
