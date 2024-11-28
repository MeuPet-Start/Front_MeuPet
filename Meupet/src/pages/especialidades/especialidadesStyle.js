import styled from "styled-components";
import heroBackground from "../../assets/background_home.png";
import dog from "../../assets/cachorro.png";
import '@fontsource/poppins';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/600.css';

export const Container = styled.div`
  text-align: center;
  overflow: hidden;
`;

export const SectionHero = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 2rem;
  background: #333 url(${heroBackground}) no-repeat center/cover;
  color: white;
  padding: 0 20px;

  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 600px) {
    height: 35vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
`;

export const HeroTitle = styled.h1`
  font-family: "Londrina Solid", cursive;
  font-weight: 400;
  font-size: 4.2rem;
  color: white;
  max-width: 60%;
  line-height: 1.0;
  margin: 0;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    max-width: 90%; 
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  width: 22rem;
  height: 22rem;
  margin-left: 7rem;
  margin-top: 1.1rem;
  background: url(${dog}) no-repeat center/contain;
  z-index: 1;
  align-self: flex-end;

  @media (max-width: 900px) {
    width: 18rem;
    height: 18rem;
    margin-top: 4rem;
  }

  @media (max-width: 600px) {
    width: 15rem;
    height: 15rem;
    margin-left: 0;
  }
`;

export const SearchBarSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 30px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2a4f6a;
  width: 800px;
  height: 71px;
  border-radius: 8px;
  padding: 0 10px;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchIconLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f4f4f5;
  border-radius: 50%;
  margin-right: 10px;
  z-index: 1;

  svg {
    width: 18px;
    height: auto;
    color: #6c757d;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f4f4f5;
  height: 48px;
  border-radius: 10px;
  padding: 0 10px;
`;

export const SearchInput = styled.input`
  font-family: "Poppins", sans-serif;
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #6c757d;
  padding: 0 10px;
  background-color: transparent;
`;

export const SearchIconRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 45px;
  background-color: #f4f4f5;
  border-radius: 15%;
  margin-left: 15px;
  margin-right: 10px;
  z-index: 1;
  cursor: pointer; 
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    background-color: #d1e7f1; 
    transform: scale(1.1); 
  }

  &:active {
    transform: scale(0.95); 
    background-color: #a8c9e6;
    animation: clickAnimation 0.1s ease; 
  }

  svg {
    width: 18px;
    height: auto;
    color: #6c757d;
    transition: color 0.3s ease; 
  }

  &:hover svg {
    color: #0056b3; 
  }

  &:active svg {
    color: #003366;
  }

  @keyframes clickAnimation {
    0% {
      transform: scale(1.05) rotate(0deg);
    }
    50% {
      transform: scale(0.95) rotate(-5deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;


export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
  max-width: 1158px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;