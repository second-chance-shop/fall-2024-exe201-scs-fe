import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ThreeBoxes from "../components/home_components/ThreeBoxes";
import TwoBoxes from "../components/home_components/TwoBoxes";
import ProductRecommendList from "../components/home_components/ProductRecommendList";
import PayLater from "../components/home_components/PayLater";
import CategoryRecomendation from "../components/home_components/CategoryRecomendation";
import React, { useState, useEffect } from "react";
import axios from "axios";
// Import the JSON file
import mock_recommend_products_vnd from "../assest/mockdata/mock_recommend_products_vnd.json";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(0); // Use categoryId here
    const [products, setProducts] = useState([]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId); // Set categoryId when a category is selected
        fetchProducts(categoryId); // Fetch products based on categoryId
    };

    const fetchProducts = (categoryId) => {
        let url;
        // If categoryId is 0, fetch all products
        if (categoryId === 0) {
            url = "https://scs-api.arisavinh.dev/api/v1/product/getAll";
        } else if (categoryId > 0) {
            // Ensure only valid categoryId values are used to fetch products for a specific category
            url = `https://api.example.com/products?categoryId=${categoryId}`;
        } else {
            console.error("Invalid categoryId provided, falling back to all products.");
            setProducts([]); // Set empty products if invalid categoryId
            fetchProducts(0); // Fallback to fetch all products
            return;
        }

        axios
            .get(url, {
                headers: {
                    accept: "*/*",
                },
            })
            .then((response) => {
                if (response.data.isSuccess) {
                    // Assume products are in response.data.data.content
                    setProducts(response.data.data);
                } else {
                    console.error(
                        "Failed to fetch products, response status:",
                        response.data.status
                    );
                    setProducts([]); // Set empty products on failure
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                // Fallback to mock data on error
                setProducts([]);
                setTimeout(() => {
                    setProducts(mock_recommend_products_vnd);
                }, 500); // Delay of 1 second
            });
    };

    // Initially load products for the default category or mock data
    useEffect(() => {
        // Make sure to not fetch invalid categories, fallback to 0 for all products if needed
        if (selectedCategory !== null) {
            if (selectedCategory > 0 || selectedCategory === 0) {
                fetchProducts(selectedCategory);
            } else {
                console.warn("Invalid category, defaulting to fetch all products");
                fetchProducts(0); // Fetch all products if category is invalid
            }
        }
    }, [selectedCategory]);

    return (
        <div className="">
            <div className="w-full mx-auto border-0 p-0">
                <div className="bg-[#C67017]">
                    <div className="mx-auto min-w-[1080px] px-11">
                        <img
                            src="/hero-image.webp" // Assuming it's in the public folder
                            alt="Hero Banner"
                            className="w-full" // Make the image take up the full width of its container
                        />
                    </div>
                </div>
                <WarningBanner />
                <LightningDeals type="lightning" text1="Đồ cũ mà mới" text2="Thời gian  có hạn" />
                <LightningDeals
                    type="clearance"
                    text1="Xả hàng tồn kho"
                    text2="Chỉ còn vài sản phẩm"
                />
                <ThreeBoxes />
                <TwoBoxes />
                <PayLater />
            </div>

            <div className="text-[12px] leading-6 text-black flex w-full min-w-[1080px] max-w-[1440px] mx-auto border-0 mt-[80px] user-select-none box-border touch-manipulation">
                <div className="bg-white w-full mb-10">
                    <div
                        role="region"
                        className="text-[12px] list-none text-black user-select-none border-0 tap-highlight-transparent p-0 box-border touch-manipulation m-0 mx-auto font-extrabold leading-none text-center relative pt-4.5 h-14"
                    >
                        <div className="text-[24px] leading-[29px] font-bold text-black text-center list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation mt-[10px]">
                            <h2
                                aria-label="Explore your interests"
                                className="text-[24px] font-bold leading-[29px] text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation overflow-hidden text-ellipsis whitespace-nowrap text-center"
                            >
                                KHÁM PHÁ SỞ THÍCH CỦA BẠN
                            </h2>
                        </div>
                    </div>

                    {/* Pass handleCategoryChange as a prop to update the selected category */}
                    <CategoryRecomendation onCategorySelect={handleCategoryChange} />

                    {/* Render the products based on the selected category */}
                    <ProductRecommendList products={products} />
                </div>
            </div>
        </div>
    );
};

export default Home;
