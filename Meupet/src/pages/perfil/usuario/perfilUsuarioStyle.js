import styled from "styled-components";
import backgroundImage from "../../../assets/background_login.png";

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerHeader = styled.div`
    background-color: #fff;
`;

export const ProfileSection = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 0.625rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  width: 60%; 
  max-width: 72.375rem;
  padding:
`;

export const ProfileTitle = styled.h1`
  margin-top: 0.5rem;
  margin-left: 2rem;
  font-weight: 300;
  background-color: #4CAF50; 
  color: #ffffff; 
  padding: 0.3rem 0.7rem; 
  border-radius: 0.625rem;
  font-size: 1.8rem;
  text-align: center; 
  display: inline-block; 
  margin-bottom: 0.6rem;
`;

export const ProfileSubTitle = styled.h1`
  margin-left: 2rem;
  font-family: "Poppins";
  font-weight: 400;
  color: 1C2B38; 
  padding: 0.3rem 0.4rem; 
  border-radius: 0.625rem;
  font-size: 1rem;
  text-align: center; 

  margin-bottom: 1rem;
`;

export const ProfileForm = styled.form`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
    font-family: "poppins";
    font-size: 1.1rem;
    font-weight: 600;
    color: #454545;
    margin-bottom: 0.2rem;
  }
`;

export const Input = styled.input`
  && {
    font-family: "poppins";
    font-weight: 100;
    padding: 0.6875rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid #ccc;
    font-size: 1rem;
    color: #727171;
    outline: none;
    

    &:focus {
  border-color: #2A4F6A; 
  box-shadow: 0 0 0.125rem rgba(42, 79, 106, 0.5); 
}

  }
`;

export const Textarea = styled.textarea`
  font-family: "poppins";
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid #ccc;
  font-size: 1rem;
  color: #333;
  min-height: 9.375rem;
`;

export const Button = styled.button`
  font-family: "poppins";
  font-weight: 500;
  background-color: #2A4F6A; 
  color: white; 
  padding: 0.625rem 1.25rem; 
  border: none; 
  border-radius: 0.3125rem; 
  cursor: pointer; 
  font-size: 1rem;
  transition: background-color 0.3s; 
  max-width: 11.875rem;
  margin: 0 auto;

  &:hover {
    background-color: #45a049;
  }
`;


export const ProfileSidebar = styled.div`
  padding: rem;
`;

export const SidebarUsarnameTitle = styled.h2`
  font-family: "poppins";
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const SidebarItem = styled.div`
  margin-left: 3.75rem;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => (props.isSelected ? "#ffff" : "#2A4F6A")};
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  padding: 0.625rem;
  border-radius: 0.3125rem;
  background-color: ${(props) => (props.isSelected ? "#2A4F6A" : "transparent")};

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#2A4F6A" : "#f1f1f1")}
  }
`;

export const ProfileImageContainer = styled.div`
  margin-top: 1.875rem;
  text-align: center;
  margin-bottom: 1.0rem;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 1rem;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 0.25rem solid #fff;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
`;

export const ProfileImageChangeButton = styled.label`
  font-family: "Poppins";
  font-weight: 600;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.3125rem 0.9375rem;
  border-radius: 0.9375rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ProfileTabContent = styled.div`
  padding: 2rem;
`;

export const ProfileTabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.isActive ? "#007bff" : "#333")};
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "0.125rem solid #007bff" : "none")};
  margin-right: 1rem;

  &:hover {
    color: #0056b3;
  }
`;

export const ProfileTabContentWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const ProfileTabContentTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ProfileTabContentText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ProfileTabContentButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProfileTabContentButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.isCancel ? "#d9534f" : "#5bc0de")};
  
  &:hover {
    background-color: ${(props) => (props.isCancel ? "#c9302c" : "#31b0d5")};
  }
`;

export const ProfileTabContentButtonSave = styled(ProfileTabContentButton)`
  background-color: #5bc0de;

  &:hover {
    background-color: #31b0d5;
  }
`;

export const ProfileTabContentButtonCancel = styled(ProfileTabContentButton)`
  background-color: #d9534f;

  &:hover {
    background-color: #c9302c;
  }
`;


export const OperatingHoursInput = styled.input`
  && {
    font-family: "poppins";
    font-weight: 100;
    padding: 0.687rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid #ccc;
    font-size: 1rem;
    color: #727171;
    outline: none;

    &:focus {
      border-color: #2A4F6A; 
      box-shadow: 0 0 0.125rem rgba(42, 79, 106, 0.5);
    }
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
  font-family: "Poppins";  
  background: white;
  padding: 1.25rem;
  border-radius: 0.9375rem;
  max-width: 31.25rem;
  width: 90%;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;

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
export const CancelButton = styled.button`
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
    background-color: #d32f2f;
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

export const ErrorMessage = styled.div`
  font-family: "poppins";
  color: red;
  font-size: 0.9rem; 
  font-weight: bold; 
  margin-top: 0.25rem; 
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-top: 0.5rem;
  margin-bottom: 0rem;
`;

export const BalanceContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 0.rem;
  0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const BalanceText = styled.p`
  margin-left: 1.5rem;
  font-size: 1.2rem;
  color: #454545;
  margin: ;
`;

export const BalanceAmount = styled.span`
  margin-left: 1.5rem;
  font-family: "poppins";
  font-size: 1.5rem; 
  color: green; 
  font-weight: bold; 
  margin-bottom: -1rem;
`;

export const ProductsGrid = styled.div`
  margin-left: 2.5rem;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9.56rem, 3fr));
  gap: 1rem;
  margin-top: 1rem;
  width: 100%; 
  padding: 0; 
`;

export const ProductCard = styled.div`
  font-family: "poppins";
  color: #454545;
  border: 0.065rem solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const ProductDetails = styled.div`
  margin-top: 0.5rem;
`;

export const ProductTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

export const ProductPrice = styled.p`
  margin-top: 0.4rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: green;
`;

export const ProductUnits = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #999;
`;

export const RedeemButton = styled.button`
  font-family: "poppins";
  font-weight: 500;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #2A4F6A;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
  }
`;