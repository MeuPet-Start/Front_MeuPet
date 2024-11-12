import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home.jsx";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />, 

    },

    {
        path: "/about",
        element: <About />,
    }
]); 