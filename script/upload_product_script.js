const axios = require("axios");
const fs = require("fs"); // Optional if you're uploading a file from the local system

const uploadProduct = async (productData, file = null) => {
    try {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXRpYmV5OTkxQGFuZ2V3eS5jb20iLCJpYXQiOjE3Mjk0MzU4MTEsImV4cCI6MTcyOTUyMjIxMX0.Y5K-28YlLTI1OQ8uNWXEaUiv2NPn5ZLc0cr33r1KAILAUGTbOwco7_GYcz7yMCSQaGJl7q18VKX20q0QPLuqFQ"; // Replace with your token

        // Create FormData for the product
        const formData = new FormData();
        formData.append("product", JSON.stringify(productData)); // Add product data

        // Append the file only if it exists
        if (file) {
            formData.append("file", file);
        }

        // Send POST request to the product upload API
        const response = await axios.post(
            "https://scs-api.arisavinh.dev/api/v1/product/add",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`, // Add token to headers
                },
            }
        );

        if (response.status === 200) {
            console.log("Product uploaded successfully.");
            console.log(response.data);
        } else {
            console.error("Failed to upload the product:", response.data);
        }
    } catch (error) {
        console.error("Error uploading product:", error.response?.data || error.message);
    }
};

// Example product data
const productData = {
    productName: "Sample Product",
    quantity: 10,
    description: "This is a sample product.",
    categoryIds: [1],
    prices: 1000,
};

// Example usage
const file = null; // If you have a file to upload, reference it here, e.g., fs.createReadStream("path/to/file")
uploadProduct(productData, file);
