import React from "react";

const PayLater = () => {
    return (
        <div
            id="payLater"
            role="region"
            class="flex w-full min-w-[1080px] max-w-[1440px] mx-auto mt-[60px]"
        >
            <section class="px-[20px] w-full flex justify-center items-center bg-black">
                <div class="text-[12px] inline-flex items-center py-3">
                    <span
                        title="Shop now, pay later with"
                        class="text-[22px] font-bold italic leading-[48px] text-white text-center mr-2"
                    >
                        Shop now, pay later with
                    </span>
                    <img
                        data-state="succ"
                        alt="7d02a691 5391 418d a38e eadde739e22e.png.slim.png"
                        src="https://bizweb.dktcdn.net/thumb/grande/100/329/122/articles/spaylater-shopee.jpg?v=1692261980303"
                        class="mr-2 w-[60px] h-[40px] flex-shrink-0"
                    />
                    <img
                        data-state="succ"
                        alt="baacbca4 6cbb 41ce bc81 59eab8ac3638.png.slim.png"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyv42l5nQ0j9j2j_31I_42Yj8qK-BuygjdQ&s"
                        class="mr-2 w-[60px] h-[40px] flex-shrink-0"
                    />
                    <img
                        data-state="succ"
                        alt="8d57d602 98bf 4da0 b127 ff667db68fdf.png.slim.png"
                        src="https://mma.prnewswire.com/media/1535892/Kredivo.jpg?p=twitter"
                        class="w-[60px] h-[40px] flex-shrink-0"
                    />
                </div>
            </section>
        </div>
    );
};

export default PayLater;
