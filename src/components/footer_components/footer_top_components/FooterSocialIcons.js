// External Array of Social Links
const socialLinks = [
    {
        href: "https://www.facebook.com/profile.php?id=61566557542840",
        alt: "Instagram",
        src: "https://aimg.kwcdn.com/upload_aimg/pc/a817be22-932c-43b3-95e4-c768af711c34.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61566557542840",
        alt: "Facebook",
        src: "https://aimg.kwcdn.com/upload_aimg/pc/0d1c5252-2094-4504-b6fc-34a6a3f87804.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61566557542840",
        alt: "Twitter",
        src: "https://aimg.kwcdn.com/upload_aimg/temupch5/4eb16ee6-f4ed-426e-9ce3-574a2ab4ba6c.png?imageView2/2/w/120/q/70/format/webp",
    },
    {
        href: "https://www.tiktok.com/",
        alt: "Tiktok",
        src: "https://aimg.kwcdn.com/upload_aimg/web/7edd0665-db19-4e7a-aa42-5301e5ea396f.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    },
    {
        href: "https://www.youtube.com/",
        alt: "Youtube",
        src: "https://aimg.kwcdn.com/upload_aimg/web/18e81de4-adca-4b74-bd52-1aa2d7ebe771.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    },
    {
        href: "https://www.pinterest.com/",
        alt: "Pinterest",
        src: "https://aimg.kwcdn.com/upload_aimg/web/2ba1be46-f0c5-4f59-aa05-1ab05ef41126.png.slim.png?imageView2/2/w/120/q/70/format/webp",
    },
];

const FooterSocialIcons = () => {
    return (
        <div className="min-w-[108px] user-select-none overflow-visible mr-0">
            <h6 className="text-[18px] leading-6 text-white font-semibold list-none border-0 tap-highlight-transparent m-0 p-0 user-select-none">
                Kết nối với SCS
            </h6>
            <div className="box-border mt-[11px] flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                    {socialLinks.slice(0, 3).map(({ href, alt, src }) => (
                        <a
                            key={alt}
                            href={href}
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="group flex items-center justify-center relative cursor-pointer"
                        >
                            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
                                <img
                                    data-state="succ"
                                    alt={alt}
                                    data-retry-count="0"
                                    src={src}
                                    className="w-[24px] h-[24px]"
                                    data-was-processed="true"
                                />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-2">
                    {socialLinks.slice(3).map(({ href, alt, src }) => (
                        <a
                            key={alt}
                            href={href}
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="group flex items-center justify-center relative cursor-pointer"
                        >
                            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-transparent group-hover:border-white transition-all duration-300 ease-in-out">
                                <img
                                    data-state="succ"
                                    alt={alt}
                                    data-retry-count="0"
                                    src={src}
                                    className="w-[24px] h-[24px]"
                                    data-was-processed="true"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterSocialIcons;
