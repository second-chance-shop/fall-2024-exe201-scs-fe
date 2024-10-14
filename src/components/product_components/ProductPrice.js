import React from "react";

// Product details object containing price-related information
const mockProductDetails = {
    price: 6.79,
    discountPrice: 9.99,
    discountPercentage: 32,
    sold: "4.5K+",
};

// ProductPrice component receiving details as props
const ProductPrice = ({
    price = mockProductDetails.price,
    discountPrice = mockProductDetails.discountPrice,
    discountPercentage = mockProductDetails.discountPercentage,
    sold = mockProductDetails.sold,
}) => {
    return (
        <div className="text-[12px] h-[22px] leading-6 text-black cursor-pointer mt-2 relative">
            <div
                data-sales="true"
                data-priority-list="5321489"
                className="flex w-full h-auto min-w-0"
            >
                <div data-ignore="true" className="flex justify-between max-w-full">
                    <div
                        data-type="price"
                        role="link"
                        aria-label={`${price}`}
                        className="text-[#222] flex h-auto whitespace-nowrap"
                    >
                        <div
                            aria-hidden="true"
                            className="text-[12px] font-semibold text-[#FB7701]"
                        >
                            <span className="text-[18px] font-semibold leading-5">{price}</span>
                            <span className="text-[13px] font-bold leading-5">
                                {(price % 1).toFixed(2).split(".")[1]}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-baseline relative shrink-0">
                    <div className="max-w-full flex flex-wrap mb-2">
                        <div
                            data-type="marketPrice"
                            className="text-[13px] leading-6 text-[#777] whitespace-nowrap mb-2 ml-1 w-auto inline-block"
                        >
                            <span className="relative line-through">${discountPrice}</span>
                        </div>
                        <div
                            data-type="saleTips"
                            className="text-[13px] leading-6 text-[#777] whitespace-nowrap mb-2 ml-1 w-auto inline-block"
                        >
                            <span
                                tabIndex="0"
                                role="link"
                                aria-label={`${sold} sold`}
                                className="inline-flex"
                            >
                                <span className="ml-1">{sold}</span>
                                <span className="ml-[2px]">đã bán</span>
                            </span>
                        </div>
                        <div
                            data-type="discount"
                            className="ml-2 origin-[0_50%] w-auto translate-z-0"
                        >
                            <div className="inline-flex items-center justify-center h-[18px] text-[#fb7701] border-[1px] border-[#fb7701] rounded-[3px] p-[4px]">
                                <span>{discountPercentage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPrice;
