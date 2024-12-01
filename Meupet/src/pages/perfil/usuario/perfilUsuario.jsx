import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import UserImage from "../../../assets/logo.png";
import exmedImage from "../../../assets/exmed.png";
import novacImage from "../../../assets/99pop.png";
import ladydriverImage from "../../../assets/ladydriver.png";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ProfileSection,
  ProfileTitle,
  ProfileSubTitle,
  ProfileForm,
  Input,
  Button,
  FormGroup,
  Label,
  ProfileSidebar,
  SidebarItem,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageWrapper,
  ProfileImageChangeButton,
  ProfileTabContent,
  SidebarUsarnameTitle,
  Modal,
  ModalContent,
  ModalButtonContainer,
  CancelButton,
  ConfirmButton,
  ErrorText,
  BalanceContainer,
  BalanceText,
  BalanceAmount,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductUnits,
  RedeemButton,
} from "./perfilUsuarioStyle";

import { useUserType } from "../../../hooks/useUserType";
import { useUserData } from "../../../hooks/useUserData";

const PerfilUsuario = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    birthDate: "", 
  });
  const [image, setImage] = useState(UserImage);
  const [selectedTab, setSelectedTab] = useState("geral");
  const { userType, userEmail } = useUserType();
  const { userName } = useUserData(userEmail);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (!userType || userType !== "user") { 
      alert("Você não tem permissão para acessar esta página.");
      navigate("/login");
    }
  }, [userType, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/userProfile");
        setUserData(response.data);
        if (response.data.image) {
          setImage(response.data.image);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Não foi possível carregar os dados do usuário.");
      }
    };

    fetchUserData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: userData.name,
      address: userData.address,
      phone: userData.phone,
      email: userData.email,
      password: "",
      confirmPassword: "",
      birthDate: userData.birthDate || "",
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      address: Yup.string().required("Endereço é obrigatório"),
      phone: Yup.string().required("Telefone é obrigatório"),
      email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
      birthDate: Yup.date().nullable().required("Data de nascimento é obrigatória"), 
      password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "As senhas não combinam")
        .when('password', {
          is: val => (val && val.length > 0),
          then: Yup.string().required('Confirme sua senha')
        }),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.put("/api/userProfile", values);
        if (response.status === 200) {
          alert("Dados salvos com sucesso!");
          setUserData(values);
        }
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        alert("Ocorreu um erro ao salvar os dados do usuário.");
      }
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        setImage(base64Image);
        try {
          const response = await axios.put("/api/userProfile/image", { image: base64Image });
          if (response.status === 200) {
            alert("Imagem alterada com sucesso!");
          }
        } catch (error) {
          console.error("Erro ao salvar a imagem:", error);
          alert("Ocorreu um erro ao salvar a imagem.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const params = new URLSearchParams(location.search);
  const Tab = params.get("tab");


  const handleTabClick = (tab) => {
    setSelectedTab(tab) || setSelectedTab(Tab);
  };

  const handleLogoff = () => {
    localStorage.removeItem("jwtToken");
    alert("Você foi desconectado com sucesso!");
    navigate("/login");
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      const response = await axios.delete("/api/deleteAccount", {
        data: {
          userId: userData.id,
        },
      });
      if (response.status === 200) {
        localStorage.removeItem("userProfile");
        alert("Conta deletada com sucesso.");
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao deletar a conta:", error);
      alert("Houve um erro ao tentar deletar a conta. Tente novamente mais tarde.");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  const saldoAtual = "500 Capibas";
  const produtos = [
    {
      id: 1,
      title: "Exmed Pass",
      description: "Clube de Saúde",
      price: 400,
      units: 29,
      image: exmedImage,
    },
    {
      id: 2,
      title: "99 Pop",
      description: "R$15,00 de crédito",
      price: 100,
      units: 325,
      image: novacImage,
    },
    {
      id: 3,
      title: "LadyDriver",
      description: "R$10,00 de crédito",
      price: 400,
      units: 128,
      image: ladydriverImage,
    },
  ];
 
  useEffect(() => {
    if (userData) {
      formik.setValues({
        name: userData.name,
        address: userData.address,
        phone: userData.phone,
        email: userData.email,
        birthDate: userData.birthDate || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [userData]);

  return (
    <Container>
      <Header />
      <ProfileSection>
        <ProfileSidebar>
          <ProfileImageContainer>
            <ProfileImageWrapper>
              <ProfileImage src={image} alt="Foto de Perfil" />
              <ProfileImageChangeButton htmlFor="fileInput">Alterar</ProfileImageChangeButton>
            </ProfileImageWrapper>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </ProfileImageContainer>
          <SidebarUsarnameTitle>{userName}</SidebarUsarnameTitle>
          <SidebarItem isSelected={selectedTab === "geral"} onClick={() => handleTabClick("geral")}>
            Informações Gerais
          </SidebarItem>
  
          <SidebarItem
            isSelected={selectedTab === "seguranca"}
            onClick={() => handleTabClick("seguranca")}
          >
            Segurança
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "moedaCapiba"}
            onClick={() => handleTabClick("moedaCapiba")}
          >
            Moeda Capiba
          </SidebarItem>
          <SidebarItem isSelected={selectedTab === "sair"} onClick={handleLogoff}>
            Sair
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "deletarConta"}
            onClick={openDeleteModal}
          >
            Deletar Conta
          </SidebarItem>
        </ProfileSidebar>

        <ProfileTabContent>
          <ProfileTitle>Dados do Usuário</ProfileTitle>
          <ProfileSubTitle>
            Preencha os campos abaixo para <strong>atualizar</strong> seus dados.
          </ProfileSubTitle>

          {selectedTab === "geral" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  placeholder="Seu Nome"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <ErrorText>{formik.errors.name}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  placeholder="Seu Endereço"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <ErrorText>{formik.errors.address}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  placeholder="Seu Telefone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <ErrorText>{formik.errors.phone}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="Seu E-mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorText>{formik.errors.email}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.birthDate && formik.errors.birthDate && (
                  <ErrorText>{formik.errors.birthDate}</ErrorText>
                )}
              </FormGroup>
              <Button type="submit">Salvar</Button>
            </ProfileForm>
          )}
          
          {selectedTab === "seguranca" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="password">Nova Senha</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <ErrorText>{formik.errors.password}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirmação de Senha</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                )}
              </FormGroup>
              <Button type="submit">Salvar</Button>
            </ProfileForm>
          )}
          
          {selectedTab === "moedaCapiba" && (
            <div>
              <BalanceContainer>
                <BalanceText>Saldo Atual:</BalanceText>
                <BalanceAmount>{saldoAtual}</BalanceAmount>
              </BalanceContainer>
              <ProductsGrid>
                {produtos.map((produto) => (
                  <ProductCard key={produto.id}>
                    <ProductImage src={produto.image} alt={produto.title} />
                    <ProductDetails>
                      <ProductTitle>{produto.title}</ProductTitle>
                      <ProductDescription>{produto.description}</ProductDescription>
                      <ProductPrice>{produto.price} Capibas</ProductPrice>
                      <ProductUnits>{produto.units} unidades disponíveis</ProductUnits>
                      <RedeemButton>Trocar</RedeemButton>
                    </ProductDetails>
                  </ProductCard>
                ))}
              </ProductsGrid>
            </div>
          )}
        </ProfileTabContent>
      </ProfileSection>
      
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen}>
          <ModalContent>
            <h2>Você está prestes a deletar sua conta.</h2>
            <p>Tem certeza de que deseja deletar sua conta? Esta ação é irreversível.</p>
            <ModalButtonContainer>
              <CancelButton onClick={() => setIsDeleteModalOpen(false)}>Cancelar</CancelButton>
              <ConfirmButton onClick={confirmDeleteAccount}>Confirmar</ConfirmButton>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </Container>
  );
};

export default PerfilUsuario;
