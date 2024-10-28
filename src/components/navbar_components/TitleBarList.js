import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
    {
        title: "Best Sellers",
        href: "/channel/best-sellers.html",
        svgPath:
            "M542.7 34.1c58.8 0 110.7 40.1 127.6 98.8l0.7 2.5 0.5 1.1c0.3 0.9 0.6 1.8 0.9 2.7l0.7 2.8c6.2 29.5 9.5 59.1 9.5 88.8 0 26.2-2.4 52.3-7.2 78l-1.8 9.2 145.4 0.1c2.5 0 5 0.2 7.5 0.5l1.1 0.1 2.7 0.2c41.3 3.2 79.2 25.6 102.2 61.6l2.6 4.2c15.3 25.2 22.4 54.8 20.2 84.5l0.1-1.4 0.1-1.1 0 1.1c0.1 5.4-0.3 10.6-1.2 15.3l-0.8 3.4-74 340c-2.1 8.1-5.5 15.7-10.1 22.4l0.4-0.8 1.2-1.8-1.6 3.2c-9.9 18.7-23.9 34.8-40.8 47l-4.6 3.2c-21.9 14.4-47 21.9-72.5 21.9-0.9 0-1.7 0-2.5-0.1l-612.3-0.2c-36.4 0-66.4-29.7-68.2-67.4l-0.1-3.6c-0.1-1.6-0.2-2.7 0-4l0.3-389.6c0-34.8 24.3-64.4 57.2-70.1l3.4-0.4c102-11.9 169.3-32.5 200-59 42.2-36.2 80.1-108.7 80.1-154.3 0-78.4 59-138.7 133.3-138.8z m-218.4 460.8c-28.3 0-51.2 22.9-51.2 51.2l0 204.8c0 28.3 22.9 51.2 51.2 51.2 28.3 0 51.2-22.9 51.2-51.2l0-204.8c0-28.3-22.9-51.2-51.2-51.2z",
    },
    {
        title: "5-Star Rated",
        href: "/channel/full-star.html",
        svgPath:
            "M848.7 133.8c62.1 0 112.5 52.1 112.4 116.3l0 481c0 64.2-50.4 116.3-112.4 116.3l-212.5 0c-8.9 0-17.5 3.6-23.6 10.1l-86.8 90.5-0.8 0.8c-13 12.6-33.7 12.3-46.4-0.6l-88.5-90.9c-6.2-6.3-14.6-9.9-23.4-9.9l-191.4 0c-59.3 0-107.9-47.4-112.1-107.6l-0.3-8.7 0-481c0-64.2 50.4-116.3 112.4-116.3z m-329.7 178.4c-10-3.4-20.8 2.1-24.1 12.4l-34.2 106.1-108.2 0.8c-6 0-11.7 3-15.2 8-6.3 8.8-4.5 21.1 4 27.6l87.1 66.4-32.7 106.6c-1.8 5.9-0.8 12.4 2.7 17.4 6.1 8.9 18.1 10.9 26.6 4.6l88-65.1 88 65.1c4.9 3.6 11.1 4.6 16.8 2.7 10-3.3 15.6-14.4 12.4-24.7l-32.6-106.6 87-66.4c4.8-3.7 7.7-9.5 7.8-15.7 0.1-10.9-8.4-19.8-19-19.9l-108.1-0.8-34.2-106.1c-1.9-5.9-6.4-10.5-12.1-12.4z",
    },
    {
        title: "Early Black Friday",
        href: "/attendance/us-blackfriday-early-20241020-21256-1-a-psurl.html",
        svgPath:
            "M779 45.5c65.5 0 120.2 50.2 126.2 115.7l61.4 678.6c3.2 35.6-8.6 70.9-32.6 97.3-24 26.4-58 41.4-93.6 41.4l-656.8 0c-35.6 0-69.5-15-93.6-41.4-24-26.4-35.8-61.7-32.6-97.3l61.4-678.6c5.9-65.5 60.6-115.7 126.2-115.7l534 0z m-378.6 429.6l-151.7 0 0 351.5 77.6 0 0-156.2 64.6 0 0-54.3-64.6 0 0-88.5 74.1 0 0-52.5z m133.1 0l-96.7 0 0 351.5 77.6 0 0-157.5 22.1 0 38.6 157.5 80.2 0-48.2-170.1c11.6-5.5 20.4-12.4 26.7-20.6 6.2-8.2 10.5-18 12.8-29.3 2.3-11.3 3.5-24.2 3.5-38.6 0-24.6-4.8-43.6-14.6-57.1-9.7-13.5-23.2-22.8-40.5-28-17.3-5.2-37.9-7.8-61.5-7.8z m241.4 0l-77.6 0 0 351.5 77.6 0 0-351.5z m-235.4 52.1c14.7 0 24.9 4.2 30.4 12.6 5.5 8.4 8.2 20.1 8.2 35.1 0 10.4-1.2 19.3-3.7 26.7-2.5 7.4-6.7 13-12.8 16.9-6.1 3.9-14.6 5.9-25.5 5.9l-21.7 0 0-97.2 25.1 0z m153.3-365.5l-6.7 0.5c-11.2 2.1-20.4 10-24.2 20.6-22.5 63.5-82.5 106-149.9 106-67.4 0-127.4-42.5-149.9-106-3.8-10.7-13-18.6-24.2-20.6-11.2-2.1-22.6 2-29.9 10.6-7.4 8.6-9.6 20.6-5.9 31.2 31.5 89 115.5 148.4 209.9 148.5 94.3 0 178.4-59.5 209.9-148.5 3.8-10.7 1.6-22.6-5.9-31.2-4.4-5.2-10.3-8.7-16.7-10.3l-6.5-0.8z",
    },
    {
        title: "Local Warehouse",
        href: "/channel/local-warehouse.html",
        svgPath:
            "M771.4 730.5c56.6 0 102.4 45.8 102.4 102.4 0 56.6-45.8 102.4-102.4 102.4-56.6 0-102.4-45.8-102.4-102.4 0-56.6 45.8-102.4 102.4-102.4z m-515.4 0c56.6 0 102.4 45.8 102.4 102.4 0 56.6-45.8 102.4-102.4 102.4-56.6 0-102.4-45.8-102.4-102.4 0-56.6 45.8-102.4 102.4-102.4z m410-580.5c53.4 0 96.8 43.3 96.8 96.8l-0.1 67.4 156 65.1c36 15 59.5 50.3 59.5 89.3l0 255.6c0 36.8-20.5 68.8-50.7 85.1-8.3-78.9-75-140.3-156.1-140.3-85 0-154.3 67.6-156.9 152l-198.3-0.1-0.1-4.8c-5.1-82.1-73.3-147.1-156.7-147.1-81.8 0-149.1 62.6-156.3 142.6-32.7-15.5-55.3-48.8-55.3-87.4l0-477.4c0-53.4 43.3-96.8 96.8-96.8l521.4 0z m-189.2 109.4l-119.7 0c-5 0-9.5 3.5-11.3 8.8l-65.2 194.7c-0.5 1.5-0.8 3.1-0.7 4.8 0 7.5 5.4 13.6 12.1 13.6l75.1 0-31.7 134c-1.1 4.8 0.2 10 3.4 13.5 4.8 5.1 12.5 4.9 17-0.6l179.3-214.5c2.1-2.5 3.3-5.9 3.2-9.3 0-7.5-5.4-13.6-12-13.6l-82 0 43.6-112.3c0.7-1.7 1-3.6 1-5.5 0-7.5-5.4-13.6-12.1-13.6z",
    },
];

