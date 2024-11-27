import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";
import { Castracao } from "../pages/castracao/Castracao.jsx";
import { AppointmentDetails } from "../pages/atendimento/appointmentDetails.jsx";
import Login from "../pages/login/login.jsx";
import Register from "../pages/registro/register.jsx";
import Consulta from "../pages/consulta/consulta.jsx";
import Confirmacao from "../pages/confirmacao/confirmacao.jsx";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/castracao",
    element: <Castracao />, 
  },
  {
    path: "/appointments/:id",
    element: <AppointmentDetails />, 
  },
  {
    path: "/confirmacao",
    element: <Confirmacao />, 
  },
  {
    path: "/login",
    element: <Login />, 
  },
  {
    path: "/cadastro",
    element: <Register />, 
  },
  {
    path: "/consulta",
    element: <Consulta />, 
  },
]);

const AppRouter = () => {
  return <RouterProvider router={route} />;
};

export default AppRouter;
