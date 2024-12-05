import styled from "styled-components";

export const ServiceCardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Efeito de hover */
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ServiceCardImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 1rem;
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  flex-grow: 1;
  justify-content: space-between;
  margin-right: 1rem;
`;

export const ServiceCardtags = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap; /* Permite que as tags quebrem para a linha seguinte */
  
  span {
    background-color: #36a92e;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    font-size: 0.9rem;
  }
`;

export const ServiceCardTitle = styled.h3`
  font-size: 1.4rem;
  color: #2a4f6a;
  margin-bottom: 0.5rem;
`;

export const ServiceCardDescription = styled.p`
  font-size: 1rem;
  color: #5a5a5a;
  margin-bottom: 1rem;
  flex-grow: 1;
  font-family: "Poppins", sans-serif;
`;

export const ServiceCardButton = styled.button`
  background-color: #2a4f6a;
  color: white;
  padding: 0.6rem 1.2rem;
  margin: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #36a92e;
  }
`;

export const ServiceCardNeighborhoodLocaltion = styled.p`
  font-size: 1rem;
  color: #5a5a5a;
  margin-bottom: 1rem;
  flex-grow: 1;
  font-family: "Poppins", sans-serif;
`;
