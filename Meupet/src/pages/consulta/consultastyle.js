import styled from "styled-components";

export const HeaderSection = styled.div`
  max-width: 1156px;
  background-color: #00507b;
  color: white;
  border-radius: 20px;
  padding: 1.25rem;
  margin: 1.5rem auto;
  display: flex;

  @media (max-width: 1024px) {
    margin: 1rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Headertitle = styled.h1`
  display: flex;
  font-size: 4rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-family: "Poppins";
  font-size: 1.5rem;
  padding: 0.25rem 0.75rem;
  background-color: #36a92e;
  border-radius: 20px;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeaderImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 15rem;
    height: 15rem;
  }

  @media (max-width: 425px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const Headerinfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;

export const HeaderText = styled.h2`
  display: flex;
  font-family: "Poppins";
  font-size: 1.25rem;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  max-width: 1156px;
  margin: 1.25rem auto;
  padding: 1.25rem;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    margin: 1rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 10px;
  background-color: #36a92e;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FormSubTitle = styled.h2`
  font-family: "Poppins";
  font-size: 1.25rem;
  color: #2a4f6a;
  margin-bottom: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const InputGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    align-items: flex-start;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const FormGroupInfoInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FormGroupInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormGroupDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FormGroupDetalhesInput = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FormInputTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  color: #2a4f6a;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Label = styled.label`
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 600;
  color: #454545;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
`;

export const Input = styled.input`
  display: flex;
  font-family: "Poppins";
  font-weight: 100;
  padding: 0.6875rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #ccc;
  font-size: 1rem;
  color: #000;
  outline: none;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  &:focus {
    border-color: #2a4f6a;
    box-shadow: 0 0 0.125rem rgba(42, 79, 106, 0.5);
  }
`;

export const Button = styled.button`
  font-family: "Poppins";
  font-weight: 500;
  background-color: #2a4f6a;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin-top: 0.625rem;
  margin: 1rem auto 0 auto;
  width: 100%;

  &:hover {
    background-color: #4caf50;
  }
`;

export const SlideItem = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  display: block;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
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
    color: #2a4f6a;
  }
  p{
    font-size: 1rem;
    color: #2a4f6a;
    font-family: "Poppins";
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

