import React from "react";

const About = () => {
    return (
        <div className="bg-gray-100 px-8 py-12 text-gray-800">
            {/* Section: Intro */}
            <section className="mb-12">
                <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6">
                    Second Chance Shop là gì?
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        src="https://aimg.kwcdn.com/upload_aimg/personal/25472687-6a51-42f1-82ac-259b561c7ac5.png.slim.png?imageView2/q/70/format/webp"
                        alt="Second Chance Shop"
                    />
                    <p className="text-lg leading-relaxed">
                        <strong className="text-indigo-700">Second Chance Shop</strong> là nền tảng
                        giúp kết nối người dùng với cộng đồng tiêu dùng bền vững. Tại đây, người
                        dùng có thể dễ dàng mua bán, trao đổi hàng hóa mới hoặc đã qua sử dụng, giúp
                        sản phẩm có "cơ hội thứ hai" để được sử dụng.
                    </p>
                </div>
            </section>

            {/* Section: Meaning */}
            <section className="mb-12 text-center">
                <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                    Second Chance Shop có ý nghĩa gì?
                </h2>
                <p className="text-lg leading-relaxed">
                    <strong className="text-indigo-700">"Cơ hội thứ hai"</strong> – Mang đến giải
                    pháp tiêu dùng bền vững. Tận dụng tối đa giá trị sản phẩm và giảm thiểu tác động
                    tiêu cực đến môi trường.
                </p>
            </section>

            {/* Section: Product Origins */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                    Sản phẩm trên Second Chance Shop đến từ đâu?
                </h2>
                <p className="text-lg leading-relaxed">
                    Các sản phẩm được cung cấp bởi cộng đồng người bán đa dạng, mang đến sự lựa chọn
                    phong phú và phù hợp với mọi nhu cầu.
                </p>
            </section>

            {/* Section: Strengths */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
                    Điểm mạnh của Second Chance Shop
                </h2>
                <ul className="space-y-6">
                    {[
                        "Khả năng cung cấp đa dạng sản phẩm",
                        "Hỗ trợ người dùng trong việc trao đổi và mua bán dễ dàng",
                        "Tạo dựng cộng đồng tiêu dùng bền vững",
                    ].map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <span className="text-indigo-700 text-xl font-bold mr-4">
                                {index + 1}.
                            </span>
                            <span className="text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Section: Core Values */}
            <section>
                <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Giá trị cốt lõi</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Bền vững",
                            description: "Khuyến khích tái sử dụng và giảm thiểu lãng phí.",
                            img: "https://aimg.kwcdn.com/upload_aimg/personal/dafbac80-c8be-45af-a2af-8da487aeebd1.png.slim.png?imageView2/q/70/format/webp",
                        },
                        {
                            title: "Cộng đồng",
                            description:
                                "Tạo môi trường giao lưu, mua bán thân thiện và đáng tin cậy.",
                            img: "https://aimg.kwcdn.com/upload_aimg/personal/ca3bb170-0805-46cd-8e58-b1a714d93bab.png.slim.png?imageView2/q/70/format/webp",
                        },
                        {
                            title: "Trách nhiệm xã hội",
                            description: "Cam kết bảo vệ môi trường và hỗ trợ tiêu dùng bền vững.",
                            img: "https://aimg.kwcdn.com/upload_aimg/personal/deb5c606-319e-4790-88f6-177d3d987abd.png?imageView2/q/70/format/webp",
                        },
                        {
                            title: "Tôn trọng sự khác biệt",
                            description: "Đón nhận sự đa dạng và khác biệt trong cộng đồng.",
                            img: "https://aimg.kwcdn.com/upload_aimg/personal/9413ab21-d252-4e6d-9996-e2d8aa7b6093.png.slim.png?imageView2/q/70/format/webp",
                        },
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                        >
                            <img
                                className="h-24 w-24 mx-auto rounded-full mb-4"
                                src={value.img}
                                alt={value.title}
                            />
                            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
