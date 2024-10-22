const axios = require("axios");

const getAllCategories = async () => {
    try {
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXRpYmV5OTkxQGFuZ2V3eS5jb20iLCJpYXQiOjE3Mjk0MzU4MTEsImV4cCI6MTcyOTUyMjIxMX0.Y5K-28YlLTI1OQ8uNWXEaUiv2NPn5ZLc0cr33r1KAILAUGTbOwco7_GYcz7yMCSQaGJl7q18VKX20q0QPLuqF"; // Replace with your actual token
        let page = 1;
        let hasMoreCategories = true;

        // Iterate through pages until no more categories are returned
        while (hasMoreCategories) {
            const response = await axios.get(
                `https://scs-api.arisavinh.dev/api/v1/category/${page}`,
                {
                    headers: {
                        accept: "*/*",
                        Authorization: `Bearer ${token}`, // Authorization header with token
                    },
                }
            );

            // Check if categories exist in the response
            const categories = response.data;
            if (categories && categories.length > 0) {
                console.log(`Page ${page}:`, categories);
                page++; // Move to the next page
            } else {
                console.log("No more categories left.");
                hasMoreCategories = false; // Exit the loop if no categories are found
            }
        }
    } catch (error) {
        console.error("Error retrieving categories:", error.response?.data || error.message);
    }
};

// Call the function to retrieve all categories
getAllCategories();
