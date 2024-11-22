import WarningBanner from "../components/home_components/WarningBanner";
import LightningDeals from "../components/home_components/LightningDeals";
import ThreeBoxes from "../components/home_components/ThreeBoxes";
import TwoBoxes from "../components/home_components/TwoBoxes";
import ProductRecommendList from "../components/home_components/ProductRecommendList";
import PayLater from "../components/home_components/PayLater";
import CategoryRecomendation from "../components/home_components/CategoryRecomendation";
import React, { useState, useEffect, useRef } from "react";
import HeroBanner from "../components/home_components/HeroBanner";
import axios from "axios";
// Import the JSON file
import mock_recommend_products_vnd from "../assest/mockdata/mock_recommend_products_vnd.json";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(0); // Use categoryId here
    const [products, setProducts] = useState([]);
    const initialDeals = useRef(null); // Store initial deals list
    const targetDivRef = useRef(null);

    const handleScrollToDiv = () => {
        const targetPosition = targetDivRef.current.getBoundingClientRect().top + window.scrollY;
        const offset = 100; // Adjust this value to control the gap above the target element
        window.scrollTo({ top: targetPosition - offset, behavior: "smooth" });
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId); // Set categoryId when a category is selected
        fetchProducts(categoryId); // Fetch products based on categoryId
    };

    const fetchProducts = (categoryId) => {
        let url;
        if (categoryId === 0) {
            url = "https://scs-api.arisavinh.dev/api/v1/product/getAll";
        } else if (categoryId > 0) {
            url = `https://api.example.com/products?categoryId=${categoryId}`;
        } else {
            console.error("Invalid categoryId provided, falling back to all products.");
            setProducts([]);
            fetchProducts(0);
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
                    const fetchedProducts = response.data.data;

                    // Set initialDeals only if it's the first fetch
                    if (initialDeals.current === null) {
                        initialDeals.current = fetchedProducts;
                    }

                    setProducts(fetchedProducts);
                } else {
                    console.error(
                        "Failed to fetch products, response status:",
                        response.data.status
                    );
                    setProducts([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setProducts([]);
                setTimeout(() => {
                    setProducts(mock_recommend_products_vnd);
                }, 500);
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
                <HeroBanner onButtonClick={handleScrollToDiv} />
                <WarningBanner />
                <LightningDeals
                    deals={initialDeals.current || []} // Pass initial deals only
                    type="lightning"
                    text1="Đồ cũ mà mới"
                    text2="Thời gian có hạn"
                />
                <LightningDeals
                    deals={initialDeals.current || []} // Pass initial deals only
                    type="clearance"
                    text1="Xả hàng tồn kho"
                    text2="Chỉ còn vài sản phẩm"
                />
                <ThreeBoxes />
                <TwoBoxes />
                <PayLater />
            </div>

            <div
                ref={targetDivRef}
                className="text-[12px] leading-6 text-black flex flex-col w-full min-w-[1080px] max-w-[1440px] mx-auto border-0 mt-[80px] user-select-none box-border touch-manipulation bg-white mb-10"
            >
                <h2
                    aria-label="Explore your interests"
                    className="overflow-hidden text-ellipsis whitespace-nowrap text-[24px] font-bold leading-[29px] text-black text-center list-none border-0 tap-highlight-transparent p-4 user-select-none box-border touch-manipulation"
                >
                    KHÁM PHÁ SỞ THÍCH CỦA BẠN
                </h2>

                {/* Pass handleCategoryChange as a prop to update the selected category */}
                <CategoryRecomendation onCategorySelect={handleCategoryChange} />

                {/* Render the products based on the selected category */}
                <ProductRecommendList products={products} />
            </div>
        </div>
    );
};

export default Home;
