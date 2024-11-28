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

export const ResetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

export const ResetPasswordCard = styled.div`
 background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  border: 2px solid #2a4f6a;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;
export const LogoImage = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 0.25rem;
`;

export const LogoText = styled.h1`
  color: #2a4f6a;
  font-size: 2rem;
`;

export const Title = styled.h2`
 font-size: 2rem;
  font-weight: 500;
  color: #000;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

export const Ptext = styled.p`
    font-size: 0.75rem;
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
`;


export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;

  span {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-30%);
    cursor: pointer;
    font-size: 1.2rem;
    color: #ccc;

    &:hover {
      color: #00316a;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 0.75rem;
  border: 1px solid #2a4f6a;
  border-radius: 5px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #00316a;
  }
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

export const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  color: #2a4f6a;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
`;

