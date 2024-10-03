import React from "react";

const ProductStars = () => {
    return (
        <div
            role="region"
            class="flex flex-row items-center text-[14px] leading-[18px] h-[18px] font-normal text-[#777] cursor-pointer mt-2 ml-[-1px]"
        >
            <div class="relative top-1 cursor-pointer">
                <div class="bg-current mask-repeat-x mask-position-[0_50%] w-[90px] h-[18px] mask-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1024 1024' style='width:1em;height:1em;vertical-align:middle' fill='currentcolor' overflow='hidden'%3E%3Cpath d='M523.6 154.2c10.9 3.6 19.5 12.2 23.1 23.2l65.5 196.7 207.3 1.5c20.2.1 36.5 16.6 36.3 36.8-.1 11.5-5.6 22.3-14.8 29.2L674.1 564.7l62.7 197.6c6.1 19.3-4.6 39.8-23.9 45.9-11 3.5-23 1.6-32.3-5.1L512 682.4 343.4 803.1c-16.4 11.8-39.3 8-51-8.5-6.7-9.4-8.6-21.4-5.2-32.3l62.7-197.6L183 441.6c-16.3-12-19.7-34.9-7.7-51.1 6.8-9.3 17.6-14.8 29.2-14.9l207.3-1.5 65.5-196.7c6.4-19.2 27.1-29.5 46.3-23.2zM578 421.1l-66-198.4-66 198.4-209.1 1.5 168.3 124.1L342 745.9l170-121.6 169.9 121.6-63.1-199.2L787 422.6l-209-1.5z' fill='%23aaa'/%3E%3C/svg%3E')]"></div>
                <div
                    tabindex="0"
                    role="link"
                    aria-label="5 score"
                    class="absolute left-0 top-0 w-full h-[18px] cursor-pointer text-black bg-currentColor mask-repeat-x mask-position-[0_50%]"
                ></div>
            </div>
            <span class="ml-1 text-[#777] cursor-pointer">69</span>
        </div>
    );
};

export default ProductStars;
