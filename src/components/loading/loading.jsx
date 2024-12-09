import React from "react";
import { 
    Overlay, 
    Background,
    LogoContainer,
    LogoImage,
    LogoText
} from "./loadingStyles";
import logoImage from "../../assets/logo.png"; 

const Loading = () => {
  return (
    <Overlay>
      <Background />
      <LogoContainer>
        <LogoImage src={logoImage} alt="Logo Meu PET" />
        <LogoText>Meu PET</LogoText>
      </LogoContainer>
    </Overlay>
  );
};

export default Loading;
