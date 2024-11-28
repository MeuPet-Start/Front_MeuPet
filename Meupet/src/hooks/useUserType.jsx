import { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

export const useUserType = () => {
  const [userType, setUserType] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        setUserType(decodedToken.roles[0]); 
        setUserEmail(decodedToken.sub);
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
      }
    }
  }, []);

  return userType, userEmail;
};

