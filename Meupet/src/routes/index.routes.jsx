import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />, 

    },
]); 