import React from "react";

// FooterSection.jsx
const FooterSection = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <FooterLink key={index} link={link} />
                ))}
            </ul>
        </div>
    );
};
const FooterLink = ({ link }) => {
    return (
        <li>
            <a href="#" className="text-sm hover:underline">
                {link}
            </a>
        </li>
    );
};

const FooterDownloadButtons = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Download the Temu App</h3>
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

const FooterSocialIcons = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold mb-4">Connect with Temu</h3>
            <ul className="flex space-x-4">
                <li>
                    <a href="#">
                        <img src="/instagram-icon.png" alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/facebook-icon.png" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/twitter-icon.png" alt="X (Twitter)" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/tiktok-icon.png" alt="TikTok" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/youtube-icon.png" alt="YouTube" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/pinterest-icon.png" alt="Pinterest" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

const FooterTop = () => {
    return (
        <div className=" text-white py-8">
            <div className="container grid grid-cols-5 gap-4 px-">
                <FooterSection
                    title="Company info"
                    links={[
                        "About Temu",
                        "Temu - Team Up, Price Down!",
                        "Affiliate & Influencer: Earn Commission",
                        "Contact us",
                        "Careers",
                        "Press",
                        "Temu’s Tree Planting Program",
                    ]}
                />
                <FooterSection
                    title="Customer service"
                    links={[
                        "Return and refund policy",
                        "Intellectual property policy",
                        "Shipping info",
                        "Your Recalls and Product Safety Alerts",
                        "Report suspicious activity",
                    ]}
                />
                <FooterSection
                    title="Help"
                    links={[
                        "Support center & FAQ",
                        "Safety center",
                        "Temu purchase protection",
                        "Sitemap",
                        "How to order",
                        "How to track",
                        "Partner with Temu",
                    ]}
                />
                <div className="col-span-1">
                    <FooterDownloadButtons />
                </div>
                <div className="col-span-1">
                    <FooterSocialIcons />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
