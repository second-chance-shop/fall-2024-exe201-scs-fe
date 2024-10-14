import React from "react";

const ShippingOption = ({ index, label, cost, deliveryTime, companies, ariaHidden = false }) => {
    return (
        <li
            data-index={index}
            role="group"
            aria-label="ship detail"
            tabIndex="0"
            id={`splide01-slide0${index + 1}`}
            aria-roledescription="slide"
            aria-hidden={ariaHidden}
            className="text-[14px] text-[#777] cursor-pointer shrink-0 relative inline-block bg-[#f8f8f8] rounded-md p-3 w-[320px] leading-none mr-2.5 mt-2.5"
        >
            <div className="mb-2">
                <span tabIndex="0" className="whitespace-pre-wrap">
                    {label}: {cost}
                </span>
            </div>
            <div className="mb-2">
                <span tabIndex="0">Delivery: </span>
                <span tabIndex="0" className="text-black">
                    {deliveryTime}
                </span>
            </div>
            <div className="relative flex flex-wrap items-center gap-x-2">
                <span tabIndex="0" className="text-[#777777]">
                    Courier company:
                </span>
                {companies.map((company, idx) => (
                    <div key={idx} className="flex items-center">
                        <img
                            src={company.logo}
                            alt={company.name}
                            className="w-4 h-4 mr-1 max-w-[17px]"
                        />
                        <span tabIndex="0" className="text-black">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>
        </li>
    );
};

const Shipping = () => {
    const options = [
        {
            index: 0,
            label: "Bình thường",
            cost: "Miễn phí",
            deliveryTime: "Giao hàng trong 5 ngày",
            companies: [
                {
                    name: "DHL eCommerce",
                    logo: "https://aimg.kwcdn.com/upload_aimg/euler1/06677d74-df01-49f2-bd4e-3d59e6f32f9e.png.slim.png?imageView2/2/w/48/q/70/format/webp",
                },
            ],
        },
        {
            index: 1,
            label: "Express",
            cost: "$12.90 hoặc Miễn phí (đơn hàng ≥ $129.00)",
            deliveryTime: "Giao hàng trong 2 ngày",
            companies: [
                {
                    name: "FedEx",
                    logo: "https://aimg.kwcdn.com/upload_aimg/euler1/aeac691c-4bb7-41c2-9bd1-38002e702b8a.png.slim.png?imageView2/2/w/48/q/70/format/webp",
                },
                {
                    name: "DHL",
                    logo: "https://aimg.kwcdn.com/upload_aimg/euler1/06677d74-df01-49f2-bd4e-3d59e6f32f9e.png.slim.png?imageView2/2/w/48/q/70/format/webp",
                },
            ],
        },
    ];
    const paths = [
        "M790.3 731.9c54.9 0 99.4 44.5 99.4 99.3 0 54.9-44.5 99.4-99.4 99.4-54.9 0-99.4-44.5-99.4-99.4 0-54.9 44.5-99.4 99.4-99.3z m-469.8 0c54.9 0 99.4 44.5 99.3 99.3 0 54.9-44.5 99.4-99.3 99.4-54.9 0-99.4-44.5-99.4-99.4 0-54.9 44.5-99.4 99.4-99.3z m302.4-574.5c59.5-0.6 108.3 47.1 109 106.6l0 12.6 68.4 0.1c118.4 0.2 214.5 96 215.2 214.4l1.3 245.5c0.2 39.9-32 72.5-71.8 72.7l-5.3 0c-9.3-74.2-72.7-131.6-149.4-131.7-74.6 0-136.6 54.3-148.5 125.6l-173 1.9c-12.4-70.7-74.1-124.4-148.3-124.4-74.1 0-135.7 53.5-148.3 123.9-29-9.1-50.2-36-50.5-68.1l0-171.7-70.5 0.4c-28.1 0.2-51-22.5-51.1-50.6 0-28.6 23-51.5 51.2-51.5l75 0 169.2-0.3c43.1-0.1 78-35 78-78.3-0.1-43.1-35.1-77.9-78.2-77.8l-169.1 0.3c-1.5 0-3 0-4.5 0.1l0-72.9c0-39.6 31.9-71.9 71.5-72.3l429.7-4.5z m189.7 206.9l-73.9 0.8-0.6 144.6 199.7-0.8 0-20.9 0-0.9c-0.7-68.5-56.7-123.4-125.2-122.8z m-517.2-15.5c19.8 0 35.9 16 35.9 35.8 0 19.9-16.1 36-35.9 36l-169.1 0.4c-1.6 0-3.1-0.1-4.6-0.3l0-0.1-1.3-0.1c-15.1-2.4-27.1-14.4-29.6-29.5l-0.4-5.8c0-17.9 13-32.8 30-35.6l1.3-0.1 4.6-0.3 169.1-0.4z",
        "M323.7 111.7c19.8-19.8 50.7-21.8 72.7-5.9l6.9 5.9 362.1 362.1c19.8 19.8 21.8 50.7 5.9 72.6l-5.9 7-362.1 362.1c-22 22-57.7 22-79.6 0-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7 322.1-322.2-322.1-322.2c-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7z",
    ];
    return (
        <dir id="shipping" class="box-border mt-4 pr-2">
            <div
                role="button"
                aria-label="delivery entry"
                tabindex="0"
                class=" flex flex-row cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                    class="w-[20px] h-[20px] mr-2 flex-shrink-0 transform translate-y-1 overflow-hidden fill-[#0A8800]"
                >
                    <path d={paths[0]}></path>
                </svg>
                <h2
                    aria-hidden="true"
                    class="text-[16px] leading-[20px] font-medium text-[#0A8800] cursor-pointer tap-highlight-transparent m-0 p-0 box-border"
                >
                    Vận chuyển từ SCS
                </h2>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                    aria-hidden="true"
                    class="text-[10px] leading-6 text-[#0A8800] list-none cursor-pointer border-0 tap-highlight-transparent m-0 p-0 box-border w-[14px] h-[14px] mt-[4px] flex-shrink-0 overflow-hidden fill-[#0A8800]"
                >
                    <path d={paths[1]}></path>
                </svg>
            </div>

            <div>
                <ul className="flex flex-col">
                    {options.map((option) => (
                        <ShippingOption key={option.index} {...option} />
                    ))}
                </ul>
            </div>
        </dir>
    );
};

export default Shipping;
