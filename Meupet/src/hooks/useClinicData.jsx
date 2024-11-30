// src/hooks/useClinicData.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useClinicData = (clinicEmail) => {
  const [clinicData, setClinicData] = useState({
    clinicName: "",
    clinicLogo: "",
    error: null,
  });

  useEffect(() => {
    const fetchClinicData = async () => {
      if (!clinicEmail) return;

      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/clinic",
          {
            params: { email: clinicEmail },
          }
        );

        setClinicData({
          clinicName: response.data.name || "Clínica",
          clinicLogo: response.data.logo || "",
          error: null,
        });
      } catch (error) {
        setClinicData({
          ...clinicData,
          error: "Erro ao carregar os dados da clínica",
        });
        console.error("Erro ao buscar dados da clínica:", error);
      }
    };

    fetchClinicData();
  }, [clinicEmail]);

  return clinicData;
};
