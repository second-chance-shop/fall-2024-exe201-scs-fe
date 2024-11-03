import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CartProvider>
                {" "}
                {/* Wrap RouterProvider with CartProvider */}
                <RouterProvider router={router} />
            </CartProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
