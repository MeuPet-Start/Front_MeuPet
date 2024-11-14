import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const FooterLinks = styled.a`
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  margin: 0 0.5rem;

  &:hover {
    color: #ccc;
  }
`;

export const Divider = styled.span`
  color: #fff;
  margin: 0 1rem;
`;

export const FooterIcons = styled.div`
  margin: 1rem 0;

  p {
    color: #ccc;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;

    a {
      color: #fff;
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: #ccc;
      }
    }
  }
`;

export const FooterText = styled.p`
  color: #ccc;
  font-size: 1.25rem;
  margin-top: 1rem;
`;
