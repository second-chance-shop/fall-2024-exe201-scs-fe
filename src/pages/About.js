import React from "react";
import { motion } from "framer-motion";

const About = () => {
    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const bounce = {
        hidden: { y: 0 },
        visible: { y: [0, -15, 0] },
    };

    const pulse = {
        hidden: { scale: 1 },
        visible: {
            scale: [1, 1.05, 1],
            transition: { duration: 1, repeat: Infinity },
        },
    };

    const hoverShadow = {
        rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
        hover: {
            scale: 1.1,
            boxShadow: "0px 20px 40px rgba(0, 128, 0, 0.3)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="bg-gradient-to-b from-white via-green-50 to-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.section
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl font-extrabold text-green-600 leading-tight mb-6"
                        whileHover={{ scale: 1.05, color: "#0b6600" }}
                    >
                        Second Chance Shop là gì?
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                        whileHover={{ scale: 1.02, color: "#1f2937" }}
                    >
                        Second Chance Shop là nền tảng giúp kết nối người dùng với cộng đồng tiêu
                        dùng bền vững. Tại đây, người dùng có thể dễ dàng mua bán, trao đổi hàng hóa
                        mới hoặc đã qua sử dụng, giúp sản phẩm có "cơ hội thứ hai" để được sử dụng.
                    </motion.p>
                    <motion.img
                        src="/SCS_LOGO.jpg"
                        alt="Second Chance Shop"
                        className="mt-8 mx-auto rounded-lg shadow-md h-32 md:h-48" // Adjust sizes here
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                    />
                </motion.section>

                {/* Meaning Section */}
                <section className="mb-16 text-center">
                    <motion.h2
                        className="text-3xl font-semibold text-green-500 mb-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        Second Chance Shop có ý nghĩa gì?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <strong>"Cơ hội thứ hai"</strong> – Mang đến giải pháp tiêu dùng bền vững.
                        Tận dụng tối đa giá trị sản phẩm và giảm thiểu tác động tiêu cực đến môi
                        trường.
                    </motion.p>
                </section>

                {/* Product Origins Section */}
                <section className="mb-16 text-center">
                    <motion.h2
                        className="text-3xl font-semibold text-green-500 mb-4"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                    >
                        Sản phẩm trên Second Chance Shop đến từ đâu?
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.7 }}
                    >
                        Các sản phẩm được cung cấp bởi cộng đồng người bán đa dạng, mang đến sự lựa
                        chọn phong phú và phù hợp với mọi nhu cầu.
                    </motion.p>
                </section>

                {/* Strengths Section */}
                <section className="mb-16 text-center">
                    <motion.h2
                        className="text-3xl font-semibold text-green-500 mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.8 }}
                    >
                        Điểm mạnh của Second Chance Shop
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "Khả năng cung cấp đa dạng sản phẩm",
                            "Hỗ trợ người dùng trong việc trao đổi và mua bán dễ dàng",
                            "Tạo dựng cộng đồng tiêu dùng bền vững",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                                variants={hoverShadow}
                                initial="rest"
                                whileHover="hover"
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold mr-4"
                                        variants={pulse}
                                    >
                                        {index + 1}
                                    </div>
                                    <p className="text-lg text-gray-700">{item}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="text-center">
                    <motion.h2
                        className="text-3xl font-semibold text-green-500 mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1 }}
                    >
                        Giá trị cốt lõi
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                description:
                                    "Cam kết bảo vệ môi trường và hỗ trợ tiêu dùng bền vững.",
                                img: "https://aimg.kwcdn.com/upload_aimg/personal/deb5c606-319e-4790-88f6-177d3d987abd.png?imageView2/q/70/format/webp",
                            },
                            {
                                title: "Tôn trọng sự khác biệt",
                                description: "Đón nhận sự đa dạng và khác biệt trong cộng đồng.",
                                img: "https://aimg.kwcdn.com/upload_aimg/personal/9413ab21-d252-4e6d-9996-e2d8aa7b6093.png.slim.png?imageView2/q/70/format/webp",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md cursor-pointer"
                                variants={hoverShadow}
                                initial="rest"
                                whileHover="hover"
                            >
                                <motion.img
                                    src={value.img}
                                    alt={value.title}
                                    className="h-20 w-20 mb-4 rounded-full"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <motion.h3
                                    className="text-lg font-bold text-green-600 mb-2"
                                    variants={bounce}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {value.title}
                                </motion.h3>
                                <p className="text-gray-600 text-center">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
