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
import {jwtDecode} from "jwt-decode";

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
  const [selectedTab, setSelectedTab] = useState("geral"); 

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

  const {userEmail} = useUserType();
  const { userName} = useUserData(userEmail);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("clinicProfile", JSON.stringify(clinicData));
    alert("Dados salvos com sucesso!");
  };

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

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleLogoff = () => {
    
    localStorage.removeItem("jwtToken"); 
    alert("Você foi desconectado com sucesso!");
    navigate("/login");  
  };
  
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja deletar sua conta? Esta ação é irreversível."
    );
  
    if (confirmDelete) {
      axios
        .delete("/api/deleteAccount", {
          data: {
            userId: clinicData.id,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.removeItem("clinicProfile"); 
            alert("Conta deletada com sucesso.");
            navigate("/"); 
          } else {
            alert("Erro ao deletar conta. Tente novamente.");
          }
        })
        .catch((error) => {
          console.error("Erro ao deletar a conta:", error);
          alert("Houve um erro ao tentar deletar a conta. Tente novamente mais tarde.");
        });
    }
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
              style={{ display: "none" }} 
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

          <SidebarItem
            isSelected={selectedTab === "sair"}
            onClick={handleLogoff}
          >
            Sair
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "deletarConta"}
            onClick={handleDeleteAccount}
          >
            Deletar Conta
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
