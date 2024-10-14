import React from "react";

// Array containing image details
const images = [
    {
        src: "https://commimg-us.kwcdn.com/anta-image/766b9446-1ce5-4ba3-894c-63d4f985558c.png?imageView2/q/70/format/webp",
        alt: "local warehouse 15109 2 a psurl",
        href: "/attendance/local-warehouse-15109-2-a-psurl.html",
    },
    {
        src: "https://commimg-us.kwcdn.com/anta-image/b889497f-7743-4ccc-ae5f-950eeac9f6ec.png?imageView2/q/70/format/webp",
        alt: "price drop new 15730 2 a psurl",
        href: "#",
    },
    {
        src: "https://commimg-us.kwcdn.com/anta-image/4e3f3041-b9fd-459b-a809-42552714cf72.png?imageView2/q/70/format/webp",
        alt: "clearance new tab 6252 2 a psurl",
        href: "#",
    },
];

// Reusable ImageBox component
const ImageBox = ({ src, alt, href }) => {
    return (
        <a href={href} className="relative overflow-hidden w-[32.4%] pb-0 cursor-pointer group">
            <div className="overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
            </div>
        </a>
    );
};

const ThreeBoxes = () => {
    return (
        <div
            role="region"
            className="flex-1 mx-auto w-full min-w-[1080px] max-w-[1440px] mt-[60px]"
        >
            <div className="flex justify-between items-center">
                {/* Map through the images array and render ImageBox for each */}
                {images.map((image, index) => (
                    <ImageBox key={index} src={image.src} alt={image.alt} href={image.href} />
                ))}
            </div>
        </div>
    );
};

export default ThreeBoxes;
