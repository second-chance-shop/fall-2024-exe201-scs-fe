import React, { useState, useEffect } from "react";
import SellerBasicInformation from "./SellerBasicInformation";
import StarRating from "./StarRating";

const mockImageList = [
    {
        src: "https://img.kwcdn.com/product/fancy/market/3495e016613b51a34eb5e3d2dd36a95a_fj4hZeReeqITt.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 0",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/38c47a43-c133-4a63-8eda-5e015ca4344a.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 5",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/3c44dbe8-790f-4429-a4e7-f19147ac39a8.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 1",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/42c37cc8-844a-4f55-9cfd-872b5faf6c30.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 2",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/967e70fc-a061-4df3-b1d0-13135703383f.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 3",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/0b85dbc5-2e10-4df8-9971-2557ad0008be.jpg?imageView2/2/w/800/q/70/format/webp",
        alt: "floral print long sleeve t shirt casual lace crew neck top for womens clothing khaki 4",
    },
];

const nullProductImage = [
    {
        src: "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png", // If it's a single string, wrap it in an array and set alt as empty
        alt: "",
    },
];
const mockUserReviews = [
    {
        username: "ha***93",
        date: "21 Tháng 9, 2024",
        location: "Hà Nội",
        content:
            "Chỉ có thể nói là yêu. Phong cách thoải mái kết hợp với áo khoác và một đôi giày cao gót, bạn sẽ trông và cảm thấy thật tuyệt vời!! Chất lượng vượt ngoài mong đợi. Sẽ giao dịch lại lần nữa.",
        rating: 5,
    },
    {
        username: "mi***77",
        date: "27 Tháng 9, 2024",
        location: "Sài Gòn",
        content:
            "Rất khuyến khích, 100% thực sự rất thích. Rất mềm mại và xinh xắn. Nhẹ, khô nhanh, vừa vặn hoàn hảo, sản phẩm xuất sắc.",
        rating: 4.5,
    },
    {
        username: "vu***ng",
        date: "20 Tháng 9, 2024",
        location: "Vũng Tàu",
        content: "Rất đẹp, chất liệu tuyệt vời và rất thoải mái.",
        rating: 3.9,
    },
    {
        username: "qu***01",
        date: "20 Tháng 9, 2024",
        location: "Đà Nẵng",
        content: "Rất đẹp, chất liệu tuyệt vời và rất thoải mái.",
        rating: 3.7,
    },
    {
        username: "ho***22",
        date: "20 Tháng 9, 2024",
        location: "Cần Thơ",
        content: "Rất đẹp, chất liệu tuyệt vời và rất thoải mái.",
        rating: 2.7,
    },
    {
        username: "ng***90",
        date: "15 Tháng 9, 2024",
        location: "Hải Phòng",
        content: "Chất liệu tốt, giá cả hợp lý, sẽ ủng hộ thêm trong tương lai.",
        rating: 4.2,
    },
    {
        username: "tr***an",
        date: "14 Tháng 9, 2024",
        location: "Nha Trang",
        content: "Màu sắc như hình, mặc rất vừa vặn. Cực kỳ hài lòng.",
        rating: 4.8,
    },
    {
        username: "le***85",
        date: "10 Tháng 9, 2024",
        location: "Huế",
        content: "Chất lượng vải mềm, thoải mái khi mặc nhưng giao hàng hơi chậm.",
        rating: 3.5,
    },
    {
        username: "ph***88",
        date: "5 Tháng 9, 2024",
        location: "Biên Hòa",
        content: "Hơi rộng so với mong đợi, nhưng vẫn đẹp. Dịch vụ hỗ trợ rất tốt.",
        rating: 3.9,
    },
    {
        username: "an***12",
        date: "1 Tháng 9, 2024",
        location: "Buôn Ma Thuột",
        content: "Sản phẩm đúng mô tả, phù hợp với giá tiền. Giao hàng nhanh.",
        rating: 4.0,
    },
];



