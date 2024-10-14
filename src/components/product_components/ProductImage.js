import React from "react";

// Mock image data (assuming this exists elsewhere)
const mockImages = {
    src: "https://img.kwcdn.com/product/fancy/b5efbea0-916c-4984-8d3f-a7155692ab3e.jpg?imageView2/2/w/250/q/10/format/webp",
    alt: "Default Image",
};

// ProductImage component
const ProductImage = ({ src = mockImages.src, alt = mockImages.alt }) => {
    return (
        <div className="text-[12px] leading-6 text-black cursor-grab  tap-highlight-transparent user-select-none select-nonetouch-manipulation">
            <div className="w-full h-0 relative pb-[100%]">
                <div className="w-full h-full absolute top-0 left-0">
                    <div
                        tabIndex="0"
                        role="link"
                        className="w-full h-full flex justify-center items-center relative cursor-grab overflow-hidden "
                        style={{
                            WebkitUserDrag: "none",
                            userSelect: "none",
                            pointerEvents: "none",
                        }}
                    >
                        <div className="bg-cover bg-no-repeat bg-center min-w-full cursor-grab min-h-full">
                            <img
                                alt={alt}
                                className="max-w-full w-full align-bottom transition-transform duration-300 ease-in-out group-hover:scale-110"
                                src={src}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full z-8 pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductImage;
