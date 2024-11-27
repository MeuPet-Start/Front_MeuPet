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
`;

export const ServicesDescription = styled.p`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin: 1rem 0;
  font-weight: 300;
`;

export const InputFilter = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: #36a92e;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ButtonService = styled.button`
  background-color: #fff;
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
`;
