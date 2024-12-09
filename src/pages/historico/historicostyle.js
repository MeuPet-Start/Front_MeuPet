import styled from "styled-components";
import backgroundImage from "../../assets/background_login.png";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const Background = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.25rem;

  .background_White {
    background-color: #ffffff;
    width: 80%;
    max-width: 75rem;
    border-radius: 16px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 2.5rem 1.25rem;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;

  h1 {
    font-size: 3.75rem;
    color: #2a4f6a;
    font-weight: bold;
  }

  @media (max-width: 48em) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
export const ContainerHeader = styled.div`
    background-color: #fff;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.25rem auto;
  max-width: 56.25rem;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  flex-wrap: nowrap;
  position: relative;

  @media (max-width: 48em) {
    flex-direction: column;
    padding: 1.25rem 0.625rem;
    margin: 0.9375rem auto;
  }
`;

export const ServiceCardtags = styled.div`
  display: flex;
  gap: 0.25rem;

  span {
    background-color: #36a92e;
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 15px;
    font-size: 0.9rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.25rem;
  flex: 1;

  h2 {
    font-size: 1.5625rem;
    margin-bottom: 0.625rem;
    color: #2a4f6a;
  }

  .detalhes {
    display: flex;
    align-items: center;
    color: #555;
    gap: 1rem;
    svg {
      margin-right: 0.5rem;
    }
    p {
      display: flex;
      align-items: center;
    }
  }

  .container_categoria {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 0.5rem;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 1.25rem;
    }

    button {
      width: 100%;
      margin-top: 0.625rem;
    }

    .detalhes {
      flex-direction: column;
      gap: 0.625rem;
    }
  }
`;

export const ServiceCardType = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const StatusBadge = styled.span`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: ${({ status }) => {
    switch (status?.toUpperCase()) {
      case 'PENDENTE':
        return '#FFA500';
      case 'CONFIRMADO':
        return '#4CAF50';
      case 'CANCELADO':
        return '#DC3545';
      default:
        return '#6c757d';
    }
  }};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MapButton = styled.button`
  background-color: #2a4f6a;
  font-weight: 600;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1rem;
  min-width: 7.5rem;

  transition: background-color 0.3s;

  &:hover {
    background-color: #1c3d53;
  }
`;

export const CancelButton = styled.button`
  background-color: #dc3545;
  font-weight: 600;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 1rem;
  min-width: 7.5rem;
  cursor: pointer;
  font-family: "Poppins";
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const ButtonShowMore = styled.button`
  background-color: #2A4F6A;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  color: #ffffff;
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

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.25rem;
  gap: 0.9375rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 0.9375rem;
  max-width: 31.25rem;
  width: 90%;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  h2 {
    font-size: 2rem;
    color: #388e3c;
    margin-bottom: 1rem;
  }
  p {
    color: #2a4f6a;
    font-family: "Poppins";
    margin-bottom: 1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-1.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ConfirmButton = styled.button`
  font-family: "Poppins";
  font-weight: 600;
  background-color: #2a4f6a;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  min-width: 7.5rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;
