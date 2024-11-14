import styled from "styled-components";
import background from '../../assets/background_home.png'; 
import dog from '../../assets/dog.png';

export const Container = styled.div`
  text-align: center;
   overflow: hidden
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
  @media (max-width: 900px) {
  flex-direction: column;
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
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  background-color: #00316a;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #002554;
  }
`;


export const DogImage = styled.div`
  width: 22rem;
  height: 22rem;
  margin-top: 4rem;
  background-image: url(${dog});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  bottom: 0;
`;

/* Estilo da seção de serviços */
export const ServicesSection = styled.section`
  padding: 4rem 0;
  text-align: center;

  & > div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 4rem;
  color: #00316a;
  margin-bottom: 2rem;
`;

export const ServiceCard = styled.div`
  width: 20rem;
  background-color: #00316a;
  border-radius: 10px;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const ServiceName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const ServiceDescription = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

/* Estilo da seção de agendamentos */

export const AppointmentsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #00316a;
  color: white;
  text-align: center;
`;

export const AppointmentsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-family: 'Londrina Solid', sans-serif;
`;

export const AppointmentCard = styled.div`
  display: flex;
  background-color: white;
  color: #00316a;
  border-radius: 10px;
  margin: 1rem auto;
  max-width: 800px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AppointmentImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

export const AppointmentContent = styled.div`
  padding: 1rem;
  flex: 1;
  text-align: left;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const AppointmentInfo = styled.div`
  font-size: 1rem;

  p {
    margin: 0.2rem 0;
  }
`;

export const MoreButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  color: #00316a;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;
