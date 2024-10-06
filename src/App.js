import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password"];
    
    return (
        <div className="flex flex-col min-h-screen w-full mx-auto">
            <ToastContainer />
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <main className="flex-grow flex justify-center items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
