import styled from "styled-components";
import background from "../../assets/background_home.png";
import dog from "../../assets/dog.png";
import backgroundImage from "../../assets/background_login.png";
import adotapet from "../../assets/adota_pet.png";
import capiba from "../../assets/capiba.png";

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
  align-self: flex-end;
  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
    align-self: center;
  }
`;

/* Estilo da seção de serviços */
export const ServicesSection = styled.section`
  padding: 2rem 2rem;
  max-width: 1158px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2rem 2rem;
    height: auto;
    gap: 0.25rem;
    text-align: center;
  }

  @media (max-width: 445px) {
    padding: 1rem 1rem;
  }
`;

export const ServicesTitle = styled.h2`
  font-size: 4rem;
  color: #2a4f6a;
  margin-bottom: 2rem;
  font-weight: 550;
  @media (max-width: 445px) {
    font-size: 3rem;
  }
`;

export const ButtonService = styled.button`
  margin-top: 3rem;
  background-color: #2a4f6a;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 3rem;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #1f3e55;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const AdotaPetSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

export const AdotaPetContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1158px;
  justify-content: space-between;
  padding: 2rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AdotaPetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AdotaPetTitle = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: #2a4f6a;
  letter-spacing: 0.15rem;

  @media (max-width: 445px) {
    font-size: 3rem;
    letter-spacing: 0rem;
  }
`;

export const AdotaPetDescription = styled.p`
  font-size: 1.5rem;
  color: #5a5a5a;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  font-weight: thin;
`;

export const AdotaPetButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #2a4f6a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  text-align: center;
  &:hover {
    background-color: #36a92e;
  }
`;

export const AdotaPetImage = styled.div`
  width: 22em;
  height: 22rem;
  background-image: url(${adotapet});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const CapibaSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

export const CapibaContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1158px;
  justify-content: space-between;
  padding: 2rem 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const CapibaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CapibaTitle = styled.h2`
  font-size: 4rem;
  font-weight: 500;
  color: #2a4f6a;
  letter-spacing: 0.15rem;

   @media (max-width: 445px) {
    font-size: 3rem;
    letter-spacing: 0rem;
  }
`;

export const CapibaDescription = styled.p`
  font-size: 1.5rem;
  color: #5a5a5a;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  font-weight: thin;
`;

export const CapibaButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #2a4f6a;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  text-align: center;
  &:hover {
    background-color: #36a92e;
  }
`;

export const CapibaImage = styled.div`
 width: 22em;
  height: 22rem;
  background-image: url(${capiba});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: center;
    width: 18rem;
    height: 18rem;
  }
`;
