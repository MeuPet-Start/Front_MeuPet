import styled, { keyframes } from "styled-components";
import background from "../../assets/background_login.png";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Overlay que cobre toda a tela
export const Overlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
`;


export const Background = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover; 
  background-position: center;
  z-index: -1; 
`;


export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; 
`;

// Logo
export const LogoImage = styled.img`
  width: 150px; 
  margin-bottom: 1rem;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;

// Texto da logo
export const LogoText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #2a4f6a;
  margin-top: 10px;
  animation: ${fadeInOut} 2s ease-in-out infinite;
`;
