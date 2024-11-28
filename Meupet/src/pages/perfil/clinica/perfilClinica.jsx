import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import UserImage from "../../../assets/logo.png";
import {
  Container,
  ProfileSection,
  ProfileTitle,
  ProfileForm,
  Input,
  Button,
  FormGroup,
  Label,
  Textarea,
  ProfileSidebar,
  SidebarTitle,
  SidebarItem,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageWrapper,
  ProfileImageChangeButton,
  ProfileTabContent,
  SidebarUsarnameTitle,
} from "./perfilClinicaStyle";

import { useUserType } from "../../../hooks/useUserType";
import { useUserData } from "../../../hooks/useUserData";


const PerfilClinica = () => {
  const navigate = useNavigate();

  const [clinicData, setClinicData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
    workingHours: "",
  });
  const [image, setImage] = useState(UserImage);
  const [selectedTab, setSelectedTab] = useState("geral"); // Estado para controlar a aba selecionada

  useEffect(() => {
    const clinicInfo = JSON.parse(localStorage.getItem("clinicProfile")) || {
      name: "Clínica Exemplo",
      address: "Rua Exemplo, 123",
      contact: "(11) 12345-6789",
      email: "contato@clinicaexemplo.com",
      workingHours: "Segunda a Sexta, 9h às 18h",
    };
    setClinicData(clinicInfo);
  }, []);

  const {userType, userEmail} = useUserType();
  const {userName, userPoints} = useUserData(userEmail);

  // Atualiza os dados conforme o usuário preenche os campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para salvar os dados
  const handleSave = () => {
    localStorage.setItem("clinicProfile", JSON.stringify(clinicData));
    alert("Dados salvos com sucesso!");
  };

  // Função para alterar a imagem do perfil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para alternar entre as abas
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Container>
      <Header />
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
              style={{ display: "none" }} // Esconde o input de file
            />
          </ProfileImageContainer>
          <SidebarUsarnameTitle>{userName}</SidebarUsarnameTitle>
          <SidebarTitle>Seções</SidebarTitle>
          <SidebarItem
            isSelected={selectedTab === "geral"}
            onClick={() => handleTabClick("geral")}
          >
            Informações Gerais
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "contato"}
            onClick={() => handleTabClick("contato")}
          >
            Contato
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "horario"}
            onClick={() => handleTabClick("horario")}
          >
            Horários de Funcionamento
          </SidebarItem>
        </ProfileSidebar>


        <ProfileTabContent>
        <ProfileTitle>Meu Perfil - Clínica</ProfileTitle>
          {selectedTab === "geral" && (
            <ProfileForm>
              <FormGroup>
                <Label htmlFor="name">Nome da Clínica</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={clinicData.name}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={clinicData.address}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="contact">Contato</Label>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  value={clinicData.contact}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </ProfileForm>
          )}

          {selectedTab === "contato" && (
            <ProfileForm>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={clinicData.email}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </ProfileForm>
          )}

          {selectedTab === "horario" && (
            <ProfileForm>
              <FormGroup>
                <Label htmlFor="workingHours">Horário de Funcionamento</Label>
                <Textarea
                  id="workingHours"
                  name="workingHours"
                  value={clinicData.workingHours}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </ProfileForm>
          )}
          <Button onClick={handleSave}>Salvar Alterações</Button>
        </ProfileTabContent>
      </ProfileSection>
      <Footer />
    </Container>
  );
};

export default PerfilClinica;
