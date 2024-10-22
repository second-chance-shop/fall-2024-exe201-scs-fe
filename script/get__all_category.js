const axios = require("axios");

const getCategories = async () => {
    try {
        // Manually fill in your token if required, for now no authorization is needed
        const token =
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXRpYmV5OTkxQGFuZ2V3eS5jb20iLCJpYXQiOjE3Mjk0MzU4MTEsImV4cCI6MTcyOTUyMjIxMX0.Y5K-28YlLTI1OQ8uNWXEaUiv2NPn5ZLc0cr33r1KAILAUGTbOwco7_GYcz7yMCSQaGJl7q18VKX20q0QPLuqFQ"; // Only if the API requires authorization

        // Send GET request to the category API
        const response = await axios.get(
            "https://scs-api.arisavinh.dev/api/v1/category/getAllCategory?page=1&size=10",
            {
                headers: {
                    accept: "*/*", // This header may or may not be necessary, depending on your API
                    Authorization: `Bearer ${token}`, // Uncomment if token is required
                },
            }
        );

        // Check if the request was successful
        if (response.status === 200) {
            console.log("Categories retrieved successfully:");
            console.log(response.data); // Log the response for debugging purposes
        } else {
            console.error("Failed to retrieve categories:", response.data);
        }
    } catch (error) {
        console.error("Error retrieving categories:", error.response?.data || error.message);
    }
};

// Call the function to retrieve categories
getCategories();
