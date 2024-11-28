import styled from "styled-components";
import backgroundImage from "../../../assets/background_login.png";

// Container principal da página
export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Seção principal do perfil
export const ProfileSection = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 1158px;
`;

// Título do perfil
export const ProfileTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

// Formulário do perfil
export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Grupo de campos de formulário
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

// Rótulo dos campos de formulário
export const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

// Campo de entrada (Input)
export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
`;

// Campo de texto (Textarea)
export const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  min-height: 150px;
`;

// Botão de ação (Salvar alterações)
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sidebar lateral
export const ProfileSidebar = styled.div`
  padding: 1rem;
`;

// Título da sidebar
export const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const SidebarUsarnameTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

// Item de navegação na sidebar
export const SidebarItem = styled.div`
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  padding: 10px;
  border-radius: 5px;
  
  &:hover {
    background-color: #f1f1f1;
    color: #0056b3;
  }

  &.active {
    background-color: #e9ecef;
    color: #0056b3;
  }
`;

// Container da imagem de perfil
export const ProfileImageContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

// Wrapper que envolve a imagem e o botão de alteração
export const ProfileImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
`;

// Estilo da imagem de perfil
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Botão de alterar a imagem de perfil
export const ProfileImageChangeButton = styled.label`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// Estilo para o input de imagem (escondido)
export const HiddenFileInput = styled.input`
  display: none;
`;

// Estilo para as abas do perfil
export const ProfileTabContent = styled.div`
  padding: 2rem;
`;

// Botão de navegação entre abas
export const ProfileTabButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  color: ${(props) => (props.isActive ? "#007bff" : "#333")};
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "2px solid #007bff" : "none")};
  margin-right: 1rem;

  &:hover {
    color: #0056b3;
  }
`;

// Conteúdo das abas (geral, contato, horário)
export const ProfileTabContentWrapper = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

// Títulos e textos dentro de cada aba
export const ProfileTabContentTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const ProfileTabContentText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

// Botão de salvar e cancelar dentro das abas
export const ProfileTabContentButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ProfileTabContentButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.isCancel ? "#d9534f" : "#5bc0de")};
  
  &:hover {
    background-color: ${(props) => (props.isCancel ? "#c9302c" : "#31b0d5")};
  }
`;

export const ProfileTabContentButtonSave = styled(ProfileTabContentButton)`
  background-color: #5bc0de;

  &:hover {
    background-color: #31b0d5;
  }
`;

export const ProfileTabContentButtonCancel = styled(ProfileTabContentButton)`
  background-color: #d9534f;

  &:hover {
    background-color: #c9302c;
  }
`;

