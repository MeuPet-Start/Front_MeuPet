import styled from "styled-components";
import "@fontsource/londrina-solid/400.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContainerHeader = styled.div`
  background-color: #fff;
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
  font-family: "Londrina Solid", cursive;
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
  .fc {
    /* General calendar container */
    max-width: 1156px;
    font-family: 'Poppins', sans-serif;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .fc {
      /* Increase font size for mobile */
      font-size: 1rem;
    }

    .fc-toolbar-title {
      font-size: 1.2rem !important;
    }

    .fc-daygrid-day-number {
      font-size: 1rem;
      padding: 8px;
    }

    /* Adjust day cell size */
    .fc-daygrid-day-frame {
      min-height: 80px;
    }

    /* Make buttons more touchable */
    .fc-button {
      padding: 8px 12px !important;
      font-size: 0.9rem !important;
    }
  }

  /* Small mobile devices */
  @media (max-width: 480px) {
    .fc-toolbar {
      flex-direction: column;
      gap: 10px;
    }

    .fc-toolbar-chunk {
      display: flex;
      justify-content: center;
    }

    .fc-daygrid-day-frame {
      min-height: 60px;
    }
  }
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
  max-width: 1156px;
  width: 100%;
  margin-bottom: 20px;
  transition: transform 0.2s ease;

  cursor: default;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin-bottom: 20px;
    }
  }
`;

export const AppointmentCardModal = styled.div`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1156px;
  width: 100%;
  margin-bottom: 20px;
  transition: transform 0.2s ease;

  cursor: default;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      margin-bottom: 20px;
    }
  }
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


export const AppointmentDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AppointmentDetailsInfoCard = styled.div`
  display: flex;
`;

export const AppointmentDetailsInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AppointmentDetailsInfoModal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const AppointmentCardType = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;
export const AppointmentCardTypeModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

export const AppointmentCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AppointmentCardInfoContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 1rem;
`;

export const AppointmentType = styled.span`
  font-weight: 600;
  background-color: #36a92e;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 20px;
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

export const ConfirmButton = styled.button`
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

  max-height: 40rem; // Limit height
  overflow-y: auto; // Enable scroll
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2A4F6A;
    border-radius: 4px;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #2A4F6A #f1f1f1;

  h2 {
    position: sticky;
    top: 0;
    background: white;
    padding: 2rem 0;
    margin: 0;
    z-index: 1;
  }

  

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

export const ModalTitle = styled.div`
  background-color: white;
  width: 100%;
`;

export const ModalCloseButton = styled.button`
  font-family: "poppins";
  background-color: #2a4f6a;
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
