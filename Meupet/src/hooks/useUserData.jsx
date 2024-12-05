import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import { useUserType } from "./useUserType";

const UserDataContext = createContext();

export function UserDataContextProvider({ children }) {
  const { userType, userEmail } = useUserType();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de login
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    socialName: "",
    email: "",
    phoneNumber: "",
    document: "",
    documentType: "",
    dateOfBirth: "",
    moedaCapiba: 0,
    streetAndNumber: null,
    neighborhood: null,
    city: null,
    cep: null,
    error: null,
    userType: "",
  });

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  const fetchUserData = async () => {
    if (!userEmail) return;

    try {
      const response = await api.get("/authenticable", {
        params: { email: userEmail },
      });

      const data = response.data;

      const servicesAndValues = data.services || [];
      const handleClinicRevert = (servicesAndValues) => {
        const servicosPrestados = servicesAndValues.map((item) => item.name);
        const servicosPrestadosValores = servicesAndValues.reduce((acc, item) => {
          acc[item.name] = item.price;
          return acc;
        }, {});
      
        return {
          servicosPrestados,
          servicosPrestadosValores,
        };
      };

      const { servicosPrestados, servicosPrestadosValores } = handleClinicRevert(servicesAndValues);

      if (userType === "user") {
        setUserData({
          id: data.id || "",
          name: data.name || "",
          socialName: data.socialName || "Usuário",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          document: data.document || "",
          documentType: data.documentType || "",
          dateOfBirth: data.dateOfBirth || "",
          moedaCapiba: data.moedaCapiba || 0,
          error: null,
          userType,
        });
      }

      if (userType === "clinic") {
        setUserData({
          id: data.id || "",
          name: data.name || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          document: data.document || "",
          documentType: data.documentType || "",
          streetAndNumber: data.streetAndNumber || "",
          neighborhood: data.neighborhood || "",
          servicosPrestados: servicosPrestados,
          servicosPrestadosValores: servicosPrestadosValores,
          openingHour: "",
          closingHour: "",
          userType,
        });
      }
    } catch (error) {
      setUserData({
        ...userData,
        error: "Erro ao carregar os dados do usuário",
      });
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, "1000");
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]);

  return (
    <UserDataContext.Provider
      value={{
        userData,
        fetchUserData,
        loading,
        setLoading,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}