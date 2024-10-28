import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // You can use Framer Motion for more advanced animations

const SwitchButton = ({ securityRef, shippingRef }) => {
    const [selected, setSelected] = useState("security");

    useEffect(() => {
        const handleScroll = () => {
            const shippingTop = shippingRef.current.getBoundingClientRect().top;

            if (shippingTop < 150) {
                setSelected("shipping");
            } else {
                setSelected("security");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [securityRef, shippingRef]);

    const scrollToSection = (section) => {
        const offset = -100; // Adjust this value to control how much the page scrolls above the heading
        let sectionRef;

        if (section === "security") {
            sectionRef = securityRef;
        } else if (section === "shipping") {
            sectionRef = shippingRef;
        }

        const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: "smooth" });

        setSelected(section);
    };

    const spanVariants = {
        initial: { opacity: 0.5 },
        animate: { opacity: 1 },
    };

    return (
        <div className="w-[920px] h-[51px] mb-[37px] text-[16px] leading-[24px] sticky top-0 z-50 bg-white">
            <div
                className="flex items-center w-full h-full border-2 border-[#0a8800] rounded-lg bg-white p-[3px]"
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
                    onClick={() => scrollToSection("security")}
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
                    onClick={() => scrollToSection("shipping")}
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

const PayConfident = () => {
    // Array to hold certification images
    const certification_images = [
        "https://aimg.kwcdn.com/upload_aimg/temu/80d57653-6e89-4bd5-82c4-ac1e8e2489fd.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/bcb8bf23-78c9-45ab-b480-f7020d1a5f66.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/28a227c9-37e6-4a82-b23b-0ad7814feed1.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/f1c00d04-7dde-4d4a-ae3d-b8aad2de8f96.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/65e96f45-9ff5-435a-afbf-0785934809ef.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/1f29a857-fe21-444e-8617-f57f5aa064f4.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/52656b9f-5cb7-416f-8e12-f8cb39d3b734.png.slim.png?imageView2/2/w/200/q/70/format/webp",
    ];

    // Array to hold cards images
    const cards_images = [
        "https://aimg.kwcdn.com/upload_aimg/temu/da7f463a-916f-4d91-bcbb-047317a1c35e.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/b79a2dc3-b089-4cf8-a907-015a25ca12f2.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/936bf9dc-9bb2-4935-9c5a-a70b800d4cf1.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/219cc18d-0462-47ae-bf84-128d38206065.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/fb599a1d-6d42-49f2-ba7a-64b16d01b226.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/7be318de-3f5d-4bfd-96c6-8cd397904388.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/c3e5eb19-1b60-4c2b-87e1-4528fb390cbf.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/ec0c5d69-1717-4571-a193-9950ec73c8af.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/launch/3a626fff-bbf7-4a26-899a-92c42eef809a.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/7d02a691-5391-418d-a38e-eadde739e22e.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/baacbca4-6cbb-41ce-bc81-59eab8ac3638.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/d9faa4c2-17e6-4012-bc43-179d7252c184.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/8d57d602-98bf-4da0-b127-ff667db68fdf.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/temu/ac293ffc-9957-4588-a4df-f3397b4a54e0.png.slim.png?imageView2/2/w/200/q/70/format/webp",
        "https://aimg.kwcdn.com/upload_aimg/payment/6dadfba2-4f58-49bd-94d6-dc21d6f90bce.png.slim.png?imageView2/2/w/200/q/70/format/webp",
    ];

    const securityInfo = [
        "Thông tin thẻ của bạn luôn an toàn và không bị xâm phạm",
        "SCS tuân thủ Tiêu chuẩn Bảo mật Dữ liệu Thẻ Thanh Toán (PCI DSS) và các tiêu chuẩn bảo mật khác khi xử lý dữ liệu thẻ",
        "Mọi dữ liệu đều được mã hóa",
        "SCS không bao giờ bán thông tin thẻ của bạn đâu nhé!",
    ];

    return (
        <div className="text-[16px] leading-[24px] flex flex-col relative max-w-[915px] mb-[38px] pl-[42px]">
            <div
                className="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex items-center justify-center"
                style={{
                    textSizeAdjust: "100%",
                    "--rem": "16",
                    fontFamily:
                        "miui, system-ui, -apple-system, BlinkMacSystemFont, .SFNSText-Regular, Helvetica, Arial, sans-serif, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                }}
            >
                1
            </div>
            <div class="text-black text-[16px] leading-6">
                <h2 class="text-[24px] leading-[28px] font-medium">
                    Thanh toán thoải mái với các phương thức bảo mật của chúng mình
                </h2>
                <div class="text-base leading-6 text-[#222] mt-[18px]">
                    {securityInfo.slice(0, 4).map((info, index) => (
                        <p key={index} class="relative mt-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 1024 1024"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="w-[23px] h-[23px] absolute top-[1px] left-[-36px] text-[#0a8800]"
                            >
                                <path d="M930.4 227.8l-108.2-84.8-409.5 522.4-243.1-188.7-84.3 108.6 351.2 272.7z"></path>
                            </svg>
                            <span>{info}</span>
                        </p>
                    ))}
                </div>

                <div className="my-[7px] mb-[18px] flex flex-wrap">
                    {certification_images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Certification ${index}`}
                            className="mr-2 h-[43px]"
                        />
                    ))}
                </div>

                <span class="my-[7px] mb-[18px]">
                    Chúng mình cũng cung cấp thêm nhiều phương thức thanh toán khác cho bạn lựa chọn
                    nữa nhé!
                </span>
                <div className="my-[7px] mb-[18px] flex flex-wrap">
                    {cards_images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Card ${index}`}
                            className="mr-2 h-[43px] mt-[7px]"
                        />
                    ))}
                </div>
                <a
                    href="/bgt_payment_method_policy.html"
                    className="text-[16px] leading-6 text-[#aaa] flex items-center cursor-pointer mt-6 hover:underline hover:text-orange-500 group"
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="ml-1 w-[13px] h-[13px] fill-current group-hover:text-orange-500"
                    >
                        <path d="M320 215.8c-18.2-18.9-17.6-49 1.3-67.2 17-16.4 43.1-17.5 61.5-3.8l5.8 5.1 315.4 328.7c15.7 16.3 17.4 41.1 5.3 59.3l-5.2 6.5-315.5 329.6c-18.2 19-48.3 19.6-67.2 1.5-17.1-16.3-19.3-42.4-6.4-61.2l4.9-6 284-296.6-283.9-295.9z"></path>
                    </svg>
                </a>
            </div>
            <div className="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
        </div>
    );
};

const KeepDataSafe = () => {
    return (
        <div class="flex flex-col relative max-w-[915px] pl-[42px] mb-[36px]">
            <div
                className="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex justify-center items-center"
                style={{
                    textSizeAdjust: "100%",
                    WebkitUserDrag: "none",
                    lineHeight: "0",
                    "--rem": "16",
                }}
            >
                2
            </div>
            <div class="text-black text-[16px] leading-6">
                <h2 class="text-[24px] leading-[28px] font-medium">
                    Chúng mình bảo vệ dữ liệu cá nhân của bạn một cách an toàn và bảo mật
                </h2>
                <div class="text-base leading-6 text-[#222] mt-[18px]">
                    <span>
                        Bảo mật thông tin cá nhân của bạn là ưu tiên hàng đầu của chúng mình.
                    </span>
                    Chúng mình cam kết duy trì tính minh bạch và giảm thiểu các yêu cầu về{" "}
                    <a href="/permission.html">Quyền truy cập</a> trong ứng dụng. Bạn có thể xem{" "}
                    <a href="/privacy-and-cookie-policy.html">Chính sách bảo mật</a> và{" "}
                    <a href="/cookie-and-similar-technologies-policy.html">
                        Chính sách Cookie và Công nghệ tương tự
                    </a>{" "}
                    để biết thêm chi tiết.
                </div>
            </div>
            <div className="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
        </div>
    );
};

const DeliveryGuarantee = () => {
    const securityInfo = [
        "Tặng ngay 5000đ nếu hàng bị giao trễ",
        "Hoàn trả nếu hàng bị hư hỏng",
        "Không có cập nhật sau 15 ngày, hoàn tiền luôn!",
        "Không nhận được hàng sau 30 ngày, hoàn tiền ngay lập tức!",
    ];
    return (
        <div className="text-[16px] leading-[24px] flex flex-col relative max-w-[915px] mb-[38px] pl-[42px]">
            <div
                className="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex justify-center items-center"
                style={{
                    textSizeAdjust: "100%",
                    "--rem": "16",
                    fontFamily:
                        "miui, system-ui, -apple-system, BlinkMacSystemFont, .SFNSText-Regular, Helvetica, Arial, sans-serif, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                    WebkitUserDrag: "none",
                }}
            >
                2
            </div>
            <div class="text-black text-[16px] leading-6">
                <h2 class="text-[24px] leading-[28px] font-medium">Cam kết giao hàng</h2>
                <div class="text-base leading-6 text-[#222] mt-[18px]">
                    Chúng mình luôn làm việc với những đối tác vận chuyển uy tín trên toàn Việt Nam.{" "}
                    <span class="text-[#0a8800]">
                        Yên tâm nhé, đơn hàng của bạn sẽ được giao đến tay một cách an toàn và đúng
                        hẹn.
                    </span>{" "}
                    Nếu có bất kỳ trục trặc nào, hãy để chúng mình lo - chúng mình sẽ tìm giải pháp
                    tuyệt vời nhất cho bạn!
                    {securityInfo.map((info, index) => (
                        <p key={index} class="text-base leading-6 text-[#222] relative mt-[4px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                class="w-[23px] h-[23px] absolute top-[1px] left-[-36px] text-[#0a8800]"
                            >
                                <path d="M930.4 227.8l-108.2-84.8-409.5 522.4-243.1-188.7-84.3 108.6 351.2 272.7z"></path>
                            </svg>
                            <span>{info}</span>
                        </p>
                    ))}
                </div>
                <a
                    href="/bgt_payment_method_policy.html"
                    className="text-[16px] leading-6 text-[#aaa] flex items-center cursor-pointer mt-6 hover:underline hover:text-orange-500 group"
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="ml-1 w-[13px] h-[13px] group-hover:text-orange-500"
                    >
                        <path d="M320 215.8c-18.2-18.9-17.6-49 1.3-67.2 17-16.4 43.1-17.5 61.5-3.8l5.8 5.1 315.4 328.7c15.7 16.3 17.4 41.1 5.3 59.3l-5.2 6.5-315.5 329.6c-18.2 19-48.3 19.6-67.2 1.5-17.1-16.3-19.3-42.4-6.4-61.2l4.9-6 284-296.6-283.9-295.9z"></path>
                    </svg>
                </a>
            </div>
            <div className="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
        </div>
    );
};

const FreeReturn = () => {
    return (
        <div class="flex flex-col relative max-w-[915px] pl-[42px] mb-[36px]">
            <div
                className="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex justify-center items-center"
                style={{
                    textSizeAdjust: "100%",
                    WebkitUserDrag: "none",
                    lineHeight: "0",
                    "--rem": "16",
                }}
            >
                3
            </div>
            <div class="text-black text-[16px] leading-6">
                <h2 class="text-[24px] leading-[28px] font-medium">
                    Mua là thích, không thích là đổi trong 7 ngày!
                </h2>
                <div class="text-base leading-6 text-[#222] mt-[18px]">
                    Mong là bạn sẽ yêu thích những món hàng đã chọn, nhưng nếu không ưng ý 100%,
                    đừng lo lắng! Việc đổi trả siêu dễ dàng với điều kiện hàng vẫn nguyên vẹn.{" "}
                    <span class="text-[#0a8800]">
                        Mỗi đơn hàng sẽ được tặng 1 lượt đổi trả miễn phí, áp dụng cho 1 hoặc nhiều
                        sản phẩm hợp lệ, miễn là thời gian đổi trả vẫn còn hiệu lực!
                    </span>{" "}
                    😉
                </div>

                <a
                    href="/bgt_payment_method_policy.html"
                    className="text-[16px] leading-6 text-[#aaa] flex items-center cursor-pointer mt-6 hover:underline hover:text-orange-500 group"
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="ml-1 w-[13px] h-[13px] group-hover:text-orange-500"
                    >
                        <path d="M320 215.8c-18.2-18.9-17.6-49 1.3-67.2 17-16.4 43.1-17.5 61.5-3.8l5.8 5.1 315.4 328.7c15.7 16.3 17.4 41.1 5.3 59.3l-5.2 6.5-315.5 329.6c-18.2 19-48.3 19.6-67.2 1.5-17.1-16.3-19.3-42.4-6.4-61.2l4.9-6 284-296.6-283.9-295.9z"></path>
                    </svg>
                </a>
            </div>
            <div className="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
        </div>
    );
};

const PriceAdjustment = () => {
    return (
        <div class="flex flex-col relative max-w-[915px] pl-[42px] mb-[36px]">
            <div
                className="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex justify-center items-center"
                style={{
                    textSizeAdjust: "100%",
                    WebkitUserDrag: "none",
                    lineHeight: "0",
                    "--rem": "16",
                }}
            >
                4
            </div>
            <div class="text-black text-[16px] leading-6">
                <h2 class="text-[24px] leading-[28px] font-medium">Giá rớt hả? Không lo đâu!</h2>
                <div class="text-base leading-6 text-[#222] mt-[18px]">
                    Mua xong mà thấy giá giảm? Đừng buồn nha! Chỉ cần trong vòng 30 ngày sau khi mua
                    mà giá em ấy giảm, tụi mình sẽ bù khoản chênh lệch cho bạn liền tay. Mà này, nhớ
                    là hàng khuyến mãi hay hết hàng rồi thì không áp dụng đâu nhé! Còn nếu giá hời
                    hơn, cứ yên tâm, tụi mình lo hết!
                </div>

                <a
                    href="/bgt_payment_method_policy.html"
                    className="text-[16px] leading-6 text-[#aaa] flex items-center cursor-pointer mt-6 hover:underline hover:text-orange-500 group"
                >
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1024 1024"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="ml-1 w-[13px] h-[13px] group-hover:text-orange-500"
                    >
                        <path d="M320 215.8c-18.2-18.9-17.6-49 1.3-67.2 17-16.4 43.1-17.5 61.5-3.8l5.8 5.1 315.4 328.7c15.7 16.3 17.4 41.1 5.3 59.3l-5.2 6.5-315.5 329.6c-18.2 19-48.3 19.6-67.2 1.5-17.1-16.3-19.3-42.4-6.4-61.2l4.9-6 284-296.6-283.9-295.9z"></path>
                    </svg>
                </a>
            </div>
            <div className="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
        </div>
    );
};

const CommitmentPage = () => {
    const securityRef = useRef(null);
    const shippingRef = useRef(null);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center w-full bg-white pb-[15px]">
                <img
                    data-cui-image="1"
                    data-state="succ"
                    src="https://aimg.kwcdn.com/upload_aimg/m/a7686991-ab20-4b49-a016-82ca928f32c1.png.slim.png?imageView2/2/w/432/q/70/format/webp"
                    className="max-w-full align-top w-[144px] h-[89px]"
                />
            </div>

            <div className="w-[915px] text-[16px] leading-6">
                <div className="text-[16px] leading-[24px] flex flex-col relative max-w-[915px] pl-[45px] mb-[36px]">
                    <div>
                        <img
                            data-cui-image="1"
                            data-state="succ"
                            src="https://aimg.kwcdn.com/upload_aimg/m/457eeaee-fde2-4ef8-95ed-b42c4e85d15d.png.slim.png?imageView2/2/w/99/q/70/format/webp"
                            data-did-mount="1"
                            class="max-w-full align-top w-[33px] h-[33px] absolute left-[2px] top-[-2px]"
                        />
                        <h2 className="text-[24px] leading-[28px] font-semibold text-black">
                            Làm thế nào SCS có thể mang đến giá thấp hơn so với các nơi khác?
                        </h2>
                        <div class="text-[#222] mt-[10px]">
                            Second Chance Shop mang đến mức giá cực kỳ phải chăng bằng cách kết nối
                            bạn trực tiếp với người bán những món đồ cũ chất lượng. Không cần qua
                            nhiều khâu trung gian, chúng mình giúp bạn tiết kiệm chi phí mà vẫn đảm
                            bảo được chất lượng sản phẩm. Mỗi khi bạn mua sắm tại SCS, bạn không chỉ
                            nhận được giá tốt mà còn góp phần bảo vệ môi trường và tài nguyên thông
                            qua việc tái sử dụng những món đồ cũ.
                        </div>
                    </div>
                </div>

                <div className="flex flex-col relative max-w-[915px] pl-[45px] mb-[60px]">
                    <div>
                        <img
                            data-cui-image="1"
                            data-state="succ"
                            src="https://aimg.kwcdn.com/upload_aimg/m/0684bca7-3212-435b-9c6e-dd8a56cd6fc6.png.slim.png?imageView2/2/w/99/q/70/format/webp"
                            data-did-mount="1"
                            class="max-w-full align-top w-[33px] h-[33px] absolute left-[2px] top-[-2px]"
                        />
                        <h2 className="text-[24px] leading-[28px] font-semibold text-black">
                            Cung cấp một loạt sản phẩm đa dạng
                        </h2>
                        <div class="text-[#222] mt-[10px]">
                            Second Chance shop cung cấp đa dạng các sản phẩm từ thời trang, đồ điện
                            tử, đến nội thất và nhiều mặt hàng khác, tất cả đều là đồ cũ nhưng vẫn
                            giữ được chất lượng cao. Nhờ mạng lưới người bán và nguồn cung uy tín,
                            chúng mình đảm bảo các sản phẩm không chỉ có giá cả phải chăng mà còn
                            đạt tiêu chuẩn về chất lượng và an toàn. Second Chance shop cam kết chỉ
                            mang đến những món đồ đáng tin cậy, loại bỏ những mặt hàng không đạt
                            chuẩn hoặc có rủi ro cho người tiêu dùng, đảm bảo trải nghiệm mua sắm an
                            tâm và bền vững.
                        </div>
                    </div>
                </div>

                <SwitchButton securityRef={securityRef} shippingRef={shippingRef} />

                <h2
                    ref={securityRef}
                    class="text-[24px] leading-[28px] font-semibold text-center mb-[27px]"
                >
                    Bảo mật &amp; Chính sách
                </h2>

                <PayConfident />
                <KeepDataSafe />

                <h2
                    class="text-[24px] leading-[28px] font-semibold text-center mb-[27px]"
                    ref={shippingRef}
                >
                    Giao hàng &amp; Đổi trả{" "}
                </h2>

                <div class="text-[16px] leading-6 flex flex-col relative max-w-[915px] pl-[42px] mb-[40px]">
                    <div class="w-[30px] h-[30px] absolute top-[-1px] left-[3px] rounded-full bg-[#0a8800] text-white text-[20px] flex items-center justify-center">
                        1
                    </div>
                    <div>
                        <h2 class="text-[24px] leading-[28px] font-medium">
                            Giao hàng giá rẻ cho các sản phẩm được gửi từ SCS
                        </h2>
                        <div class="text-base text-[#222] mt-[18px]">
                            Chúng mình mang đến ưu đãi giao hàng giá rẻ nhờ vào mạng lưới giao hàng
                            nhanh chóng và hiệu quả mà SCS đã phát triển trong suốt 10 tháng. SCS
                            hợp tác với các dịch vụ nổi tiếng như Giao hàng nhanh, Giao hàng tiết
                            kiệm, Viettel Post, Vietnam Post, Ahamove, J&T Express, GrabExpress, DHL
                            Express và nhiều nữa!
                        </div>
                    </div>
                    <div class="w-[915px] border-b border-[#ececec] mt-[40px]"></div>
                </div>

                <DeliveryGuarantee />
                <FreeReturn />
                <PriceAdjustment />
            </div>
        </div>
    );
};

export default CommitmentPage;
