import styled from "styled-components";
import backgroundImage from "../../assets/background_login.png";

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

export const RegisterCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  border: 2px solid #2a4f6a;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 1rem;
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  span {
    position: absolute;
    top: 40%;
    right: 1rem;
    cursor: pointer;
    color: #ccc;
    font-size: 1.2rem;

    &:hover {
      color: #00316a;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &[type="date"] {
    padding: 0.75rem;
    color: ${(props) => (props.value ? "#000" : "#ccc")}; /* Cinza claro quando vazio */
  }
    
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6; /* Ajusta a opacidade do ícone do calendário */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.secondary ? "white" : "#2a4f6a")};
  color: ${(props) => (props.secondary ? "#2a4f6a" : "white")};
  border: ${(props) => (props.secondary ? "1px solid #2a4f6a" : "none")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#f0f0f0" : "#002554")};
  }
`;

export const ButtonEscolhaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ButtonEscolha = styled.button`
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.secondary ? "white" : "#2a4f6a")};
  color: ${(props) => (props.secondary ? "#2a4f6a" : "white")};
  border: ${(props) => (props.secondary ? "1px solid #2a4f6a" : "none")};
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#f0f0f0" : "#002554")};
  }
`;

export const ButtonVoltar = styled.button`
  width: 50%;
  margin: 2rem auto 0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.secondary ? "white" : "#2a4f6a")};
  color: ${(props) => (props.secondary ? "#2a4f6a" : "white")};
  border: ${(props) => (props.secondary ? "1px solid #2a4f6a" : "none")};
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#f0f0f0" : "#002554")};
  }

`

export const LinkText = styled.a`
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: #2a4f6a;
  text-decoration: none;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: #2a4f6a; /* Azul escuro */
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelLink = styled.a`
  font-size: 0.8rem;
  color: #2a4f6a;
  text-decoration: none;
  margin-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
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

  h2{
    font-size: 2rem;
    color: #388e3c;
    margin-bottom: 1rem;
  }
  p{
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
  background-color: #2A4F6A;
  color: white;
  border: none;
  border-radius: 0.3125rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  min-width: 7.5rem;
  cursor: pointer;
  

  &:hover {
    background-color: #388e3c;
  }
`;