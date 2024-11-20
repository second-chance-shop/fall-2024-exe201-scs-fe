import React from "react";
import { IoMdSearch } from "react-icons/io";

import axios from "axios";
import { useState, useEffect } from "react";
const nullProductImage =
    "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"; // If it's a single string, wrap it in an array and set alt as empty

const useDynamicPlaceholder = () => {
    const categories = ["Vui lòng nhập từ khoá...", "Điện thoại", "Tivi", "Tủ lạnh"];
    const [placeholder, setPlaceholder] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        const currentCategory = categories[loop % categories.length];

        const handleTyping = () => {
            if (!isDeleting && placeholder.length < currentCategory.length) {
                setPlaceholder(currentCategory.substring(0, placeholder.length + 1));
            } else if (isDeleting && placeholder.length > 0) {
                setPlaceholder(currentCategory.substring(0, placeholder.length - 1));
            } else if (!isDeleting && placeholder.length === currentCategory.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && placeholder.length === 0) {
                setTimeout(() => {
                    setIsDeleting(false);
                    setLoop(loop + 1);
                }, 1000); // Pause before typing the next category
            }
        };

        const typingTimer = setTimeout(handleTyping, isDeleting ? 50 : 100);
        return () => clearTimeout(typingTimer);
    }, [placeholder, isDeleting, loop]);

    const handleInputFocus = () => setIsDropdownVisible(true);
    const handleInputBlur = () => setTimeout(() => setIsDropdownVisible(false), 200);

    return { placeholder, handleInputFocus, handleInputBlur, isDropdownVisible };
};

// Helper function to escape regex special characters in a string
const escapeRegex = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// Updated vietnameseMatcher
const vietnameseMatcher = (query, target) => {
    // Escape user input to prevent invalid regex patterns
    const escapedQuery = escapeRegex(query);
    // Replace 'd' with '[dđ]' for Vietnamese matching
    const normalizedQuery = escapedQuery.replace(/d/g, "[dđ]");
    const regex = new RegExp(normalizedQuery, "i"); // Case-insensitive matching
    return regex.test(target);
};

const useProductData = () => {
    const [products, setProducts] = useState([]); // Full product data
    const [displayProducts, setDisplayProducts] = useState([]); // Dynamically filtered products
    const [filteredProducts, setFilteredProducts] = useState([]); // Results based on user input

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "https://scs-api.arisavinh.dev/api/v1/product/getAll"
                );
                const productData = response.data.data;
                setProducts(productData); // Store all products
                setDisplayProducts(productData.slice(0, 5)); // Default first 5 products
                setFilteredProducts(productData); // Initial fallback
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Filter products dynamically based on input
    const filterProducts = (query) => {
        if (!query) {
            setFilteredProducts(displayProducts); // Show default 5 products
        } else {
            const filtered = products.filter((product) =>
                vietnameseMatcher(query, product.productName)
            );
            setFilteredProducts(filtered.length > 0 ? filtered : []); // Show "no results" if empty
        }
    };

    return { products, displayProducts, filteredProducts, filterProducts };
};

const SearchHeader = () => {
    const { displayProducts, filteredProducts, filterProducts } = useProductData();
    const { placeholder, handleInputFocus, handleInputBlur, isDropdownVisible } =
        useDynamicPlaceholder();

    const handleInputChange = (e) => {
        const query = e.target.value; // Get the user's input
        filterProducts(query); // Dynamically filter products
    };

    return (
        <div className="relative flex-grow hidden md:flex items-center rounded-full border justify-between max-w-sm focus-within:shadow pl-2 bg-white">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full outline-none text-black bg-white"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange} // Dynamically filter as user types
            />
            <div className="flex rounded-r-full items-center h-10 justify-center min-w-[50px] bg-orange-600 hover:bg-orange-500 hover:shadow-lg transform hover:scale-105 transition duration-200 cursor-pointer">
                <IoMdSearch className="text-white text-lg" />
            </div>
            {isDropdownVisible && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-md mt-2 z-10">
                    {/* No Results Message */}
                    {filteredProducts.length === 0 && (
                        <div className="p-3 text-gray-600">Không tìm thấy sản phẩm phù hợp</div>
                    )}
                    {/* Filtered Results */}
                    {filteredProducts.map((product, index) => (
                        <a
                            key={index}
                            href={`/product/${product.productId}`}
                            className="flex items-center p-3 border-b hover:bg-gray-50 cursor-pointer no-underline"
                        >
                            {/* Product Image */}
                            <div className="w-16 h-16 flex-shrink-0">
                                <img
                                    src={product.image[0] || nullProductImage}
                                    alt={product.productName}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="ml-4 flex-grow overflow-hidden">
                                <div className="font-bold text-lg text-black truncate">
                                    {product.productName}
                                </div>
                                <div
                                    className="text-sm text-gray-500 truncate"
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        paddingRight: "0.5rem",
                                    }}
                                >
                                    {product.description}
                                </div>
                            </div>
                        </a>
                    ))}
                    {/* Original DisplayProducts Fallback */}
                    {filteredProducts.length === 0 &&
                        displayProducts.map((product, index) => (
                            <a
                                key={`fallback-${index}`}
                                href={`/product/${product.productId}`}
                                className="flex items-center p-3 border-b hover:bg-gray-50 cursor-pointer no-underline"
                            >
                                {/* Product Image */}
                                <div className="w-16 h-16 flex-shrink-0">
                                    <img
                                        src={product.image[0]}
                                        alt={product.productName}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="ml-4 flex-grow overflow-hidden">
                                    <div className="font-bold text-lg text-black truncate">
                                        {product.productName}
                                    </div>
                                    <div
                                        className="text-sm text-gray-500 truncate"
                                        style={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            paddingRight: "0.5rem",
                                        }}
                                    >
                                        {product.description}
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
            )}
        </div>
    );
};
export default SearchHeader;
