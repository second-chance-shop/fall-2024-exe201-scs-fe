import React from "react";
import CompanyLogo from "./navbar_components/CompanyLogo";
import TitleBarList from "./navbar_components/TitleBarList";

const Navbar = () => {
    return (
        <div class="text-[12px] leading-6 text-black list-none border-0 tap-highlight-transparent outline-0 m-0 p-0 user-select-none box-border block border-t border-white border-b ">
            <div
                className="list-none text-[12px] leading-6 border-0 tap-highlight-transparent outline-none user-select-none box-border flex items-center relative z-10 h-[63px] flex-1 mx-auto w-full min-w-[1080px] max-w-[1440px] px-[44px]"
                style={{
                    textSizeAdjust: "100%",
                    WebkitUserDrag: "none",
                    WebkitBoxAlign: "center",
                    WebkitBoxFlex: 1,
                    "--rem": "16",
                }}
            >
                <CompanyLogo />
                <TitleBarList />
            </div>
        </div>
    );
};

export default Navbar;