// SmallImage Component
const SmallImage = ({ setCurrentImage, currentImage, imageList }) => {
    return (
        <div aria-label="Thumbnail images" tabIndex="0" className="absolute left-0 top-0 w-[62px] h-full">
            <div className="w-[57px] relative">
                {imageList.map((image, index) => (
                    <div key={index} className="relative mb-5">
                        <img
                            src={image.src || image}
                            alt={image.alt || `Thumbnail ${index + 1}`}
                            loading="lazy"
                            className={`cursor-pointer ${currentImage.src === (image.src || image) ? "border-2 border-black" : ""}`}
                            onMouseEnter={() => setCurrentImage(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};


// BigImage Component
const BigImages = ({ currentImage }) => {
    return (
        <div role="region" className="relative">
            <div className="">
                <div className="">
                    <div className="">
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt}
                            aria-label="Goods Image"
                            className="flex-shrink-0 w-[589px] h-[785px] bg-contain bg-no-repeat bg-center"
                            fetchpriority="high"
                            draggable="false"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const OverviewReviews = ({ reviews = 80, rating = 4.7 }) => {
    return (
        <div
            id="_1AFVb_qh"
            class="relative flex flex-row flex-wrap items-center justify-between gap-y-[7px]"
        >
            <div class="box-border flex flex-row flex-wrap justify-start mr-2">
                <div
                    tabindex="0"
                    role="link"
                    class="text-[18px] font-medium leading-[18px] text-[#222] my-[5px] "
                >
                    {reviews} Đánh giá
                </div>
                <div class="text-black w-[1px] h-[18px] m-0 mr-[12px] ml-[14px] mt-[5px] mx-auto box-border relative rounded-none bg-slate-400"></div>
                <div
                    tabindex="0"
                    role="link"
                    aria-label="4.7 star rating"
                    class="text-[18px] leading-[29px] font-medium text-[#222] flex flex-row justify-center items-center"
                >
                    <span>{rating}</span>
                    <StarRating
                        className="inline-flex leading-none relative top-[-1px]"
                        rating={rating}
                    ></StarRating>
                </div>
            </div>
            <a href="" role="button">
                <section class="text-[13px] font-medium leading-[18px] text-[#0a8800] bg-[rgba(10,136,0,0.06)] rounded-md flex items-center gap-x-[8px] max-w-full h-[22px] pr-[6px]">
                    <div
                        aria-hidden="true"
                        class="text-[#0a8800] flex flex-shrink-0 items-center justify-center w-[22px] h-[22px] bg-[#0a8800] rounded-tl-md rounded-bl-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 1024 1024"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            alt="All reviews are from verified purchases"
                            class="w-[15px] h-[15px]  fill-white "
                        >
                            <path d="M557.4 67.6l357.5 136.7c28.3 10.8 46.5 38.5 45.2 68.8l-8.6 199.8c-6.8 157.9-86.7 303.6-216.2 394.3l-97.7 68.3c-72.7 50.8-169.4 50.9-242.1 0l-96.1-67.2c-129.2-90.3-208-236.5-212.4-394.2l-5.6-201.2c-0.8-29.6 16.9-56.5 44.4-67.4l345.9-137.3c27.5-10.9 58.1-11.1 85.7-0.6z m75.6 412.9l-224 0c-61.9 0-112 50.1-112 112l0 76.8c0 24.7 20.1 44.8 44.8 44.8l358.4 0c24.7 0 44.8-20.1 44.8-44.8l0-76.8c0-61.9-50.1-112-112-112z m-112-243.7c-48.1 0-87.1 40.1-87.2 89.6 0 49.5 39 89.6 87.2 89.6 48.1 0 87.1-40.1 87.1-89.6 0-49.5-39-89.6-87.1-89.6z"></path>
                        </svg>
                    </div>
                    <div class="font-medium leading-[18px] ">100% đánh giá từ người mua thật</div>
                </section>
            </a>
        </div>
    );
};

const DetailUserReviews = ({ userReviews = mockUserReviews }) => {
    return (
        <div id="UserReviews" class="box-border border-0">
            {userReviews.map((userReview, index) => (
                <div key={index} class="relative w-full py-3 box-border border-0">
                    <div class="text-0 border-0">
                        <div class="flex flex-row flex-wrap gap-y-[2px] gap-x-[6px] items-center justify-between">
                            <div class="flex items-center max-w-full">
                                <div class="flex flex-row flex-wrap gap-y-2 items-center max-w-full justify-between">
                                    <img
                                        src="https://avatar-us.kwcdn.com/avatarj-us/avatar/default/7d96f863-b4c1-43d6-8f03-ebd1c4e23e25.png?imageView2/2/w/48/q/70/format/webp"
                                        alt="avatar"
                                        class="list-none rounded-full box-border relative  w-[30px] h-[30px] cursor-pointer"
                                    />
                                    <div class="text-[14px] leading-[18px] text-[#222] font-semibold border-0 m-0 p-0 box-border overflow-hidden truncate whitespace-nowrap cursor-pointer">
                                        {userReview.username}
                                    </div>
                                    <div class="ml-[4px] text-[14px] leading-[18px] font-normal flex items-center border-0 box-border shrink-0 whitespace-nowrap">
                                        <span>
                                            <span class="text-[14px] font-normal leading-6 text-[#AAAAAA]">
                                                in{" "}
                                            </span>
                                        </span>
                                        <span>
                                            <img
                                                src="https://emojigraph.org/media/google/flag-vietnam_1f1fb-1f1f3.png"
                                                alt=""
                                                class="font-normal box-border max-w-full align-top w-[17px] h-[13px] mr-[4px] ml-[4px]"
                                            />
                                        </span>
                                        <span>
                                            <span class="text-[14px] font-normal leading-6 text-[#AAAAAA]">
                                                {userReview.location} on {userReview.date}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-2 flex flex-wrap justify-between items-center">
                            <div>
                                <StarRating
                                    className="box-border inline-flex "
                                    rating={userReview.rating}
                                ></StarRating>
                            </div>
                        </div>

                        <div class="text-[14px] leading-[22px] text-[#222] box-border relative mt-2 overflow-hidden max-h-[110px]">
                            <section>
                                <div>
                                    <span class="text-[14px] leading-[22px] text-[#222] break-words">
                                        {userReview.content}
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const SeeMoreButton = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            tabIndex="0"
            role="button"
            className="flex items-center justify-center text-center cursor-pointer select-none relative z-1 h-[42px] w-fit min-w-[220px] px-[17px] my-[20px] mx-auto font-semibold text-[14px] leading-[16px] text-[#222]"
            onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
            onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
        >
            <span
                onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
                onMouseLeave={() => setHovered(false)}
                className={`box-border inline-block absolute z-[-1] inset-0 rounded-full bg-white border-[1px] ${
                    hovered ? "border-[#222] scale-[1.02] shadow-[0_0_0_1px_#222]" : "border-[#888]"
                } transition-all duration-300 ease-in-out`}
            ></span>
            <span>Xem tất cả bình luận</span>
        </div>
    );
};

// LeftContain Component
const LeftContain = ({ product }) => {
    // Determine if the product exists based on product.productId
    const productExists = product?.productId;
    const shopId = product.shopId;

    // Handle product image data (either string or array) and convert it to the required format
    const productImages = productExists
        ? product.image && (Array.isArray(product.image) ? product.image.length > 0 : product.image)
            ? Array.isArray(product.image)
                ? product.image.map((image) => ({
                      src: image,
                      alt: "", // Provide an empty string for alt text
                  }))
                : [
                      {
                          src: product.image, // If it's a single string, wrap it in an array and set alt as empty
                          alt: "",
                      },
                  ]
            : nullProductImage // Use nullProductImage when product exists but has no valid images
        : mockImageList; // Fallback to mockImageList when productId doesn't exist
    // Set default to the first product image, or fallback to mockImageList
    const [currentImage, setCurrentImage] = useState(productImages[0]); // Start with no current image

    useEffect(() => {
        // Set the initial current image when the product is first loaded
        if (productImages.length > 0 && !currentImage) {
            setCurrentImage(productImages[0]);
        }
        // Do not reset the currentImage on every productImages change
    }, [productImages, currentImage]);

    return (
        <div id="leftcontain" className="pr-12 box-border max-w-[771px] min-w-[325px]">
            <div id="imageContent" className="flex-1 user-select-none relative pl-[70px]">
                <SmallImage
                    setCurrentImage={setCurrentImage}
                    currentImage={currentImage}
                    imageList={productImages} // Fallback to mock images if productImages are empty
                />
                <BigImages currentImage={currentImage} />
            </div>

            <div id="reviewContent" className="relative w-full p-0 pt-7">
                <OverviewReviews />
                <div className="w-full h-[1px] mt-[11px] bg-[#b4b4b4]"></div>
                <DetailUserReviews />
                <SeeMoreButton />
            </div>

            {/* <SellerBasicInformation shop={shop} /> */}
        </div>
    );
};
export default LeftContain;
