import styled from 'styled-components';
import backgroundImage from '../../assets/background_login.png'; 

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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 0.75rem;
`;

export const LogoText = styled.h1`
  color: #00316a;
  font-size: 2rem;
`;

export const LoginCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
  border: 3px solid #00316a;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #00316a;
  margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  span {
    position: absolute;
    top: 40%;
    right: 1rem;
    transform: translateY(-50%);
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
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.secondary ? 'white' : '#00316a')};
  color: ${(props) => (props.secondary ? '#00316a' : 'white')};
  border: ${(props) => (props.secondary ? '1px solid #00316a' : 'none')};

  &:hover {
    background-color: ${(props) => (props.secondary ? '#f0f0f0' : '#002554')};
  }
`;

export const Divider = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const LinkText = styled.a`
  font-size: 0.9rem;
  color: #00316a;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
