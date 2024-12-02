// src/hooks/useUserData.js
import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useUserData = (userEmail) => {
  const [userData, setUserData] = useState({
    userPoints: 0,
    userName: "",
    userId: "",
    error: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userEmail) return;

      try {
        const response = await api.get("/authenticable", {
          params: { email: userEmail },
        });

        setUserData({
          userPoints: response.data.moedaCapiba || 0,  
          userName: response.data.name || "Usuário",
          userId: response.data.id,
          error: null,
        });
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
