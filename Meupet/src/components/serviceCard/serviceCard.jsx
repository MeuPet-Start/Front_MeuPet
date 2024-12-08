import React from "react";
import {
  ServiceCardContainer,
  ServiceCardtags,
  ServiceCardImage,
  ServiceCardTitle,
  ServiceCardstreetLocation,
  ServiceCardButton,
  ServiceInfo,
} from "./serviceCardStyle";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const ServiceCard = ({
  id,
  img,
  tags,
  clinicName,
  address,
  buttonLabel,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate("/consulta", { state: { id } });
  };

  return (
    <ServiceCardContainer>
      <ServiceCardImage src={img} alt={`${clinicName} Imagem`} />
      <ServiceInfo>
        <ServiceCardTitle>{clinicName}</ServiceCardTitle>
        <ServiceCardtags>
          {tags.map((tag, index) => (
            <span key={index}>{tag.name}</span>
          ))}
        </ServiceCardtags>
        <ServiceCardstreetLocation>
          <FaMapMarkerAlt style={{ marginRight: "8px", color: "#2a4f6a" }} />
          {address}
        </ServiceCardstreetLocation>
      </ServiceInfo>
      <ServiceCardButton onClick={() => handleCardClick(id)}>
        {buttonLabel}
      </ServiceCardButton>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
