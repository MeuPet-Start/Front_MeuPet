import { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
// import axios from "axios"; 
import { useUserType } from "./useUserType";


// export const useUserData = (userEmail) => {
//   const [userData, setUserData] = useState({
//     id: "",
//     name: "",
//     socialName: "",
//     email: "",
//     phoneNumber: "",
//     document: "",
//     documentType: "",
//     dateOfBirth: "",
//     moedaCapiba: 0,
//     street: null,
//     neighborhood: null,
//     city: null,
//     cep: null,
//     error: null,
//   });

//   const { userType } = useUserType();
//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!userEmail) return;

//       try {
//         const response = await api.get("/authenticable", {
//           params: { email: userEmail },
//         });

//         const data = response.data;

//         console.log(data)

        
//         if (userType === "user" || userType === "clinic") {
//           setUserData({
//             id: data.id || "",
//             name: data.name || "",
//             socialName: data.socialName || "Usuário",
//             email: data.email || "",
//             phoneNumber: data.phoneNumber || "",
//             document: data.document || "",
//             documentType: data.documentType || "",
//             dateOfBirth: data.dateOfBirth || "",
//             moedaCapiba: data.moedaCapiba || 0,
//             street: data.street || null,
//             neighborhood: data.neighborhood || null,
//             city: data.city || null,
//             error: null,
//           });
//         } else {
          
//           setUserData({
//             ...userData,
//             error: "Tipo de documento inválido ou não encontrado",
//           });
//         }
//       } catch (error) {
//         setUserData({
//           ...userData,
//           error: "Erro ao carregar os dados do usuário",
//         });
//         console.error(error);
//       }
//     };

//     fetchUserData();
//   }, [userEmail]);

//   return userData;
// };


const UserDataContext = createContext();

export function UserDataContextProvider({children}) {
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
    street: null,
    neighborhood: null,
    city: null,
    cep: null,
    error: null,
    userType: ""
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
        params: { email: userEmail }
      });

      const data = response.data;


      if(userType === "user" ) {
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
          street: null,
          neighborhood: null,
          city: null,
          error: null,
          userType
        });
      }

      if(userType === "clinic") {
        setUserData({
          id: data.id || "",
          name: data.name || "",
          socialName: null,
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          document: data.document || "",
          documentType: data.documentType || "",
          dateOfBirth: data.dateOfBirth || "",
          moedaCapiba: data.moedaCapiba || 0,
          street: data.street || null,
          neighborhood: data.neighborhood || null,
          city: data.city ||null,
          error: null,
          userType
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
    if (userEmail) { // Só executa se ambos estiverem disponíveis
      fetchUserData();
    }
  }, [userEmail]);


  return (
      <UserDataContext.Provider value={{ userData, fetchUserData, loading, setLoading, login, logout, isAuthenticated }}>
          {children}
      </UserDataContext.Provider>
  )
}

export function useUserData() {
  return useContext(UserDataContext);
}