import StarRating from "../single_product_components/StarRating";

const ProductStars = ({ rating = 4.5, totalReviews = 211 }) => {
    return (
        <div
            role="region"
            className="flex flex-row items-center text-[14px] leading-[18px] h-[18px] font-normal text-[#777] cursor-pointer mt-2"
        >
            <div className="relative cursor-pointer w-[80px] h-[18px]">
                <StarRating className="absolute inset-0 flex" size={18} rating={rating} />
                {/* Empty Stars */}

                {/* Filled Stars */}
            </div>

            {/* Number of reviews */}
            <span className="ml-1 text-[#777] cursor-pointer">{totalReviews}</span>
        </div>
    );
};

export default ProductStars;
