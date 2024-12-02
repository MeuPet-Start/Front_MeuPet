import { useState, useEffect } from "react";
import { api } from "../services/api";
import axios from "axios"; 
import { useUserType } from "./useUserType";


export const useUserData = (userEmail) => {
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
  });

  const { userType } = useUserType();
  useEffect(() => {
    const fetchUserData = async () => {
      if (!userEmail) return;

      try {
        const response = await api.get("/authenticable", {
          params: { email: userEmail },
        });

        const data = response.data;

        
        if (userType === "user" || userType === "clinic") {
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
            street: data.street || null,
            neighborhood: data.neighborhood || null,
            city: data.city || null,
            error: null,
          });
        } else {
          
          setUserData({
            ...userData,
            error: "Tipo de documento inválido ou não encontrado",
          });
        }
      } catch (error) {
        setUserData({
          ...userData,
          error: "Erro ao carregar os dados do usuário",
        });
        console.error(error);
      }
    };

    fetchUserData();
  }, [userEmail]);

  return userData;
};
