import React from "react";

const ProductPrice = () => {
    return (
        <div class="text-[12px] leading-6 text-black cursor-pointer mt-2 relative">
            <div
                data-sales="true"
                data-priority-list="5321489"
                class="flex w-full h-auto min-w-0 flex-wrap"
            >
                <div
                    data-ignore="true"
                    class="flex flex-wrap justify-between max-w-full flex-shrink-0"
                >
                    <div
                        data-type="price"
                        role="link"
                        aria-label="$6.79"
                        class="text-[#222] flex h-auto whitespace-nowrap origin-[0_50%] mb-[10px]"
                    >
                        <div
                            aria-hidden="true"
                            class="text-[12px] font-semibold leading-[20px] text-[#FB7701] mt-1"
                        >
                            <span class="text-[18px] font-semibold leading-5">$</span>
                            <span class="text-[18px] font-semibold leading-5">6</span>
                            <span class="text-[13px] font-bold leading-5">.79</span>
                        </div>
                    </div>
                    <img
                        data-state="succ"
                        aria-hidden="true"
                        alt="$6.79"
                        data-type="priceIcon"
                        class="min-w-[1px] min-h-[1px] h-auto w-auto relative top-2 mx-1 align-baseline"
                    />
                </div>

                <div class="flex items-baseline relative h-[100%] shrink-0 mt-3">
                    <div class="max-w-full flex flex-wrap mb-2">
                        <div
                            data-type="marketPrice"
                            class="text-[13px] leading-6 text-[#777] whitespace-nowrap origin-[0_50%] mb-2 ml-1 w-auto inline-block"
                        >
                            <span class="relative">$9.99</span>
                        </div>
                        <div
                            data-type="saleTips"
                            class="text-[13px] leading-6 text-[#777] whitespace-nowrap origin-[0_50%] mb-2 ml-1 w-auto inline-block"
                        >
                            <span
                                tabindex="0"
                                role="link"
                                aria-label="4.5K+sold"
                                class="inline-flex"
                            >
                                <span>4.5K+</span>
                                <span class="ml-2">sold</span>
                            </span>
                        </div>
                        <div data-type="discount" class="ml-2 origin-[0_50%] w-auto translate-z-0">
                            <div class="inline-flex items-center justify-center h-[18px] text-[#fb7701] border-[1px] border-[#fb7701] rounded-[3px] p-[4px]">
                                <span>-32%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPrice;
