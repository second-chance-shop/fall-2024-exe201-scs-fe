import React, { useState, useEffect } from "react";

const imageSrc = [
    "https://aimg.kwcdn.com/material-put/1eac59c357/1ba5d3d9-139c-4cbb-9a05-5cadc94a2bf5.png?imageView2/2/w/100/q/60/format/webp",
    "https://aimg.kwcdn.com/material-put/1eac59c357/6e8b13af-22b1-489a-b073-01fb1550f92c.png?imageView2/2/w/100/q/60/format/webp",
    "https://aimg.kwcdn.com/material-put/1eac59c357/a75417c5-97bc-4fc2-8bf4-602d60c6ae8d.png?imageView2/2/w/100/q/60/format/webp",
    "https://aimg.kwcdn.com/material-put/1eac59c357/e1478284-7f65-4445-a5c5-dd90e5db9c4f.png?imageView2/2/w/100/q/60/format/webp",
    "https://aimg.kwcdn.com/material-put/1eac59c357/00d9eb2e-c5d0-4e80-8b71-70e21a7c0e4f.png?imageView2/2/w/40/q/60/format/webp",
];

const d = [
    "M829.7 783.4l-54.9-97.2c-25.4-44.9-38.8-96.2-38.8-148.5l0-85.1c0-107.5-67.6-198.4-160-227.7l0-61c0-37.4-28.7-67.9-64-67.9-35.3 0-64 30.5-64 67.9l0 61c-92.4 29.3-160 120.2-160 227.7l0 85.1c0 52.3-13.4 103.7-38.8 148.5l-54.9 97.2c-3 5.3-3 11.8-0.2 17.1 2.8 5.3 8.1 8.6 13.9 8.6l608 0c5.8 0 11.1-3.3 13.9-8.5 2.8-5.3 2.7-11.9-0.2-17.2z m-317.7 144.6c47.1 0 87.6-29.3 106.7-71.3l-213.4 0c19.1 42 59.5 71.3 106.7 71.3z",
    "M323.7 111.7c19.8-19.8 50.7-21.8 72.7-5.9l6.9 5.9 362.1 362.1c19.8 19.8 21.8 50.7 5.9 72.6l-5.9 7-362.1 362.1c-22 22-57.7 22-79.6 0-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7 322.1-322.2-322.1-322.2c-19.8-19.8-21.8-50.7-5.9-72.7l5.9-7z",
];

const CheckmarkShieldSVG = () => {
    return (
        <svg
            className="w-[106px]    h-auto"
            viewBox="0 0 106 62"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" transform="translate(0, 36)" stroke="#0A8800" strokeWidth="0.5">
                <ellipse cx="53" cy="13" rx="52.75" ry="12.75" />
                <ellipse cx="53" cy="8.5" rx="33.75" ry="8.25" />
            </g>
            <g fill="#0A8800">
                <circle cx="69.5" cy="51.5" r="1.5" />
                <circle cx="24.5" cy="59.5" r="1.5" />
                <circle cx="83" cy="41" r="1" />
                <polygon
                    transform="translate(85.93, 31.1234) rotate(44) translate(-85.93, -31.1234)"
                    points="85.93 33.24 83.1 33.95 83.81 31.12 83.1 28.29 85.93 29.01 88.76 28.29 88.05 31.12 88.76 33.95"
                />
                <polygon
                    transform="translate(27.223, 38.1357) rotate(44) translate(-27.223, -38.1357)"
                    points="27.223 39.99 24.748 40.61 25.37 38.14 24.748 35.66 27.223 36.28 29.698 35.66 29.076 38.14 29.698 40.61"
                />
                <polygon
                    transform="translate(17.181, 27.2148) rotate(44) translate(-17.181, -27.2148)"
                    points="17.181 28.27 15.767 28.63 16.122 27.21 15.767 25.8 17.181 26.16 18.595 25.8 18.24 27.21 18.595 28.63"
                />
                <path
                    transform="translate(29, 0)"
                    d="M25.75,0.6L42.87,6.54C43.95,6.91 44.67,7.92 44.67,9.06V25.07C44.67,31.64 41.21,37.73 35.57,41.1L28.1,45.55C25.57,47.06 22.43,47.06 19.9,45.55L12.43,41.1C6.79,37.73 3.33,31.64 3.33,25.07V9.06C3.33,7.92 4.05,6.91 5.13,6.54L22.25,0.6C23.39,0.21 24.61,0.21 25.75,0.6ZM33.96,16.89C33.46,16.33 32.62,16.24 32.02,16.67L31.89,16.77L21.48,26.1L16.39,20.85L16.26,20.74C15.69,20.27 14.85,20.3 14.31,20.82C13.77,21.35 13.72,22.19 14.17,22.77L14.28,22.9L20.36,29.16L20.49,29.28C21,29.69 21.72,29.71 22.25,29.34L22.39,29.23L33.85,18.96L33.97,18.84C34.46,18.29 34.46,17.45 33.96,16.89Z"
                />
            </g>
        </svg>
    );
};

