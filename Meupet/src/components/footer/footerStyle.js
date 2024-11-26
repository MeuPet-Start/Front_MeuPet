import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  text-align: center;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FooterLinks = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.75rem;
  cursor: pointer;
  font-family: "Londrina Solid", cursive;

  transition: color 0.3s ease;

  &:hover {
    color: #36a92e;
    text-decoration: none;
  }
`;

export const Divider = styled.span`
  color: white;
`;

export const FooterIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #ccc;
  }

  div {
    display: flex;
    gap: 2rem;

    a {
      color: white;
      font-size: 1.5rem;
      transition: color 0.3s ease;

      &:hover {
        color: #36a92e;
      }
    }
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const UserDetails = styled.div`
  text-align: center;

  span {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 500;
  }
`;

export const Points = styled.div`
  font-size: 1rem;
  color: white;
  font-weight: bold;

  span {
    font-weight: 400;
  }
`;

export const ClinicDetails = styled(UserDetails)``;
