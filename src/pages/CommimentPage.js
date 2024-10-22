import React, { useState } from "react";
import { motion } from "framer-motion"; // You can use Framer Motion for more advanced animations

const SwitchButton = () => {
    const [selected, setSelected] = useState("security");

    const handleClick = (option) => {
        setSelected(option);
    };

    const spanVariants = {
        initial: { opacity: 0.5 },
        animate: { opacity: 1 },
    };

    return (
        <div className="w-[920px] h-[51px] mb-[37px] text-[16px] leading-[24px]">
            <div
                className="flex items-center justify-start w-[920px] h-[51px] mb-[37px] border-2 border-[#0a8800] rounded-lg bg-white p-[3px]"
                style={{
                    textSizeAdjust: "100%",
                    WebkitUserDrag: "none",
                }}
            >
                <motion.span
                    className={`text-center font-semibold flex-grow cursor-pointer py-[6px] rounded-md transition-all duration-500 ${
                        selected === "security"
                            ? "bg-[#0a8800] text-white"
                            : "bg-white text-[#0a8800]"
                    }`}
                    initial="initial"
                    animate="animate"
                    variants={spanVariants}
                    onClick={() => handleClick("security")}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 15px rgba(0, 128, 0, 0.3)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    Security &amp; Privacy
                </motion.span>
                <motion.span
                    className={`text-center font-semibold flex-grow cursor-pointer py-[6px] rounded-md transition-all duration-500 ${
                        selected === "shipping"
                            ? "bg-[#0a8800] text-white"
                            : "bg-white text-[#0a8800]"
                    }`}
                    initial="initial"
                    animate="animate"
                    variants={spanVariants}
                    onClick={() => handleClick("shipping")}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 15px rgba(0, 128, 0, 0.3)",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    Free Shipping &amp; Free Returns
                </motion.span>
            </div>
        </div>
    );
};

const CommitmentPage = () => {
    return (
        <div class="flex flex-col justify-center items-center">
            <div class="flex flex-col items-center w-full bg-white pb-[15px]">
                <img
                    data-cui-image="1"
                    data-state="succ"
                    class="wxWpAMbp _2SStQ7yO"
                    src="https://aimg.kwcdn.com/upload_aimg/m/a7686991-ab20-4b49-a016-82ca928f32c1.png.slim.png?imageView2/2/w/432/q/70/format/webp"
                    data-did-mount="1"
                    class="max-w-full align-top w-[144px] h-[89px]"
                />
            </div>

            <div class="w-[915px] text-[16px] leading-6">
                <div class="text-[16px] leading-[24px] flex flex-col relative max-w-[915px] pl-[45px] mb-[36px]">
                    <div>
                        <img
                            data-cui-image="1"
                            data-state="succ"
                            class="wxWpAMbp _95jOa9yf"
                            src="https://aimg.kwcdn.com/upload_aimg/m/457eeaee-fde2-4ef8-95ed-b42c4e85d15d.png.slim.png?imageView2/2/w/99/q/70/format/webp"
                            data-did-mount="1"
                            class="text-[16px] leading-[24px]  max-w-full align-top w-[33px] h-[33px] absolute left-[2px] top-[-2px]"
                        />
                        <h2 class="text-[24px] leading-[28px] font-semibold text-black">
                            Làm thế nào SCS có thể mang đến giá thấp hơn so với các nơi khác?
                        </h2>
                        <div class="text-[16px] leading-6 text-[#222] mt-[10px]">
                            Second Chance Shop mang đến mức giá cực kỳ phải chăng bằng cách kết nối
                            bạn trực tiếp với người bán những món đồ cũ chất lượng. Không cần qua
                            nhiều khâu trung gian, chúng tôi giúp bạn tiết kiệm chi phí mà vẫn đảm
                            bảo được chất lượng sản phẩm. Mỗi khi bạn mua sắm tại SCS, bạn không chỉ
                            nhận được giá tốt mà còn góp phần bảo vệ môi trường và tài nguyên thông
                            qua việc tái sử dụng những món đồ cũ.
                        </div>
                    </div>
                </div>

                <div class="flex flex-col relative max-w-[915px] pl-[45px] mb-[60px]">
                    <div>
                        <img
                            data-cui-image="1"
                            data-state="succ"
                            class="wxWpAMbp text-[16px] leading-[24px] max-w-full align-top w-[33px] h-[33px] absolute left-[2px] top-[-2px]"
                            src="https://aimg.kwcdn.com/upload_aimg/m/0684bca7-3212-435b-9c6e-dd8a56cd6fc6.png.slim.png?imageView2/2/w/99/q/70/format/webp"
                            data-did-mount="1"
                        />
                        <h2 class="text-[24px] leading-[28px] font-semibold text-black">
                            Cung cấp một loạt sản phẩm đa dạng
                        </h2>
                        <div class="text-[16px] leading-6 text-[#222] mt-[10px]">
                            Second Chance shop cung cấp đa dạng các sản phẩm từ thời trang, đồ điện
                            tử, đến nội thất và nhiều mặt hàng khác, tất cả đều là đồ cũ nhưng vẫn
                            giữ được chất lượng cao. Nhờ mạng lưới người bán và nguồn cung uy tín,
                            chúng tôi đảm bảo các sản phẩm không chỉ có giá cả phải chăng mà còn đạt
                            tiêu chuẩn về chất lượng và an toàn. Second Chance shop cam kết chỉ mang
                            đến những món đồ đáng tin cậy, loại bỏ những mặt hàng không đạt chuẩn
                            hoặc có rủi ro cho người tiêu dùng, đảm bảo trải nghiệm mua sắm an tâm
                            và bền vững.
                        </div>
                    </div>
                </div>

                <SwitchButton />

                <h2 class="text-[24px] leading-[28px] font-semibold text-center mb-[27px]">
                    Security &amp; Privacy
                </h2>
            </div>
        </div>
    );
};

export default CommitmentPage;
