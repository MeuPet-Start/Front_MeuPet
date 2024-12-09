import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  max-width: 300px;
  font-family: "poppins", sans-serif;
`;

export const CardInfo = styled.div`
  padding: 0 1.2rem;
  margin-bottom: 1.0rem;
`;

export const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: #2a4f6a;
  margin: 1rem 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #2a4f6a;
  margin-bottom: 1.5rem;
  height: 3rem
`;

export const CardFooter = styled.div`
  width: 100%;
  background-color: #2a4f6a;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  font-family: "poppins";
  font-weight: 600;

  &:hover {
    color: #2a4f6a;
    background-color: white;
    border: 1px solid #36a92e;
  }
`;
