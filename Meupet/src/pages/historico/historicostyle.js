import styled from "styled-components";
import backgroundImage from "../../assets/background_login.png";

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.25rem; 

  .background_White {
    background-color: #ffffff;
    width: 100%;
    max-width: 75rem; 
    border-radius: 16px; 
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); 
    padding: 2.5rem 1.25rem; 
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-bottom: 1.25rem; 

  h1 {
    font-size: 3.75rem; 
    color: #1e3a8a;
    font-weight: bold;
  }

  @media (max-width: 48em) { 
    h1 {
      font-size: 2.5rem; 
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius:  12px; 
  padding: 1.25rem;
  margin: 1.25rem auto; 
  max-width: 56.25rem; 
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1); 
  flex-wrap: nowrap;
  position: relative;

  @media (max-width: 48em) { 
    flex-direction: column;
    padding: 1.25rem 0.625rem; 
    margin: 0.9375rem auto; 
  }
`;

export const Categoria = styled.span`
  background-color: #8bc500;
  color: white;
  padding: 0.625rem 2.1875rem; 
  border-radius: 16px; 
  font-size: 1rem; 
  margin-bottom: 0.625rem; 
  text-transform: uppercase;

  @media (max-width: 48em) { 
    font-size: 0.875rem; 
    padding: 0.5rem 1.25rem; 
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.25rem; 
  flex: 1;

  h2 {
    font-size: 1.5625rem; 
    margin: 0.9375rem 0; 
    color: #2a4f6a;
  }

  .detalhes {
    display: flex;
    align-items: center; 
    margin: 0.3125rem 0; 
    color: #555;
    gap: 1rem; 
    svg {
      margin-right: 0.5rem; 
    }
  }

  button {
    background-color: #1e3a8a;
    color: white;
    padding: 0.75rem 1.25rem; 
    border: none;
    border-radius: 12px ; 
    cursor: pointer;
    right: 1.25rem; 
    height: 3.125rem; 
    margin: auto;
    transition: background-color 0.3s;

    &:hover {
      background-color: #374151;
    }
  }

  @media (max-width: 48em) { 
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 1.25rem; 
    }

    button {
      width: 100%;
      margin-top: 0.625rem;
    }

    .detalhes {
      flex-direction: column; 
      gap: 0.625rem; 
    }
  }
`;

export const Image = styled.img`
  width: 9.375rem; 
  height: auto;
  border-radius:  8px;
  margin-right: 1.25rem; 

  @media (max-width: 48em) { 
    width: 7.5rem; 
    margin-right: 0;
    margin-bottom: 0.9375rem; 
  }
`;
