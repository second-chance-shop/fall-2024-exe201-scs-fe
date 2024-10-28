import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import Loading from "./components/Loading"; // Import component Loading

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password", "/otp-verification"];

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLoading(false);
        };
        
        loadData();
    }, []);

    return (
        <div>
            <ToastContainer />
            {loading ? (
                <Loading />
            ) : (
                <>
                    {!noHeaderPaths.includes(location.pathname) && <Header />}
                    <main className="flex-grow min-h-[calc(100vh-100px)]">
                        <Outlet />
                    </main>
                    <Footer className='mt-4' />
                </>
            )}
        </div>
    );
}

export default App;
