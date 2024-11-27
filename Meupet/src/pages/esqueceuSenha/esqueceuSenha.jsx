import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Background,
  ForgotPasswordContainer,
  ForgotPasswordCard,
  LogoContainer,
  LogoImage,
  LogoText,
  Title,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  ErrorText,
  Label,
  Ptext,
} from "./esqueceuSenhaStyle";
import logoImage from "../../assets/logo.png";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Insira um e-mail válido.")
        .required("O e-mail é obrigatório."),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8080/api/v1/password-recovery/request", {
          email: values.email,
        });
        setIsSubmitted(true);
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Erro ao enviar e-mail. Tente novamente mais tarde.");
      }
    },
  });

  if (isSubmitted) {
    return (
      <Background>
        <ForgotPasswordContainer>
          <ForgotPasswordCard>
            <LogoContainer>
              <LogoImage src={logoImage} alt="Logo Meu PET" />
              <LogoText>Meu PET</LogoText>
            </LogoContainer>
            <Title>Confira seu e-mail</Title>
            <Ptext>Um link para redefinição de senha foi enviado para o seu e-mail.</Ptext>
            <ButtonContainer>
              <Button onClick={() => navigate("/login")}>Voltar para Login</Button>
            </ButtonContainer>
          </ForgotPasswordCard>
        </ForgotPasswordContainer>
      </Background>
    );
  }

  return (
    <Background>
      <ForgotPasswordContainer>
        <ForgotPasswordCard>
          <LogoContainer>
            <LogoImage src={logoImage} alt="Logo Meu PET" />
            <LogoText>Meu PET</LogoText>
          </LogoContainer>
          <Title>Esqueceu a senha?</Title>
          <Ptext>Informe seu e-mail cadastrado para enviarmos as instruções de redefinição de senha.</Ptext>
          <form onSubmit={formik.handleSubmit}>
            <InputContainer>
              <Label htmlFor="email">E-mail*</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Digite aqui"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorText>{formik.errors.email}</ErrorText>
              )}
            </InputContainer>
            <ButtonContainer>
              <Button secondary onClick={() => navigate("/login")}>
                Voltar
              </Button>
              <Button type="submit">Avançar</Button>
            </ButtonContainer>
          </form>
        </ForgotPasswordCard>
      </ForgotPasswordContainer>
    </Background>
  );
};

export default ForgotPassword;