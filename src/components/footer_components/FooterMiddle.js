import React from "react";

const securityImages = [
    "https://aimg.kwcdn.com/upload_aimg/temu/80d57653-6e89-4bd5-82c4-ac1e8e2489fd.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/bcb8bf23-78c9-45ab-b480-f7020d1a5f66.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/28a227c9-37e6-4a82-b23b-0ad7814feed1.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/f1c00d04-7dde-4d4a-ae3d-b8aad2de8f96.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/65e96f45-9ff5-435a-afbf-0785934809ef.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/1f29a857-fe21-444e-8617-f57f5aa064f4.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/52656b9f-5cb7-416f-8e12-f8cb39d3b734.png.slim.png?imageView2/2/w/120/q/70/format/webp",
];

const cardImages = [
    "https://aimg.kwcdn.com/upload_aimg/temu/da7f463a-916f-4d91-bcbb-047317a1c35e.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/b79a2dc3-b089-4cf8-a907-015a25ca12f2.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/936bf9dc-9bb2-4935-9c5a-a70b800d4cf1.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/219cc18d-0462-47ae-bf84-128d38206065.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/fb599a1d-6d42-49f2-ba7a-64b16d01b226.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/7be318de-3f5d-4bfd-96c6-8cd397904388.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/c3e5eb19-1b60-4c2b-87e1-4528fb390cbf.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/ec0c5d69-1717-4571-a193-9950ec73c8af.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/launch/3a626fff-bbf7-4a26-899a-92c42eef809a.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/7d02a691-5391-418d-a38e-eadde739e22e.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/baacbca4-6cbb-41ce-bc81-59eab8ac3638.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/d9faa4c2-17e6-4012-bc43-179d7252c184.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/8d57d602-98bf-4da0-b127-ff667db68fdf.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/temu/ac293ffc-9957-4588-a4df-f3397b4a54e0.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    "https://aimg.kwcdn.com/upload_aimg/payment/6dadfba2-4f58-49bd-94d6-dc21d6f90bce.png.slim.png?imageView2/2/w/120/q/70/format/webp",
];

const FooterMiddle = () => {
    return (
        <div class="text-[12px] leading-6 text-white flex flex-row pr-[40px] justify-center items-center">
            <div class="mr-[25px] shrink-0 w-[509.984px]">
                <h6 class="text-[14px]">Chứng nhận bảo mật</h6>
                <div class="flex flex-row flex-wrap items-center mt-[12px]">
                    {securityImages.map((imageSrc, index) => (
                        <img
                            key={index}
                            data-cui-image="1"
                            data-state="succ"
                            src={imageSrc}
                            alt=""
                            aria-hidden="true"
                            data-did-mount="1"
                            class="w-auto h-[28px] mb-2 mr-2"
                        />
                    ))}
                </div>
            </div>
            <div>
                <h6 class="text-[14px]">Châp nhận thanh toán</h6>
                <div class="flex flex-wrap mt-[10px]">
                    {cardImages.map((imageSrc, index) => (
                        <div key={index} class="w-[42px] h-[28px] rounded-[3px] mr-[8px] mb-[10px]">
                            <img
                                class="w-full h-full block"
                                data-cui-image="1"
                                data-state="succ"
                                src={imageSrc}
                                alt=""
                                aria-hidden="true"
                                data-did-mount="1"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;
