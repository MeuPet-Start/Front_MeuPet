import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const useUserType = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        setUserType(decodedToken.roles[0]); 
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    }
  }, []);

  return userType;
};