const TitleBarList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            id="titleBarList"
            className="list-none text-[12px] flex flex-wrap overflow-hidden mx-[10px] h-full items-center justify-start flex-row"
            style={{
                textSizeAdjust: "100%",
                userDrag: "none", // Replaces WebkitUserDrag
                "--rem": "16",
            }}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="relative list-none text-[12px] leading-[1.5] text-black border-0 tap-highlight-transparent outline-none m-0 p-0 user-select-none box-border flex items-center justify-start flex-row h-full flex-grow"
                    style={{
                        fontFamily:
                            "miui, system-ui, -apple-system, BlinkMacSystemFont, .SFNSText-Regular, Helvetica, Arial, sans-serif",
                        textSizeAdjust: "100%",
                        userDrag: "none", // Replaces WebkitUserDrag
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <a
                        href={item.href}
                        className=" pl-[10px] pr-[10px] relative flex shrink-0 items-center justify-center cursor-pointer text-[#222222] font-medium text-[13px]"
                        style={{
                            textSizeAdjust: "100%",
                            userDrag: "none", // Replaces WebkitUserDrag
                        }}
                    >
                        <svg
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="#222222"
                            aria-hidden="true"
                            className="list-none leading-6 text-[13px] font-medium whitespace-nowrap cursor-pointer text-[#222222] border-0 tap-highlight-transparent outline-none m-0 p-0 user-select-none box-border w-[17px] h-[17px] mt-[-1.5px] mr-[0.03rem] flex-shrink-0 overflow-hidden"
                            style={{
                                fontFamily:
                                    "miui, system-ui, -apple-system, BlinkMacSystemFont, .SFNSText-Regular, Helvetica, Arial, sans-serif",
                                textSizeAdjust: "100%",
                                fill: "rgb(34, 34, 34)",
                                userDrag: "none", // Replaces WebkitUserDrag
                                "--rem": "16",
                            }}
                        >
                            <title>{item.title}</title>
                            <path d={item.svgPath}></path>
                        </svg>
                        <span title={item.title}>{item.title}</span>

                        {/* New animated div for hover effect */}
                    </a>
                    {hoveredIndex === index && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.24, ease: "easeInOut" }}
                            className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-[#f2f2f2] rounded-full"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TitleBarList;
