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
  ValorServico,
  Servico,
  InputValor,
  Inputcheck,
} from "./perfilClinicaStyle";

import { useUserData } from "../../../hooks/useUserData";
import { api } from "../../../services/api";

const PerfilClinica = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(UserImage);
  const [selectedTab, setSelectedTab] = useState("geral");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const { userData, logout, fetchUserData } = useUserData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [dataState, setDataState] = useState({
    name: userData.name || "",
    streetAndNumber: userData.streetAndNumber || "",
    neighborhood: userData.neighborhood || "",
    phoneNumber: userData.phoneNumber || "",
    servicosPrestados: userData.servicosPrestados,
    servicosPrestadosValores: userData.servicosPrestadosValores,
    openingHour: "",
    closingHour: "",
  });

  const handleClinicUpdateGeral = async (values) => {
    try {
      const response = await api.patch(`/partner/${userData.id}`, {
        name: values.name,
        phoneNumber: values.phoneNumber,
        streetAndNumber: values.streetAndNumber,
        neighborhood: values.neighborhood,
      });

      if (response.status === 200) {
        fetchUserData();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
    }
  };

  const handleClinicUpdateSobre = async (values) => {
    const servicesAndValues = values.servicosPrestados.map((service) => ({
      name: service,
      price: values.servicosPrestadosValores[service] || "",
    }));
    try {
      const request = {
        services: servicesAndValues,
        disponibilidade: {
          openingHour: values.openingHour,
          closingHour: values.closingHour,
        },
      };
      console.log(request);
      const response = await api.post(
        `/partner/service/disponibilidade/${userData.id}`,
        {
          services: servicesAndValues,
          disponibilidade: {
            openingHour: values.openingHour,
            closingHour: values.closingHour,
          },
        }
      );

      if (response.status === 200) {
        fetchUserData();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    if (userData) {
      setDataState({
        name: userData.name,
        streetAndNumber: userData.streetAndNumber,
        neighborhood: userData.neighborhood,
        contact: userData.phoneNumber,
        servicosPrestados: userData.services || [],
        servicosPrestadosValores: userData.servicosPrestadosValores || {},
        openingHours: "",
        closingHours: "",
      });
      console.log(userData);
    }
  }, [userData]);

  const generateValidationSchema = (tab) => {
    switch (tab) {
      case "geral":
        return Yup.object({
          name: Yup.string().required("Nome da clínica é obrigatório"),
          streetAndNumber: Yup.string().required(
            "Rua e complemento são obrigatórios"
          ),
          neighborhood: Yup.string().required("Bairro é obrigatório"),
          contact: Yup.string().required("Contato é obrigatório"),
        });

      case "sobre":
        return Yup.object({
          servicosPrestados: Yup.array().min(
            1,
            "Selecione pelo menos um serviço."
          ),
          openingHour: Yup.string().required(
            "Horário de Abertura é obrigatório"
          ),
          closingHour: Yup.string()
            .required("Horário de Fechamento é obrigatório")
            .test(
              "is-before-opening",
              "Horário de Fechamento não pode ser antes do Horário de Abertura",
              function (value) {
                const { openingHour } = this.parent; // Obtém o valor de openingHour

                // Se ambos os horários estiverem definidos, realiza a comparação
                if (openingHour && value) {
                  return value >= openingHour; // Verifica se o horário de fechamento é depois ou igual ao de abertura
                }
                return true; // Se não tiver ambos os horários, a validação passa
              }
            ),
        });
      default:
        return Yup.object({});
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: dataState,
    validationSchema: generateValidationSchema(selectedTab),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        if (selectedTab === "geral") {
          await handleClinicUpdateGeral(values);
        } else if (selectedTab === "sobre") {
          await handleClinicUpdateSobre(values);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  useEffect(() => {
    formik.setValues(dataState);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
        setImage(base64Image);
        try {
          const response = await axios.put(
            "/api/clinicProfile/image",
            { image: base64Image },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
            }
          );
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

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const openLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogoutAccount = () => {
    try {
      localStorage.removeItem("jwtToken");
      logout();
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao desconectar:", error);
    } finally {
      setIsLogoutModalOpen(false);
    }
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      const response = await api.delete("/partner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        params: { id: userData.id },
      });
      if (response.status === 204) {
        logout();
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao deletar a conta:", error);
      alert(
        "Houve um erro ao tentar deletar a conta. Tente novamente mais tarde."
      );
    } finally {
      setIsDeleteModalOpen(false);
      onst[(photos, setPhotos)] = useState([]);
    }
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
          <SidebarUsernameTitle>{userData.name}</SidebarUsernameTitle>
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
            isSelected={selectedTab === "seguranca"}
            onClick={() => handleTabClick("seguranca")}
          >
            Segurança
          </SidebarItem>
          <SidebarItem
            isSelected={selectedTab === "sair"}
            onClick={openLogoutModal}
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
            Preencha os seguintes campos para <strong>atualizar</strong> os
            dados.
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
                <Label htmlFor="streetAndNumber">Rua e Complemento</Label>
                <Input
                  type="text"
                  id="streetAndNumber"
                  name="streetAndNumber"
                  value={formik.values.streetAndNumber}
                  placeholder="Ex: Avenida Caxangá, nº 123"
                  {...formik.getFieldProps("streetAndNumber")}
                />
                {formik.touched.streetAndNumber &&
                  formik.errors.streetAndNumber && (
                    <ErrorText>{formik.errors.streetAndNumber}</ErrorText>
                  )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  value={formik.values.neighborhood}
                  placeholder="Ex: Bairro do Recife"
                  {...formik.getFieldProps("neighborhood")}
                />
                {formik.touched.neighborhood && formik.errors.neighborhood && (
                  <ErrorText>{formik.errors.neighborhood}</ErrorText>
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
                  onChange={(e) => {
                    const formattedPhone = maskPhone(e.target.value);
                    formik.setFieldValue("contact", formattedPhone); // Changed from "phone" to "phoneNumber"
                  }}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <ErrorText>{formik.errors.contact}</ErrorText>
                )}
              </FormGroup>
              <Button type="submit">Salvar Alterações</Button>
            </ProfileForm>
          )}
          {selectedTab === "sobre" && (
            <ProfileForm onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="servicosPrestados">Serviços Oferecidos</Label>
                <div>
                  {[
                    { value: "castracao", label: "Castração" },
                    { value: "vacinas", label: "Vacinas" },
                    { value: "petShop", label: "Pet Shop" },
                    { value: "tosaBanho", label: "Tosa e Banho" },
                    { value: "exames", label: "Exames" },
                    { value: "cirurgias", label: "Cirurgias" },
                    { value: "emergencias", label: "Emergências" },
                    { value: "nutricionista", label: "Nutricionista" },
                  ].map((service) => (
                    <Servico key={service.value}>
                      <Inputcheck
                        type="checkbox"
                        id={service.value}
                        name="servicosPrestados"
                        value={service.value}
                        checked={formik.values.servicosPrestados.includes(
                          service.value
                        )}
                        onChange={formik.handleChange}
                      />
                      <Label htmlFor={service.value}>{service.label}</Label>

                      <ValorServico>
                        <Label htmlFor={`${service.value}-valor`}>Valor:</Label>
                        <InputValor
                          type="text"
                          id={`${service.value}-valor`}
                          name={`servicosPrestadosValores.${service.value}`}
                          value={
                            formik.values.servicosPrestadosValores[
                            service.label
                            ] || ""
                          }
                          placeholder="Ex: R$ 100,00"
                          onChange={(e) => {
                            formik.setFieldValue(
                              `servicosPrestadosValores.${service.label}`,
                              e.target.value
                            );
                            formik.handleChange(e);
                          }}
                        />
                      </ValorServico>
                    </Servico>
                  ))}
                </div>
                {formik.touched.servicosPrestados &&
                  formik.errors.servicosPrestados && (
                    <ErrorText>{formik.errors.servicosPrestados}</ErrorText>
                  )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="openingHours">Horário de Abertura</Label>
                <Input
                  type="time"
                  id="openingHour"
                  name="openingHour"
                  value={formik.values.openingHour}
                  {...formik.getFieldProps("openingHour")}
                />
                {formik.touched.openingHour && formik.errors.openingHour && (
                  <ErrorText>{formik.errors.openingHour}</ErrorText>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="openingHours">Horário de Fechamento</Label>
                <Input
                  type="time"
                  id="closingHour"
                  name="closingHour"
                  value={formik.values.closingHour}
                  {...formik.getFieldProps("closingHour")}
                />

                {formik.touched.closingHour && formik.errors.closingHour && (
                  <ErrorText>{formik.errors.closingHour}</ErrorText>
                )}
              </FormGroup>

              <Button type="submit">Salvar Alterações</Button>
            </ProfileForm>
          )}
          {selectedTab === "seguranca" && (
            <Button
              onClick={() => {
                logout();
                navigate("/recuperar-senha");
                window.location.reload();
              }}
            >
              Alterar Senha
            </Button>
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
      {isLogoutModalOpen && (
        <Modal isOpen={isLogoutModalOpen}>
          <ModalContent>
            <h2>Você está prestes a sair sua conta.</h2>
            <p>Tem certeza de que deseja sair sua conta?</p>
            <ModalButtonContainer>
              <CancelButton onClick={() => setIsLogoutModalOpen(false)}>
                Cancelar
              </CancelButton>
              <ConfirmButton onClick={confirmLogoutAccount}>
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

export default PerfilClinica;
