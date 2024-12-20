import React from "react";
import ProductCountdown from "../product_components/ProductCountdown";
import ProductStars from "../product_components/ProductStars";
import ProductPrice from "../product_components/ProductPrice";
import ProductImage from "../product_components/ProductImage";

const ProductDeal = ({ deal, isDragging }) => {
    const handleNavigation = (e) => {
        if (isDragging) {
            // Prevent navigation if dragging
            e.preventDefault();
            return;
        }
        window.location.href = `/product/${deal.productId}`; // Navigate to product page
    };

    return (
        <li
            className="relative flex-shrink-0 mr-[18px] group"
            key={deal.id}
            onClick={handleNavigation}
        >
            <div className="block cursor-pointer flex-shrink-0 w-full">
                <div className="h-full pb-[14px] cursor-pointer flex flex-col space-y-5">
                    <ProductImage
                        src={deal.image[0]}
                        alt={deal.productName || deal.title || deal.alt}
                    />
                    <ProductPrice
                        price={deal.prices}
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
