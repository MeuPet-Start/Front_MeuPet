import React from "react";
import {
  CardContainer,
  CardIcon,
  CardTitle,
  CardDescription,
  CardFooter,
  CardButton,
  CardInfo
} from "./cardStyle";

const Card = ({ icon, title, description, buttonLabel, onClick }) => {
  return (
    <CardContainer>
      <CardInfo>
        <CardIcon src={icon} alt={`${title} icon`} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
      <CardFooter>
        <CardButton onClick={onClick}>{buttonLabel}</CardButton>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
