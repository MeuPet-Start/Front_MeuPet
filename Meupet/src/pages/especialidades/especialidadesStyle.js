import styled from "styled-components";
import background from "../../assets/background_home.png";
import dog from "../../assets/cachorro.png";

export const Container = styled.div`
  overflow: hidden;
`;

export const SectionHero = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    padding-top: 2rem;
    flex-direction: column;
    height: auto;
    gap: 0.25rem;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 0 1rem;
  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1rem;
`;



export const HeroImage = styled.div`
  width: 22rem;
  height: 22rem;
  margin-top: 4rem;
  background-image: url(${dog});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  align-self: flex-end;
  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
    align-self: center;
  }
`;

export const SearchBarSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1158px;
  margin: 2rem auto;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2a4f6a;
  width:90%;
  border-radius: 10px;
  padding: 1rem;
  @media (max-width: 425px) {
    padding:  1rem 0.5rem;
  }
`;

export const SearchIconLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f4f4f5;
  svg {
    color: #6c757d;
  }
`;

export const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f4f4f5;
  border-radius: 10px;
  padding: 0.5rem;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  font-family: "Poppins", sans-serif;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #6c757d;
  background-color: transparent;
`;


export const CardContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
  max-width: 1158px;
  margin: 0 auto;
  justify-items: center; 
  align-items: start; 

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
   
`;