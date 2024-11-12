import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23a4d65e" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,96C672,75,768,85,864,112C960,139,1056,181,1152,202.7C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

export const Logo = styled.h1`
  color: #00316a;
  font-size: 24px;
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #00316a;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    border-bottom: 5px solid #00316a;
  }
`;
