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

        const currentTime = Date.now() / 1000; 
        if (decodedToken.exp < currentTime) {
          
          localStorage.removeItem("jwtToken");
          
          setUserType(null);  
          setUserEmail(null); 
        } else {
          setUserType(decodedToken.roles[0]); 
          setUserEmail(decodedToken.sub); 
        }
      } catch (error) {
        console.error("Erro ao decodificar o token", error);
        
        localStorage.removeItem("jwtToken");
      }
    } else {
      console.log("Nenhum token encontrado.");
    }
  }, []);

  return {userType, userEmail};
};

