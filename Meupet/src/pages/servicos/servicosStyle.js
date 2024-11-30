import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2a4f6a;

`;
export const ContainerHeader = styled.div`
    background-color: #fff;
`;

export const ServicesSection = styled.section`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ServicesInfo = styled.div`
  max-width: 1158px;
`;
export const ServicesTitle = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: #fff;

  @media (max-width: 425px) {
    font-size: 3rem;
  } 
`;

export const ServicesDescription = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin: 1rem 0;
  font-weight: 300;

  @media (max-width: 425px) {
    font-size: 1.5rem;
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


export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonService = styled.button`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  color: #2a4f6a;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin: 2rem auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #36a92e;
    color: #fff;
  }
  
  @media (max-width: 425px) {
    width: 80%;
  }
`;
