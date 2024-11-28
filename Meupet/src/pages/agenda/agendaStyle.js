import styled from "styled-components";
import '@fontsource/londrina-solid/400.css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SectionHero = styled.section`
  background-color: #2e4d65;
  color: white;
  padding: 40px 20px;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-family: 'Londrina Solid', cursive;
  font-weight: 400;
  font-size: 2.8rem;
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const CalendarSection = styled.section`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const Calendar = styled.div`
  font-family: "Poppins";  
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  text-align: center;
`;

export const AppointmentSubtitle = styled.p`
  padding: 20px;  
  margin: 20px;
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 10px;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const AppointmentInfoContainer = styled.section`
  background-color: #2e4d65;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppointmentCard = styled.div` 
  font-family: "Poppins";  
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  width: 100%;
  margin-bottom: 20px;
  transition: transform 0.2s ease; 

  cursor: default; 

  &:hover {
    transform: scale(1.05); 
  }
`;

export const AppointmentDetails = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const AppointmentType = styled.span` 
  background-color: #4caf50;
  color: white;
  padding: 5px 6px;
  border-radius: 5px;
  font-weight: 600;
  display: inline-block;
`;

export const CancelButton = styled.button`
  font-family: "Poppins";
  font-weight: 600;
  background-color: #2A4F6A;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  min-width: 120px; 
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ConfirmButton = styled.button`
  font-family: "Poppins";
  font-weight: 600;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  min-width: 120px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  gap: 15px; 
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
  font-family: "Poppins";  
  background: white;
  padding: 20px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ModalCloseButton = styled.button`  
  font-family: "poppins";  
  background-color: #2A4F6A;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

export const CancelledStatus = styled.p`
  margin-top: 5px;
  color: #b90000; 
  font-weight: bold;
  background-color: #ffe6e6; 
  padding: 5px 10px; 
  border-radius: 5px; 
  display: inline-block; 
`;

export const ConfirmadStatus = styled.p`
  margin-top: 5px;
  color: #4caf50; 
  font-weight: bold;
  background-color: #e6ffe6; 
  padding: 5px 10px; 
  border-radius: 5px; 
  display: inline-block; 
`;

export const PointerCursor = styled.div`
  cursor: pointer; 
  transition: transform 0.2s ease; 

  &:hover {
    transform: scale(1.05); 
  }
`;
