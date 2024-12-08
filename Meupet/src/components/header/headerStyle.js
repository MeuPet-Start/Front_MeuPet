import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 0.5rem 1.5rem;
  max-width: 1158px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 1158px) {
    padding: 0.5rem 1rem;
    margin: 1rem;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 30px;
    height: 3px;
    background-color: #2a4f6a;
    position: relative;
    cursor: pointer;
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      background-color: #2a4f6a;
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      top: -10px;
    }

    &::after {
      bottom: -10px;
    }

    &:hover::before {
      transform: rotate(45deg);
    }

    &:hover::after {
      transform: rotate(-45deg);
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  border-radius: 10px;
  width: 220px;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2a4f6a;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const MobileNavLink = styled(NavLink)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2a4f6a;

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
  font-size: 1.25rem;
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
  max-width: 90px; 
  overflow: hidden;
  white-space: nowrap; 
  text-overflow: ellipsis;

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
