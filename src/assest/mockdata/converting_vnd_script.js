const fs = require("fs");

// Import the mock array using Node.js require
const mock_recommend_products = require("./mock_recommend_products");

// Conversion rate
const conversionRate = 25000;

// Function to convert prices and round them
const convertToVND = (price) => {
    // Remove non-numeric characters from the price (like "$")
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    // Convert to VND and round to the nearest thousand
    return Math.round((numericPrice * conversionRate) / 1000) * 1000;
};

// Iterate through the array and update prices
const updatedProducts = mock_recommend_products.map((product) => {
    const updatedProduct = { ...product }; // Create a copy of the object to avoid mutating the original

    // Convert sale_price and original_price to VND and ensure they are integers
    if (product.sale_price) {
        updatedProduct.sale_price = convertToVND(product.sale_price);
    }
    if (product.original_price) {
        updatedProduct.original_price = convertToVND(product.original_price);
    }

    return updatedProduct;
});

// Write the updated array to a new file
const outputFile = "./mock_recommend_products_vnd.json";
fs.writeFileSync(outputFile, JSON.stringify(updatedProducts, null, 2), "utf-8");

console.log(`Updated product prices written to ${outputFile}`);
