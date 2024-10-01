import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    const location = useLocation();
    // Array of paths where you DON'T want the header
    const noHeaderPaths = ["/login", "/register", '/forgot-password'];

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {!noHeaderPaths.includes(location.pathname) && <Header />}
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
