import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserProfile } from "./store/userSlice";
import Context from "./context";

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);


    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password", "/otp-verification"];

    return (
        <div>
            <ToastContainer />
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            
                <main className="min-h-[calc(100vh-100px)]">
                    <Outlet />
                </main>
            <Footer />
        </div>
    );
}

export default App;
