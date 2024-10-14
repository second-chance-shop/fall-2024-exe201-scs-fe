import React from "react";
import FooterSocialIcons from "./footer_top_components/FooterSocialIcons";

// FooterSection.jsx
const FooterSection = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <FooterLink key={index} link_data={link} />
                ))}
            </ul>
        </div>
    );
};
const FooterLink = ({ link_data }) => {
    const { text, link } = link_data;
    return (
        <li>
            <a href={link} className="text-sm hover:underline">
                {text}
            </a>
        </li>
    );
};

const FooterDownloadButtons = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Cài đặt ứng dụng SCS</h3>
            <ul className="space-y-2">
                <li className="flex items-center">
                    <img src="/apple-store-logo.png" alt="App Store" className="mr-2" />
                    <span>Download on the App Store</span>
                </li>
                <li className="flex items-center">
                    <img src="/google-play-logo.png" alt="Google Play" className="mr-2" />
                    <span>Get it on Google Play</span>
                </li>
            </ul>
        </div>
    );
};

const FooterTop = () => {
    return (
        <div className="text-white py-8">
            <div className="container grid grid-cols-5 gap-20 w-auto">
                <FooterSection
                    title="Thông tin"
                    links={[
                        { text: "Về chúng mình", link: "about-us" },
                        { text: "SCS - Team Up, Price Down!", link: "" },
                        { text: "Cộng tác viên & Influencer: Earn Commission", link: "" },
                        { text: "Liên hệ chúng mình", link: "" },
                        { text: "Nghề nghiệp", link: "" },
                        { text: "Tin tức", link: "" },
                        { text: "Chương trình đặc biệt", link: "" },
                    ]}
                />
                <FooterSection
                    title="Dịch vụ khách hàng"
                    links={[
                        { text: "Chính sách đổi trả", link: "" },
                        { text: "Quy định về sở hữu trí tuệ", link: "" },
                        { text: "Thông tin vận chuyển", link: "" },
                        { text: "Quy định về sở hữu trí tuệ", link: "" },
                        { text: "Báo cáo hành vi nghi vấn", link: "" },
                    ]}
                />
                <FooterSection
                    title="Hỗ trợ"
                    links={[
                        { text: "Trung tâm hỗ trợ & FAQ", link: "" },
                        { text: "Trung tâm An ninh", link: "" },
                        { text: "Chương trình bảo vệ Người mua", link: "" },
                        { text: "Bản đồ", link: "" },
                        { text: "Cách thức đặt hàng", link: "" },
                        { text: "Theo dõi đơn hàng", link: "" },
                        { text: "Liên kết với chúng mình", link: "" },
                    ]}
                />
                <div className="col-span-1">
                    <FooterDownloadButtons />
                </div>
                <div className="w-auto">
                    <FooterSocialIcons />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
