import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import UserImage from "../../../assets/logo.png";
import axios from "axios";
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
  Textarea,
  ProfileSidebar,
  SidebarItem,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageWrapper,
  ProfileImageChangeButton,
  ProfileTabContent,
  SidebarUsernameTitle,
  Modal,
  ModalContent,
  ModalButtonContainer,
  CancelButton,
  ConfirmButton,
  ErrorText,
} from "./perfilClinicaStyle";

import { useUserType } from "../../../hooks/useUserType";
import { useUserData } from "../../../hooks/useUserData";

const PerfilClinica = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(UserImage);
  const [selectedTab, setSelectedTab] = useState("geral");
  const { userType, userEmail } = useUserType();
  const { userData } = useUserData(userEmail); // Usando o hook para pegar dados do usuário
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [userDataState, setUserDataState] = useState({
    name: userData.name || "",
    address: userData.street || "",  // Assumindo que street vai substituir address
    contact: userData.phoneNumber || "",
    email: userData.email || "",
    about: "",  // Não há campo específico para isso
    openingHours: "",  // Campo ainda não especificado no exemplo
    newPassword: "",
    confirmPassword: "",
  });

  
  useEffect(() => {
    if (userData) {
      setUserDataState({
        name: userData.name,
        address: userData.street,
        contact: userData.phoneNumber,
        email: userData.email,
        about: "",  
        openingHours: "", // Se houver algum campo de horário de funcionamento, preencha aqui
      });
    }
  }, [userData]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Nome da clínica é obrigatório"),
    address: Yup.string().required("Endereço é obrigatório"),
    contact: Yup.string().required("Contato é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    about: Yup.string(),
    openingHours: Yup.string().required("Horário de funcionamento é obrigatório"),
    password: Yup.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "As senhas não combinam")
      .when('password', {
        is: val => (val && val.length > 0),
        then: Yup.string().required('Confirme sua senha')
      }),
  });

  const formik = useFormik({
    enableReinitialize: true, // Isso permite que o Formik seja re-inicializado com os novos dados
    initialValues: userDataState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.put("/api/clinicProfile", values, {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        });
        if (response.status === 200) {
          alert("Dados salvos com sucesso!");
        } else {
          alert("Erro ao salvar os dados. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        alert("Ocorreu um erro ao salvar os dados da clínica.");
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
          const response = await axios.put("/api/clinicProfile/image", { image: base64Image }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
          });
          if (response.status === 200) {
            alert("Imagem alterada com sucesso!");
          } else {
            alert("Erro ao alterar a imagem. Tente novamente.");
          }
        } catch (error) {
          console.error("Erro ao salvar a imagem:", error);
          alert("Ocorreu um erro ao salvar a imagem.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoUpload = async (e) => {
    const files = Array.from(e.target.files);
    const uploadedPhotos = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        uploadedPhotos.push(base64Image);
        setPhotos((prevPhotos) => [...prevPhotos, base64Image]);

        try {
          await axios.post("/api/clinicProfile/photos", { image: base64Image }, {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
          });
        } catch (error) {
          console.error("Erro ao enviar a foto:", error);
          alert("Erro ao enviar a foto. Tente novamente.");
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
    alert("Você foi desconectado com sucesso!");
    navigate("/login");
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      const response = await axios.delete("/api/deleteAccount", {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
        data: { userId: formik.values.id },
      });
      if (response.status === 200) {
        localStorage.removeItem("clinicProfile");
        alert("Conta deletada com sucesso.");
        navigate("/");
      } else {
        alert("Erro ao deletar conta. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao deletar a conta:", error);
      alert("Houve um erro ao tentar deletar a conta. Tente novamente mais tarde.");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

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
          <SidebarUsernameTitle>{userName}</SidebarUsernameTitle>
          <SidebarItem
            isSelected={selectedTab === "geral"}
            onClick={() => handleTabClick("geral")}
          >
            Informações Gerais
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "sobre"}
            onClick={() => handleTabClick("sobre")}
          >
            Sobre a Clínica
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "fotos"}
            onClick={() => handleTabClick("fotos")}
          >
            Fotos
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "seguranca"}
            onClick={() => handleTabClick("seguranca")}
          >
            Segurança
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
          <ProfileTitle>Dados da Clínica</ProfileTitle>
          <ProfileSubTitle>
            Preencha os seguintes campos para <strong>atualizar</strong> os dados.
          </ProfileSubTitle>
          {selectedTab === "geral" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Nome da Clínica</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  placeholder="Cemevet"
                  {...formik.getFieldProps("name")}
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
                  placeholder="Avenida Caxangá"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address && (
                  <ErrorText>{formik.errors.address}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact">Telefone</Label>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formik.values.contact}
                  placeholder="(81) 98564-0002"
                  {...formik.getFieldProps("contact")}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <ErrorText>{formik.errors.contact}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  placeholder="contato@cemevet.com"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorText>{formik.errors.email}</ErrorText>
                )}
              </FormGroup>
              <Button type="submit">Salvar Alterações</Button>
            </ProfileForm>
          )}
          {selectedTab === "sobre" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="about">Serviços Oferecidos</Label>
                <Textarea
                  id="about"
                  name="about"
                  value={formik.values.about}
                  placeholder="Exemplo: Vacinação, consultas, castração, exames."
                  {...formik.getFieldProps("about")}
                />
              {formik.touched.about && formik.errors.about && (
                    <ErrorText>{formik.errors.about}</ErrorText>
                  )}
              </FormGroup>
              <FormGroup>
              <Label htmlFor="openingHours">Horário de Funcionamento</Label>
                  <Input
                    type="text"
                    id="openingHours"
                    name="openingHours"
                    value={formik.values.openingHours}
                    placeholder="Exemplo: Seg a Sex, 08:00 às 18:00"
                    {...formik.getFieldProps("openingHours")}
                  />
                  {formik.touched.openingHours && formik.errors.openingHours && (
                    <ErrorText>{formik.errors.openingHours}</ErrorText>
                  )}
            </FormGroup>
              <Button type="submit">Salvar Alterações</Button>
            </ProfileForm>
          )}
          {selectedTab === "fotos" && (
            <ProfileForm>
              <FormGroup>
                <Label htmlFor="photos">Adicionar Fotos</Label>
                <Input
                  type="file"
                  id="photos"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                />
              </FormGroup>
              <div>
                {photos.map((photo, index) => (
                  <img key={index} src={photo} alt="Foto da Clínica" style={{ width: '100px', margin: '10px' }} />
                ))}
              </div>
            </ProfileForm>
          )}
          {selectedTab === "seguranca" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
             <FormGroup>
                <Label htmlFor="password">Nova Senha</Label>
                <Input
                  type={formik.values.showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  {...formik.getFieldProps("password")}
                  style={{ paddingRight: "1rem" }} 
                />
                {formik.touched.password && formik.errors.password && (
                  <ErrorText>{formik.errors.password}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirmação de Senha</Label>
                <Input
                  type={formik.values.showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  {...formik.getFieldProps("confirmPassword")}
                  style={{ paddingRight: "1rem" }}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                  <ErrorText>{formik.errors.confirmPassword}</ErrorText>
                )}
              </FormGroup>
              <Button type="submit">Alterar Senha</Button>
            </ProfileForm>
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

export default PerfilClinica;
