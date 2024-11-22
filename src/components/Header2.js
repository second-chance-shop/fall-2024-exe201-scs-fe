import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../store/userSlice";
import LogoSection from "./header_components/LogoSection";
import SearchBar from "./header_components/SearchBar";
import CartIcon from "./header_components/CartIcon";
import UserDropdown from "./header_components/UserDropdown";
import OrderDropdown from "./header_components/OrderDropdown";
import LoginButton from "./header_components/LoginButton";

const Header2 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserProfile());
    }, [dispatch]);

    return (
        <header className="h-20 shadow-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 z-30 flex items-center sticky top-0 transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex items-center justify-between h-full px-6">
                <LogoSection />
                <SearchBar />
                <div className="flex items-center gap-6">
                    <CartIcon />
                    <UserDropdown />
                    <OrderDropdown />
                    <LoginButton />
                </div>
            </div>
        </header>
    );
};

export default Header2;
