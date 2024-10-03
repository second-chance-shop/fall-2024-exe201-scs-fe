import React from "react";

// Array containing product details
const mockProducts = [
    {
        src: "https://img.kwcdn.com/product/fancy/7750bef3-3be0-497b-a258-890975939ff6.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "35PCS Nicpro Art Mechanical Pencil Set",
        href: "/attendance/local-warehouse-15109-2-a-psurl.html",
        price: 16.93,
        description:
            "35PCS Nicpro Art Mechanical Pencil Set - 3PCS Metal Drafting Pencils in 0.5mm, 0.7mm, 0.9mm, 3PCS 2mm Lead Holder, 20 Tube Lead Refills, 6B, 4B, 2B, HB, 2H, 4H Colors for Sketching and Drawing",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/7750bef3-3be0-497b-a258-890975939ff6.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "35PCS Nicpro Art Mechanical Pencil Set",
        href: "/attendance/local-warehouse-15109-2-a-psurl.html",
        price: 16.93,
        description:
            "35PCS Nicpro Art Mechanical Pencil Set - 3PCS Metal Drafting Pencils in 0.5mm, 0.7mm, 0.9mm, 3PCS 2mm Lead Holder, 20 Tube Lead Refills, 6B, 4B, 2B, HB, 2H, 4H Colors for Sketching and Drawing",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/7750bef3-3be0-497b-a258-890975939ff6.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "35PCS Nicpro Art Mechanical Pencil Set",
        href: "/attendance/local-warehouse-15109-2-a-psurl.html",
        price: 16.93,
        description:
            "35PCS Nicpro Art Mechanical Pencil Set - 3PCS Metal Drafting Pencils in 0.5mm, 0.7mm, 0.9mm, 3PCS 2mm Lead Holder, 20 Tube Lead Refills, 6B, 4B, 2B, HB, 2H, 4H Colors for Sketching and Drawing",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/7750bef3-3be0-497b-a258-890975939ff6.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "35PCS Nicpro Art Mechanical Pencil Set",
        href: "/attendance/local-warehouse-15109-2-a-psurl.html",
        price: 16.93,
        description:
            "35PCS Nicpro Art Mechanical Pencil Set - 3PCS Metal Drafting Pencils in 0.5mm, 0.7mm, 0.9mm, 3PCS 2mm Lead Holder, 20 Tube Lead Refills, 6B, 4B, 2B, HB, 2H, 4H Colors for Sketching and Drawing",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    {
        src: "https://img.kwcdn.com/product/fancy/16f3f68c-3f1f-4f9b-bc75-c24f44b71c6b.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "1pc Heavy Duty Collapsible Wagon Cart",
        href: "/1pc-heavy-duty-wagon.html",
        price: 25.28,
        description:
            '1pc Heavy Duty Collapsible Wagon Cart - 330LBS Capacity, All-Terrain Wheels, Foldable, Pet Carrier, Beach, Lawn, Sports, Camping, 30" Black Utility Garden Cart',
    },
    {
        src: "https://img.kwcdn.com/product/fancy/9c37bed3-f7f9-417a-aa99-e56868affe87.jpg?imageView2/2/w/500/q/70/format/webp",
        alt: "24 Pieces Airtight Glass Food Storage Containers",
        href: "/24-pieces-glass-food-storage.html",
        price: 23.99,
        description:
            "24 Pieces Airtight Glass Food Storage Containers - Reusable, Microwave, Oven, Refrigerator, Dishwasher Safe - Ideal for Offices, Schools, Camping, and Home Organization",
    },
    // Add more products as needed
];

// Reusable ProductCard component
const ProductCard = ({ src, alt, href, price, description }) => {
    return (
        <div className="bg-white p-0 flex flex-col justify-between items-center border rounded-md w-full transition-shadow duration-200 ease-in-out hover:shadow-lg">
            <a href={href} className="product-link flex flex-col items-center">
                <div className="image-container w-full flex justify-center items-center">
                    <img
                        src={src}
                        alt={alt}
                        className="product-image object-cover w-full aspect-square rounded"
                    />
                </div>
                <h3 className="product-title mt-4 text-center font-semibold text-sm">
                    {description}
                </h3>
            </a>
            <div className="product-price text-lg font-bold mt-2">
                <span>${Math.floor(price)}</span>.
                <span>{(price % 1).toFixed(2).split(".")[1]}</span>
            </div>
        </div>
    );
};

// Main component to display all products
const HomeRecommendList = () => {
    return (
        <div className="product-list grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {mockProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    src={product.src}
                    alt={product.alt}
                    href={product.href}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </div>
    );
};

export default HomeRecommendList;
