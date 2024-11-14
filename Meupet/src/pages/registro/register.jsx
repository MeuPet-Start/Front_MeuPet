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
import axios from '../../axios/axiosConfig';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [cpfCnpj, setCpfCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [name, setName] = useState('');
  // const [socialName, setSocialName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');





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

  // const handlePhoneChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, ''); 
  //   const formatted = value
  //   .replace(/^(\d{2})(\d)/, '($1) $2') // Adiciona o DDD entre parênteses
  //   .replace(/(\(\d{2}\)\s\d{2})(\d)/, '$1 $2') // Adiciona o espaço após o segundo código
  //   .replace(/(\d{4,5})-?(\d{4})/g, '$1-$2'); // Adiciona o hífen no lugar correto
  //   setPhone(formatted);
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Validar os campos antes de enviar
    // if (password !== confirmPassword) {
    //   alert('As senhas não coincidem.');
    //   return;
    // }

    const payload = {
      //cpfCnpj,
      email,
      phoneNumber,
      name,
      //socialName,
      //birthDate,
      password,
    };

    try {
      const response = await axios.post('/user', payload);
      alert('Cadastro realizado com sucesso, de uma olhada no seu email!');
      console.log("teste")
      //navigate('/login');  Redireciona para a página de login
    } catch (error) {
      console.error('Erro ao registrar:', error.response?.data || error.message);
      alert('Erro ao registrar. Tente novamente.');
    }
  };


  return (
    <Background>
      <RegisterContainer>
        <RegisterCard onSubmit={handleRegister}>
          <Logo src={logoImage} alt="Logo Meu PET" />
          <Title>Cadastre-se</Title>
          {/* <Input
            type="text"
            placeholder="CPF ou CNPJ*"
            value={cpfCnpj}
            onChange={handleCpfCnpjChange}
            maxLength="18"
          /> */}
          <Input placeholder="Nome Completo*" value={name} onChange={(e) => setName(e.target.value)}/>
          {/* <Input placeholder="Nome social*" /> */}
          {/* <Input type="date" placeholder="Data de Nascimento*" /> */}
          <Input
            type="email"
            placeholder="E-mail*"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            type="text"
            placeholder="Telefone*"
            value={phoneNumber}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="18" 
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
          {/* <InputContainer>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirme a senha*"
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </InputContainer> */}
          <LinkText onClick={() => navigate('/login')}>Já tem uma conta? Login</LinkText>
          <Button secondary onClick={() => navigate('/')}>Voltar</Button>
          <Button type="submit">Cadastrar-se</Button>
        </RegisterCard>
      </RegisterContainer>
    </Background>
  );
};

export default Register;
