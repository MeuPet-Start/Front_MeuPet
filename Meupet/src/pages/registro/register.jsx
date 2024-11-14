import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  RegisterContainer, 
  RegisterCard, 
  Logo, 
  Title, 
  InputContainer, 
  Input, 
  Button, 
  LinkText, 
  Background 
} from './registerStyle';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logoImage from '../../assets/logo.png';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCpfCnpjChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');

    const formatted =
      value.length <= 11
        ? value
            .replace(/^(\d{3})(\d)/, '$1.$2') 
            .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3') 
            .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4') 
        : value
            .replace(/^(\d{2})(\d)/, '$1.$2') 
            .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') 
            .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4') 
            .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5'); 

    setCpfCnpj(formatted);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    const formatted = value
      .replace(/^(\d{2})(\d)/, '($1) $2') 
      .replace(/(\d{5})(\d)/, '$1-$2'); 
    setPhone(formatted);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <Background>
      <RegisterContainer>
        <RegisterCard>
          <Logo src={logoImage} alt="Logo Meu PET" />
          <Title>Cadastre-se</Title>
          <Input
            type="text"
            placeholder="CPF ou CNPJ*"
            value={cpfCnpj}
            onChange={handleCpfCnpjChange}
            maxLength="18"
          />
          <Input placeholder="Nome Completo*" />
          <Input placeholder="Nome social*" />
          <Input type="date" placeholder="Data de Nascimento*" />
          <Input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="text"
            placeholder="Telefone*"
            value={phone}
            onChange={handlePhoneChange}
            maxLength="15" 
          />
          <InputContainer>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha*"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </InputContainer>
          <InputContainer>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirme a senha*"
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </InputContainer>
          <LinkText onClick={() => navigate('/login')}>Já tem uma conta? Login</LinkText>
          <Button secondary onClick={() => navigate('/')}>Voltar</Button>
          <Button>Cadastrar-se</Button>
        </RegisterCard>
      </RegisterContainer>
    </Background>
  );
};

export default Register;
