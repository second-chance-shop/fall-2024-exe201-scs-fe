import React from "react";

/**
 * StarRating component displays a star-based rating system.
 *
 * The component renders 5 stars, filling the stars based on the `rating` value.
 * If the rating contains a decimal, the last star is filled proportionally
 * according to the decimal percentage. The star size and additional styles can
 * be customized through props.
 *
 * @component
 * @author Llydo1
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.className] - Additional CSS classes for styling the container.
 * @param {number} [props.rating=3.589] - The rating value used to fill the stars. It can include decimals for partial star filling.
 * @param {string} [props.size="24"] - The size of each star in pixels.
 *
 * @example
 * // Renders a StarRating component with a rating of 4.5 and size of 32px per star
 * <StarRating rating={4.5} size="32" className="my-star-rating" />
 *
 * @returns {JSX.Element} A star rating component with filled and unfilled stars based on the rating.
 */
const StarRating = ({ className, rating = 3.589, size = "24" }) => {
    let percentage = 0;
    const parts = rating.toString().split(".");
    if (parts.length === 2) {
        percentage = rating - parts[0]; // Extracts the decimal portion for partial star filling.
    }
    rating = Math.floor(rating); // Floors the rating to fill whole stars.

    return (
        <div className={`${className}`}>
            {Array(5)
                .fill()
                .map((_, index) => (
                    <div className="relative mr-[-2px]" key={index}>
                        {/* First SVG representing the outline of the star */}
                        <svg
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={size}
                            height={size}
                            aria-hidden="true"
                        >
                            <path d="M523.1 158.7c11.3 3.6 20.1 12.4 23.7 23.8l70.5 221.1 232.1-1.3c20.2-0.1 36.7 16.2 36.8 36.4 0.1 11.9-5.6 23-15.2 29.9l-188.6 135.3 73 220.4c6.3 19.2-4 39.9-23.2 46.2-11.2 3.7-23.6 1.8-33.2-5.3l-187-137.4-187 137.4c-16.3 12-39.2 8.5-51.1-7.8-7-9.5-9-21.9-5.3-33.1l73-220.4-188.6-135.3c-16.4-11.8-20.2-34.6-8.3-51.1 6.9-9.6 18.1-15.3 29.9-15.2l232.1 1.3 70.5-221.1c6.1-19.2 26.7-29.9 45.9-23.8z m62.2 289l-73.3-230-73.3 230-241.4-1.4 196.1 140.8-75.9 229.1 194.5-142.9 194.4 142.9-75.8-229.1 196-140.8-241.3 1.4z"></path>
                        </svg>

                        {/* Second SVG representing the filled part of the star */}
                        {index <= rating ? (
                            <div
                                className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden"
                                style={index === rating ? { width: `${percentage * 100}%` } : {}}
                            >
                                <svg
                                    viewBox="0 0 1024 1024"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={size}
                                    height={size}
                                    aria-hidden="true"
                                >
                                    <path d="M512 727.8l-187 137.4c-16.3 12-39.2 8.5-51.1-7.8-7-9.5-9-21.9-5.3-33.1l73-220.4-188.6-135.3c-16.4-11.8-20.2-34.6-8.3-51.1 6.9-9.6 18.1-15.3 29.9-15.2l232.1 1.3 70.5-221.1c6.1-19.2 26.7-29.9 45.9-23.8 11.3 3.6 20.1 12.4 23.7 23.8l70.5 221.1 232.1-1.3c20.2-0.1 36.7 16.2 36.8 36.4 0.1 11.9-5.6 23-15.2 29.9l-188.6 135.3 73 220.4c6.3 19.2-4 39.9-23.2 46.2-11.2 3.7-23.6 1.8-33.2-5.3l-187-137.4z"></path>
                                </svg>
                            </div>
                        ) : null}
                    </div>
                ))}
        </div>
    );
};

export default StarRating;
