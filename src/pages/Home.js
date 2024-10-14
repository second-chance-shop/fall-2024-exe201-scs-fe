import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ThreeBoxes from "../components/home_components/ThreeBoxes";
import TwoBoxes from "../components/home_components/TwoBoxes";
import ProductRecommendList from "../components/home_components/HomeRecommendList";
import PayLater from "../components/home_components/PayLater";
import CategoryRecomendation from "../components/home_components/CategoryRecomendation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { mock_recommend_products } from "../assest/mockdata/mock_recommend_products";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        fetchProducts(category);
    };

    const fetchProducts = (category) => {
        // Placeholder URL, replace with actual API endpoint
        const url = `https://api.example.com/products?category=${category}`;
        axios
            .get(url)
            .then((response) => {
                // Assume the response has an array of products
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                // Fallback to mock data on error
                setProducts([]);
                setTimeout(() => {
                    setProducts(mock_recommend_products);
                }, 500); // Delay of 1 second
            });
    };

    // Initially load products for the default category or mock data
    useEffect(() => {
        fetchProducts(selectedCategory);
    }, []);

    return (
        <div class="">
            <div class=" w-full  mx-auto border-0 p-0">
                <div className="bg-[#C67017]">
                    <div className="mx-auto min-w-[1080px]  px-11">
                        <img
                            src="/hero-image.webp" // Assuming it's in the public folder
                            alt="Hero Banner"
                            className="w-full" // Make the image take up the full width of its container
                        />
                    </div>
                </div>
                <WarningBanner />
                <LightningDeals
                    type="lightning"
                    text1="Deals nhanh như chớp"
                    text2="Ưu đãi có hạn"
                />
                <LightningDeals
                    type="clearance"
                    text1="Xả hàng tồn kho"
                    text2="Chỉ còn vài sản phẩm
"
                />
                <ThreeBoxes />
                <TwoBoxes></TwoBoxes>
                <PayLater />
            </div>

            <div class="text-[12px] leading-6 text-black flex w-full min-w-[1080px] max-w-[1440px] mx-auto border-0 mt-[80px] user-select-none box-border touch-manipulation">
                <div class="bg-white w-full mb-10">
                    <div
                        role="region"
                        class="text-[12px] list-none text-black user-select-none border-0 tap-highlight-transparent p-0 box-border touch-manipulation m-0 mx-auto font-extrabold leading-none text-center relative pt-4.5 h-14"
                    >
                        <div class="text-[12px] text-black font-extrabold leading-none text-center border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation absolute top-[-30px] left-1/2 h-[56px] w-max transform -translate-x-1/2">
                            <img
                                data-state="succ"
                                alt="b9e1574b 946f 41c5 98e1 838e8880969f.png"
                                src="https://aimg.kwcdn.com/material-put/1f14f500e60/b9e1574b-946f-41c5-98e1-838e8880969f.png?imageView2/2/w/1300/q/80/format/webp"
                                data-was-processed="true"
                                class="text-[12px] font-extrabold leading-none text-center text-black user-select-none tap-highlight-transparent m-0 p-0 box-border touch-manipulation border-0 max-w-full w-auto align-top min-w-[1px] min-h-[1px] h-[56px]"
                            />
                        </div>
                        <div class="text-[24px] leading-[29px] font-bold text-black text-center list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation mt-[10px]">
                            <h2
                                aria-label="Explore your interests"
                                class="text-[24px] font-bold leading-[29px] text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation overflow-hidden text-ellipsis whitespace-nowrap text-center"
                            >
                                KHÁM PHÁ SỞ THÍCH CỦA BẠN
                            </h2>
                        </div>
                    </div>

                    <CategoryRecomendation onCategorySelect={handleCategoryChange} />
                    <ProductRecommendList products={products} />
                </div>
            </div>
        </div>
    );
};

export default Home;
