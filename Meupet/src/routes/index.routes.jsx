import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";
import { AppointmentDetails } from "../pages/atendimento/appointmentDetails.jsx";
import Login from "../pages/login/login.jsx";
import Register from "../pages/registro/register.jsx";
import EsqueceuSenha from "../pages/esqueceuSenha/esqueceuSenha.jsx";
import ResetSenha from "../pages/resetSenha/resetSenha.jsx";
import { Agenda } from "../pages/agenda/agenda.jsx";
import Especialidades from "../pages/especialidades/especialidades.jsx";
import Servicos from "../pages/servicos/servicos.jsx";
import PerfilClinica from "../pages/perfil/clinica/perfilClinica.jsx";
import Consulta from "../pages/consulta/consulta.jsx";
import Historico from "../pages/historico/historico.jsx";
import PerfilUsuario from "../pages/perfil/usuario/perfilUsuario.jsx";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/appointments/:id",
    element: <AppointmentDetails />,
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
    path: "/recuperar-senha",
    element: <EsqueceuSenha />,
  },
  {
    path: "/reset-senha",
    element: <ResetSenha />,
  },
  {
    path: "/especialidades",
    element: <Especialidades />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/perfil-clinica",
    element: <PerfilClinica />,
  },

  {
    path: "/agenda",
    element: <Agenda />,
  },

  {
    path: "/consulta",
    element: <Consulta />,
  },
  {
    path: "/historico",
    element: <Historico />,
  },
  {
    path: "/perfil-usuario",
    element: <PerfilUsuario />,
  },
]);
