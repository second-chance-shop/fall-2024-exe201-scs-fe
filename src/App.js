import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    const location = useLocation();
    const noHeaderPaths = ["/login", "/register", "/forgot-password"];
    return (
        <div className="flex flex-col min-h-screen w-2000 mx-auto">
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <main
                style={{ flexGrow: 1 }}
                class="border-0 m-0 p-0 box-border flex justify-center items-center"
            >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
