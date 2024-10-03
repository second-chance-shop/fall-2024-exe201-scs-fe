import React from "react";

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

const WarningComponent = () => {
    return (
        <div class="list-none text-black text-[12px] leading-6 tap-highlight-transparent user-select-none box-border touch-manipulation flex-1 m-0 mx-auto border-0 w-full min-w-[1080px] max-w-[1440px] px-[44px] mt-[30px]">
            <section class="text-black text-[12px] leading-6 list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation block">
                <a
                    href="/commitments.html"
                    class="no-underline relative h-[38px] flex justify-between items-center text-[16px] text-white font-medium px-[22px] bg-[#0a8800] w-full rounded-t-[8px]"
                >
                    <div class="flex justify-start items-center">
                        <img
                            class="w-6 h-6 flex-shrink-0 mr-[6px]"
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
                    tabindex="0"
                    class="text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation"
                >
                    <div class="text-[16px] leading-[20px] font-medium text-[#0a8800] list-none tap-highlight-transparent m-0 w-full flex flex-row justify-between items-center border-[1px] border-solid border-t-0 border-[#0A8800] rounded-b-md cursor-pointer relative p-[9px_21px_9px_23px] user-select-none box-border touch-manipulation">
                        <div class="text-[16px] leading-[20px] text-[#0a8800] font-medium cursor-pointer list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation flex flex-row justify-start items-center">
                            <svg
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                aria-hidden="true"
                                class="text-[16px] leading-[20px] font-medium text-[#0a8800] fill-[#0a8800] cursor-pointer list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation w-[21px] h-[21px] flex-shrink-0 mr-[7px] overflow-hidden"
                            >
                                <path d={d[0]}></path>
                            </svg>
                            <span class="text-[16px] font-medium leading-[20px] text-[#0A8800] list-none cursor-pointer border-0 tap-highlight-transparent m-0 p-0 user-select-none box-border touch-manipulation overflow-hidden break-words line-clamp-2">
                                Hãy cảnh giác với những tin nhắn giả mạo về vấn đề giao hàng
                            </span>
                        </div>
                        <div class="flex items-center">
                            <span>Xem thêm</span>
                            <svg
                                viewBox="0 0 1024 1024"
                                version="1.1"
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
            </section>
        </div>
    );
};

export default WarningComponent;
