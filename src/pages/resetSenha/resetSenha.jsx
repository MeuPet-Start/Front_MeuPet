import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Background,
  ResetPasswordContainer,
  ResetPasswordCard,
  LogoContainer,
  LogoImage,
  LogoText,
  Ptext,
  Title,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  ErrorText,
  Label,
} from "./resetSenhaStyle";

import logoImage from "../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres.")
        .required("A senha é obrigatória."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais.")
        .required("A confirmação da senha é obrigatória."),
    }),
    onSubmit: async (values) => {
      try {
        const token = new URLSearchParams(window.location.search).get("token");
        await axios.patch(
          `http://localhost:8080/api/v1/password-recovery/reset?token=${token}`,
          {
            password: values.password,
          }
        );
        alert("Senha redefinida com sucesso!");
        navigate("/login");
      } catch (error) {
        console.error("Erro ao redefinir senha:", error);
        alert("Erro ao redefinir senha. Tente novamente mais tarde.");
      }
    },
  });

  return (
    <Background>
      <ResetPasswordContainer>
        <ResetPasswordCard>
          <LogoContainer>
            <LogoImage src={logoImage} alt="Logo Meu PET" />
            <LogoText>Meu PET</LogoText>
          </LogoContainer>
          <Title>Redefinição de senha</Title>
          <Ptext>Por favor, insira nos campos abaixo a sua nova senha.</Ptext>
          <form onSubmit={formik.handleSubmit}>
            <InputContainer>
              <Label htmlFor="password">Nova Senha*</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Digite sua nova senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autocomplete="new-password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {formik.touched.password && formik.errors.password && (
                <ErrorText>{formik.errors.password}</ErrorText>
              )}
            </InputContainer>
            <InputContainer>
              <Label htmlFor="confirmPassword">Repita a nova senha*</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Repita sua nova senha"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autocomplete="new-password"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                )}
            </InputContainer>
            <ButtonContainer>
              <Button secondary onClick={() => navigate("/login")}>
                Voltar
              </Button>
              <Button type="submit">Redefinir</Button>
            </ButtonContainer>
          </form>
        </ResetPasswordCard>
      </ResetPasswordContainer>
    </Background>
  );
};

export default ResetPassword;