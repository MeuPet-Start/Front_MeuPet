import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  RegisterContainer,
  RegisterCard,
  Logo,
  Title,
  InputContainer,
  Input,
  Button,
  LinkText,
  Background,
  ErrorText,
  ButtonContainer,
  ButtonEscolhaContainer,
  ButtonEscolha,
  Label,
  ButtonVoltar,
} from "./registerStyle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoImage from "../../assets/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const stepValidationSchemas = [
    Yup.object().shape({
      userType: Yup.string().required("Escolha uma opção."),
    }),

    Yup.lazy((values) => {
      if (values.userType === "clinic") {
        return Yup.object().shape({
          cpfCnpj: Yup.string()
            .required("O CPF ou CNPJ é obrigatório.")
            .min(14, "O CPF/CNPJ deve ter pelo menos 14 caracteres.")
            .max(18, "O CPF/CNPJ deve ter no máximo 18 caracteres."),
          name: Yup.string().required(
            "O Nome Fantasia ou Pessoal é obrigatório."
          ),
          email: Yup.string()
            .email("Insira um e-mail válido.")
            .required("O e-mail é obrigatório."),
          phone: Yup.string()
            .min(10, "O telefone deve ter pelo menos 10 dígitos.")
            .max(20, "O telefone deve ter no máximo 15 dígitos.")
            .required("O telefone é obrigatório."),
        });
      } else if (values.userType === "user") {
        return Yup.object().shape({
          cpfCnpj: Yup.string()
            .required("O CPF é obrigatório.")
            .length(14, "O CPF deve ter exatamente 14 caracteres."),
          name: Yup.string().required("O Nome Completo é obrigatório."),
          socialName: Yup.string(),
          birthDate: Yup.string().required(
            "A Data de Nascimento é obrigatória."
          ),
        });
      }
    }),

    Yup.lazy((values) => {
      if (values.userType === "clinic") {
        return Yup.object().shape({
          password: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres.")
            .required("A senha é obrigatória."),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais.")
            .required("A confirmação da senha é obrigatória."),
        });
      } else if (values.userType === "user") {
        return Yup.object().shape({
          email: Yup.string()
            .email("Insira um e-mail válido.")
            .required("O e-mail é obrigatório."),
          phone: Yup.string()
            .min(10, "O telefone deve ter pelo menos 10 dígitos.")
            .max(20, "O telefone deve ter no máximo 15 dígitos.")
            .required("O telefone é obrigatório."),
          password: Yup.string()
            .min(6, "A senha deve ter pelo menos 6 caracteres.")
            .required("A senha é obrigatória."),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais.")
            .required("A confirmação da senha é obrigatória."),
        });
      }
      return Yup.object();
    }),
  ];

  const formik = useFormik({
    initialValues: {
      userType: "",
      cpfCnpj: "",
      name: "",
      socialName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
    },
    validationSchema: stepValidationSchemas[currentStep],
    onSubmit: async (values) => {
      if (currentStep < 2) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log(values);
        try {
          const endpoint =
            formik.values.userType === "clinic"
              ? "http://localhost:8080/api/v1/partner"
              : "http://localhost:8080/api/v1/user";

          const requestData =
            values.userType === "clinic"
              ? {
                  name: values.name,
                  email: values.email,
                  phoneNumber: values.phone,
                  password: values.password,
                  document: values.cpfCnpj,
                  documentType: values.cpfCnpj.length === 11 ? "CPF" : "CNPJ",
                }
              : {
                  name: values.name,
                  socialName: values.socialName,
                  email: values.email,
                  phoneNumber: values.phone,
                  password: values.password,
                  document: values.cpfCnpj,
                  documentType: "CPF",
                  birthDate: values.birthDate,
                };

          console.log(values.birthDate);

          const response = await axios.post(endpoint, requestData);

          console.log(response.data);
          if (response.status === 201) {
            alert("Cadastro realizado com sucesso!");
            navigate("/login");
          }
        } catch (error) {
          console.error("Erro no cadastro:", error);
          alert("Ocorreu um erro ao realizar o cadastro.");
        }
      }
    },
  });

  const maskCPF = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskCpfCnpj = (value) => {
    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length > 11) {
      return cleanValue
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }

    return cleanValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  const maskPhone = (value) => {
    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length >= 11) {
      return cleanValue
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    }

    return cleanValue
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  return (
    <Background>
      <RegisterContainer>
        <RegisterCard>
          <Logo src={logoImage} alt="Logo Meu PET" />
          <Title>
            {currentStep === 0
              ? "Como deseja se cadastrar?"
              : formik.values.userType === "clinic"
              ? "Cadastre aqui sua Clínica ou Serviços"
              : "Cadastre-se"}
          </Title>

          {currentStep === 0 && (
            <ButtonEscolhaContainer>
              <ButtonEscolha
                secondary
                onClick={() => {
                  formik.setFieldValue("userType", "clinic");
                  setCurrentStep(currentStep + 1);
                }}
              >
                Cadastrar Clínica
              </ButtonEscolha>
              <ButtonEscolha
                onClick={() => {
                  formik.setFieldValue("userType", "user");
                  setCurrentStep(currentStep + 1);
                }}
              >
                Cadastrar Usuário
              </ButtonEscolha>
              <ButtonVoltar
                secondary
                onClick={() => {
                  navigate("/login");
                }}
              >
                Voltar
              </ButtonVoltar>
            </ButtonEscolhaContainer>
          )}

          {currentStep === 1 && (
            <form onSubmit={formik.handleSubmit}>
              {formik.values.userType === "clinic" ? (
                <>
                  <InputContainer>
                    <Label htmlFor="cpfCnpj">CPF ou CNPJ*</Label>
                    <Input
                      id="cpfCnpj"
                      type="text"
                      name="cpfCnpj"
                      placeholder="Digite aqui"
                      value={formik.values.cpfCnpj}
                      onChange={(e) => {
                        const formattedValue = maskCpfCnpj(e.target.value);
                        formik.setFieldValue("cpfCnpj", formattedValue);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cpfCnpj && formik.errors.cpfCnpj && (
                      <ErrorText>{formik.errors.cpfCnpj}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="name">Nome Fantasia ou Pessoal*</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Digite aqui"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <ErrorText>{formik.errors.name}</ErrorText>
                    )}
                  </InputContainer>

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

                  <InputContainer>
                    <Label htmlFor="phone">Telefone*</Label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formik.values.phone}
                      onChange={(e) => {
                        const formattedPhone = maskPhone(e.target.value);
                        formik.setFieldValue("phone", formattedPhone);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <ErrorText>{formik.errors.phone}</ErrorText>
                    )}
                  </InputContainer>
                </>
              ) : (
                <>
                  <InputContainer>
                    <Label htmlFor="cpfCnpj">CPF*</Label>
                    <Input
                      id="cpfCnpj"
                      type="text"
                      name="cpfCnpj"
                      placeholder="Digite aqui"
                      value={formik.values.cpfCnpj}
                      onChange={(e) => {
                        const formattedCPF = maskCPF(e.target.value);
                        formik.setFieldValue("cpfCnpj", formattedCPF);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.cpfCnpj && formik.errors.cpfCnpj && (
                      <ErrorText>{formik.errors.cpfCnpj}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="name">Nome Completo*</Label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Digite aqui"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <ErrorText>{formik.errors.name}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="socialName">Nome Social (opcional)</Label>
                    <Input
                      id="socialName"
                      type="text"
                      name="socialName"
                      placeholder="Digite aqui"
                      value={formik.values.socialName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="birthDate">Data de Nascimento*</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      name="birthDate"
                      value={formik.values.birthDate || ""}
                      onChange={(e) => {
                        const dateValue = e.target.value;
                        formik.setFieldValue("birthDate", dateValue);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.birthDate && formik.errors.birthDate && (
                      <ErrorText>{formik.errors.birthDate}</ErrorText>
                    )}
                  </InputContainer>
                </>
              )}

              <ButtonContainer>
                <Button
                  secondary
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Voltar
                </Button>
                <Button type="submit">Avançar</Button>
              </ButtonContainer>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={formik.handleSubmit}>
              {formik.values.userType === "clinic" ? (
                <>
                  <InputContainer>
                    <Label htmlFor="password">Senha*</Label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Digite sua senha"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                      <ErrorText>{formik.errors.password}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="confirmPassword">Confirme a senha*</Label>
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Digite novamente"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                      )}
                  </InputContainer>
                </>
              ) : (
                <>
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

                  <InputContainer>
                    <Label htmlFor="phone">Telefone*</Label>
                    <Input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formik.values.phone}
                      onChange={(e) => {
                        const formattedPhone = maskPhone(e.target.value);
                        formik.setFieldValue("phone", formattedPhone);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <ErrorText>{formik.errors.phone}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="password">Senha*</Label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Digite sua senha"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.password && formik.errors.password && (
                      <ErrorText>{formik.errors.password}</ErrorText>
                    )}
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="confirmPassword">Confirme a senha*</Label>
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Digite novamente"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                      )}
                  </InputContainer>
                </>
              )}

              <ButtonContainer>
                <Button
                  secondary
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Voltar
                </Button>
                <Button type="submit">Cadastrar</Button>
              </ButtonContainer>
            </form>
          )}
        </RegisterCard>
      </RegisterContainer>
    </Background>
  );
};

export default Register;
