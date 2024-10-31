import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LeftContain from "../components/single_product_components/LeftContain";
import RightContain from "../components/single_product_components/RightContain";
import ProductRecommendList from "../components/home_components/ProductRecommendList";
import Loading from "../components/Loading"; // Import the Loading component

const SingleProductPage = () => {
    const [products, setProducts] = useState([]);
    const { productId } = useParams(); // Get the productId from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch single product by productId
    const fetchProduct = async (productId) => {
        const url = `https://scs-api.arisavinh.dev/api/v1/product/${productId}`;

        try {
            const response = await axios.get(url, {
                headers: {
                    accept: "*/*",
                },
            });
            if (response.data.isSuccess) {
                setProduct(response.data.data);
                console.log(product.shopId);
            } else {
                console.error("Failed to fetch product, response status:", response.data.status);
                setProduct(null); // Set empty product on failure
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            setProduct(null); // Set empty product on error
        }
    };

    // Fetch recommended products
    const fetchProducts = async () => {
        const url = "https://scs-api.arisavinh.dev/api/v1/product/getAll";

        try {
            const response = await axios.get(url, {
                headers: {
                    accept: "*/*",
                },
            });
            if (response.data.isSuccess) {
                setProducts(response.data.data);
            } else {
                console.error("Failed to fetch products, response status:", response.data.status);
                setProducts([]); // Set empty products on failure
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]); // Set empty products on error
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            await Promise.all([fetchProduct(productId), fetchProducts()]); // Fetch both product and products
            setLoading(false); // Stop loading when data is fetched
        };

        fetchData();
    }, [productId]);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    // Show the Loading component while data is being fetched
    if (loading) {
        return <Loading />;
    }

    // Render the content once data is fetched
    return (
        <div className="pt-8 flex flex-col justify-center items-center flex-1">
            <div className="relative flex bg-transparent justify-center min-w-[728px] w-[1352px] max-w-[1352px]">
                {/* Pass the fetched product to LeftContain and RightContain */}
                <LeftContain product={product} />
                <RightContain product={product} />
            </div>

            <div className="w-[1352px] border-b border-[#ececec] mt-[40px]"></div>

            <div className="relative flex bg-transparent justify-center min-w-[728px] w-[1352px] max-w-[1352px] mt-16">
                {/* Pass the recommended products */}
                <ProductRecommendList products={products} />
            </div>
        </div>
    );
};

export default SingleProductPage;