const Modal = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false); // Controls rendering
    const [isAnimating, setIsAnimating] = useState(false); // Controls animation state

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true); // Render the modal
            setTimeout(() => setIsAnimating(true), 10); // Start the open animation
        } else {
            setIsAnimating(false); // Start the close animation
            setTimeout(() => setIsVisible(false), 100); // Wait for animation to finish before unmounting
        }
    }, [isOpen]);

    if (!isVisible) return null; // Avoid rendering if the modal is not visible

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-100 ease-out">
            <div
                className={`bg-white rounded-lg shadow-lg transform transition-all items-center duration-300 ease-in-out m-0 p-[36px_40px] flex flex-col relative w-[494px] z-0 min-h-[367px] max-h-[min(640px,90%+57.6px,100%)]${
                    isAnimating ? "scale-100 opacity-100" : "scale-90 opacity-0"
                } `}
            >
                <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
                    &times;
                </button>

                <CheckmarkShieldSVG />

                <div class="text-[20px] font-semibold leading-[28px] text-gray-700 my-2 ">
                    Thông báo bảo mật
                </div>

                <div class=" text-gray-700 font-normal m-auto text-center scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <span
                        class="text-[14px] text-center text-[#222] font-normal"
                        style={{ lineHeight: 1 }}
                    >
                        Tuyệt đối không nhấp vào bất kỳ đường link nào hoặc thanh toán bất kỳ khoản
                        phí nào nếu nhận được tin nhắn tự xưng là từ USPS thông báo về sự cố giao
                        hàng do địa chỉ không chính xác. Vui lòng kiểm tra trạng thái đơn hàng trên
                        trang đơn hàng Temu hoặc liên hệ trực tiếp với đơn vị vận chuyển để được hỗ
                        trợ.
                    </span>
                </div>
                <div
                    class="text-[16px] leading-6 font-semibold text-white list-none scrollbar-thumb-[#ccc] flex items-center justify-center text-center cursor-pointer relative z-1 h-[48px] px-[19px] my-[20px] mx-auto w-[320px] transition-all duration-200 ease-in-out hover:brightness-125 hover:scale-105"
                    tabindex="0"
                    role="button"
                    onClick={onClose}
                >
                    <span class="text-[16px] leading-[18px] font-semibold text-white list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation inline-block transition-all duration-150 ease-in-out absolute z-[-1] inset-0 rounded-full bg-[#fb7701] cursor-pointer text-center"></span>
                    <span class="_3LqgzxHv">OK</span>
                </div>
            </div>
        </div>
    );
};

/**
 * WarningComponent is a UI component that displays a warning message
 * section with icons, text, and links. It consists of a commitment message
 * with security and payment-related guarantees, followed by a warning about fake delivery messages.
 *
 * @component
 * @author Llydo1
 *
 * @returns {JSX.Element} A component that renders a styled warning section.
 *
 * @example
 * // Renders the WarningComponent with preset images and text
 * <WarningComponent />
 */
const WarningComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="flex-1 mx-auto w-full min-w-[1080px] max-w-[1440px] mt-[30px]">
            <section className="block">
                <a
                    href="/commitments.html"
                    className="relative h-[38px] flex justify-between items-center text-[16px] text-white font-medium px-[22px] bg-[#0a8800] w-full rounded-t-[8px] no-underline hover:bg-[#006600] transition-colors duration-200"
                >
                    <div className="flex items-center">
                        <img
                            className="w-6 h-6 mr-[6px] flex-shrink-0"
                            src={imageSrc[0]}
                            alt=""
                            aria-hidden="true"
                        />
                        <span>Cam Kết của chúng tôi</span>
                    </div>
                    <div class="flex items-center">
                        <div class="flex items-center ml-6">
                            <div class="text-[16px] leading-[20px] text-white font-normal border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex flex-row justify-start items-center">
                                <img
                                    src={imageSrc[1]}
                                    alt=""
                                    aria-hidden="true"
                                    class="text-[16px] leading-[20px] font-normal text-white border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation max-w-full align-top w-6 h-6 flex-shrink-0 mr-1.5"
                                />
                                <span class="list-none leading-5 font-normal border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation text-white text-[16px]">
                                    Bảo mật thông tin
                                </span>
                            </div>
                            <div class="flex items-center ml-6">
                                <span class="text-[16px] leading-5 font-normal text-white border-0 tap-highlight-transparent p-0 user-select-none box-border touch-manipulation w-[1px] h-[12px] mx-6 flex-shrink-0 bg-white"></span>
                                <div class="text-[16px] text-white leading-5 font-normal border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex justify-start items-center flex-row">
                                    <img
                                        src={imageSrc[2]}
                                        alt=""
                                        aria-hidden="true"
                                        class="text-[16px] leading-[20px] font-normal text-white list-none tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation border-0 max-w-full align-top w-6 h-6 flex-shrink-0 mr-1.5"
                                    />
                                    <span>Thanh toán an toàn</span>
                                </div>
                            </div>
                            <div class="flex items-center ml-6">
                                <span class="text-[16px] leading-5 font-normal text-white border-0 tap-highlight-transparent p-0 user-select-none box-border touch-manipulation w-[1px] h-[12px] mx-6 flex-shrink-0 bg-white"></span>
                                <div class="text-[16px] text-white leading-5 font-normal border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex justify-start items-center flex-row">
                                    <img
                                        src={imageSrc[3]}
                                        alt=""
                                        aria-hidden="true"
                                        class="text-[16px] leading-[20px] font-normal text-white list-none tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation border-0 max-w-full align-top w-6 h-6 flex-shrink-0 mr-1.5"
                                    />
                                    <span>Cam kết giao hàng </span>
                                </div>
                            </div>
                        </div>
                        <img
                            class="w-[14px] h-[14px] ml-2 flex-shrink-0"
                            src={imageSrc[4]}
                            alt=""
                            aria-hidden="true"
                        />
                    </div>
                </a>
                <div
                    role="button"
                    tabIndex="0"
                    className="text-[12px] leading-6 text-black hover:bg-gray-300 transition-colors duration-200"
                    onClick={handleOpenModal}
                >
                    <div className="flex justify-between items-center p-[9px_21px_9px_23px] border border-[#0A8800] border-t-0 rounded-b-md cursor-pointer relative">
                        <div className="flex items-center">
                            <svg
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                aria-hidden="true"
                                className="w-[21px] h-[21px] mr-[7px] fill-[#0a8800] flex-shrink-0"
                            >
                                <path d={d[0]}></path>
                            </svg>
                            <span className="text-[16px] font-medium text-[#0A8800]">
                                Hãy cảnh giác với những tin nhắn giả mạo về vấn đề giao hàng
                            </span>
                        </div>
                        <div className="flex items-center">
                            <span>Xem thêm</span>
                            <svg
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                aria-hidden="true"
                            >
                                <path d={d[1]}></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}></Modal>
            </section>
        </div>
    );
};

export default WarningComponent;
