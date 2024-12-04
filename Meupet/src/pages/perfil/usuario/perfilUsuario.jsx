import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import UserImage from "../../../assets/logo.png";
import exmedImage from "../../../assets/exmed.png";
import novacImage from "../../../assets/99pop.png";
import ladydriverImage from "../../../assets/ladydriver.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ContainerHeader,
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

import { useUserData } from "../../../hooks/useUserData";
import { api } from "../../../services/api";

const PerfilUsuario = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(UserImage);
  const [selectedTab, setSelectedTab] = useState("geral");
  const { userData, logout, fetchUserData } = useUserData();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dataState, setDataState] = useState({
    name: userData.name || "",
    socialName: userData.socialName || "",
    phoneNumber: userData.phoneNumber || "",
    birthDate: userData.dateOfBirth || "",
    moedaCapiba: userData.moedaCapiba,
    newPassword: "",
    confirmPassword: "",
  });

  const handleUserUpdate = async (values) => {
    try {
      const response = await api.patch(`/user/${userData.id}`, {
        name: values.name,
        socialName: values.socialName,
        phoneNumber: values.phoneNumber,
        dateOfBirth: values.birthDate,
      });

      if (response.status === 200) {
        alert("Dados do usuário atualizados com sucesso!");
        fetchUserData(); // Recarrega os dados do usuário, se necessário
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
      alert("Erro ao salvar os dados do usuário.");
    }
  };

  const handlePasswordChange = async (values) => {
    if (
      values.newPassword === values.confirmPassword &&
      values.newPassword !== null &&
      values.newPassword !== ""
    ) {
      try {
        const response = await api.patch(
          `/authenticable/changePassword`,
          { password: values.newPassword },
          {
            params: { id: userData.id },
          }
        );

        if (response.status === 200) {
          alert("Senha alterada com sucesso!");
        }
      } catch (error) {
        console.error("Erro ao alterar a senha:", error);
        alert("Erro ao alterar a senha.");
      }
    } else if (values.newPassword) {
      alert("As senhas não combinam!");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: dataState, // Valores iniciais, que dependem do estado de dataState
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      socialName: Yup.string().required("Nome social é obrigatório"),
      phoneNumber: Yup.string().required("Telefone é obrigatório"),
      birthDate: Yup.date()
        .nullable()
        .required("Data de nascimento é obrigatória"),
      newPassword: Yup.string().min(
        6,
        "A senha deve ter pelo menos 6 caracteres"
      ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "As senhas não combinam")
        .when("newPassword", {
          is: (val) => val && val.length > 0,
          then: Yup.string().required("Confirme sua senha"),
        }),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true); // Ativa o estado de envio
      try {
        // Realiza as duas operações separadamente
        await handleUserUpdate(values); // Atualiza dados do usuário
        await handlePasswordChange(values); // Atualiza senha, se necessário
      } finally {
        setIsSubmitting(false); // Desativa o estado de envio
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
          const response = await axios.put("/api/userProfile/image", {
            image: base64Image,
          });
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

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogoff = () => {
    localStorage.removeItem("jwtToken");
    logout();
    alert("Você foi desconectado com sucesso!");
    navigate("/login");
    window.location.reload();
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
      alert(
        "Houve um erro ao tentar deletar a conta. Tente novamente mais tarde."
      );
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

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
      setDataState({
        name: userData.name,
        socialName: userData.socialName,
        phoneNumber: userData.phoneNumber,
        birthDate: userData.birthDate || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [userData]);

  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <ProfileSection>
        <ProfileSidebar>
          <ProfileImageContainer>
            <ProfileImageWrapper>
              <ProfileImage src={image} alt="Foto de Perfil" />
              <ProfileImageChangeButton htmlFor="fileInput">
                Alterar
              </ProfileImageChangeButton>
            </ProfileImageWrapper>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </ProfileImageContainer>
          <SidebarUsarnameTitle>{userData.name}</SidebarUsarnameTitle>
          <SidebarItem
            isSelected={selectedTab === "geral"}
            onClick={() => handleTabClick("geral")}
          >
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
          <SidebarItem
            isSelected={selectedTab === "sair"}
            onClick={handleLogoff}
          >
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
            Preencha os campos abaixo para <strong>atualizar</strong> seus
            dados.
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
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <ErrorText>{formik.errors.name}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="socialName">Nome social</Label>
                <Input
                  type="text"
                  id="socialName"
                  name="socialName"
                  value={formik.values.socialName}
                  placeholder="Seu nome social"
                  {...formik.getFieldProps("socialName")}
                />
                {formik.touched.socialName && formik.errors.socialName && (
                  <ErrorText>{formik.errors.socialName}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phoneNumber">Telefone</Label>
                <Input
                  type="text"
                  id="phophoneNumber"
                  name="phoneNumber"
                  value={formik.values.phoneNumber}
                  placeholder="Seu Telefone"
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <ErrorText>{formik.errors.phoneNumber}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formik.values.birthDate}
                  {...formik.getFieldProps("birthDate")}
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
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                  )}
              </FormGroup>
              <Button type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Salvando..." : "Salvar"}
              </Button>
            </ProfileForm>
          )}

          {selectedTab === "moedaCapiba" && (
            <div>
              <BalanceContainer>
                <BalanceText>Saldo Atual:</BalanceText>
                <BalanceAmount>{userData.moedaCapiba} Capibas</BalanceAmount>
              </BalanceContainer>
              <ProductsGrid>
                {produtos.map((produto) => (
                  <ProductCard key={produto.id}>
                    <ProductImage src={produto.image} alt={produto.title} />
                    <ProductDetails>
                      <ProductTitle>{produto.title}</ProductTitle>
                      <ProductDescription>
                        {produto.description}
                      </ProductDescription>
                      <ProductPrice>{produto.price} Capibas</ProductPrice>
                      <ProductUnits>
                        {produto.units} unidades disponíveis
                      </ProductUnits>
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
            <p>
              Tem certeza de que deseja deletar sua conta? Esta ação é
              irreversível.
            </p>
            <ModalButtonContainer>
              <CancelButton onClick={() => setIsDeleteModalOpen(false)}>
                Cancelar
              </CancelButton>
              <ConfirmButton onClick={confirmDeleteAccount}>
                Confirmar
              </ConfirmButton>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      )}
      <Footer />
    </Container>
  );
};

export default PerfilUsuario;
