import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 0.75rem;
`;

export const LogoText = styled.h1`
  color: #00316a;
  font-size: 2rem;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 1rem;
   @media (max-width: 900px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #a4d65e;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const NavLink = styled.a`
  color: #00316a;
  font-size: 2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    border-bottom: 5px solid #00316a;
  }
`;

export const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;

span {
  height: 3px;
  width: 25px;
  background: #00316a;
  margin: 4px 0;
  transition: 0.3s;
}

@media (max-width: 900px) {
  display: flex;
}
`;
