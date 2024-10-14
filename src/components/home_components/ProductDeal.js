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
                    <ProductImage src={deal.product_image} alt={deal.title || deal.alt} />
                    <ProductPrice
                        price={deal.product_price}
                        discountPrice={deal.product_sale_price}
                        discountPercentage={deal.product_sale_percentage}
                        sold={deal.product_sold}
                    />
                    <ProductCountdown initialTimeInSeconds={100000} />
                    <ProductStars
                        rating={deal.product_rating}
                        totalReviews={deal.product_number_of_rating}
                    />
                </div>
            </div>
        </li>
    );
};

export default ProductDeal;
