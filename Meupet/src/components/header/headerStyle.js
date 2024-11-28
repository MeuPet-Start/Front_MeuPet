import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  max-width: 1158px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 0.5rem;
`;

export const LogoText = styled.h1`
  color: #2a4f6a;
  font-size: 1.5rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#36a92e" : "#2a4f6a")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-family: "Londrina Solid", sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #36a92e;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CoinsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CoinIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const CoinCount = styled.span`
  font-size: 1,25rem;
  color: #2a4f6a;
  font-weight: bold;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ClinicContainer = styled(UserContainer)``;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const UserName = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => (props.active ? "#36a92e" : "#2a4f6a")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  font-family: "Londrina Solid", sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #36a92e;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid #ff0000;
  color: #ff0000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    background-color: #ff0000;
    color: white;
  }
`;
