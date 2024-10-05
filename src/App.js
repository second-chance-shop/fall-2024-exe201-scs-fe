import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password"];
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <ToastContainer/>
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
