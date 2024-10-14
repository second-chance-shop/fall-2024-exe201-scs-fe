import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password"];

    return (
        <div className="relative w-[1900px]">
            <ToastContainer />
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <main className="min-h-[calc(100vh-100px)] ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
