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
  padding: 40px 20px;

  .background_White {
    background-color: #ffffff;
    width: 100%;
    max-width: 1200px;
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding: 40px 20px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 60px;
    color: #1e3a8a;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  max-width: 900px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: nowrap;
  position: relative;
`;

export const Categoria = styled.span`
  background-color: #8bc500;
  color: white;
  padding: 10px 35px;
  border-radius: 16px;
  font-size: 15px;
  margin-bottom: 10px; 
  text-transform: uppercase;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 20px;
  flex: 1;

  h2 {
    font-size: 25px;
    margin: 15px 0 15px 0;
    color: #2a4f6a;
  }

  .detalhes {
    display: flex;
    align-items: center; 
    margin: 5px 0;
    color: #555;
    gap: 16px;
    svg {
      margin-right: 8px;
    }
  }

  button {
    background-color: #1e3a8a;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    right: 20px;
    height: 50px;
    margin: auto;
    transition: background-color 0.3s;

    &:hover {
      background-color: #374151;
    }
  }
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;
