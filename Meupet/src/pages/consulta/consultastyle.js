import styled from "styled-components";

export const CarrosselImage = styled.div`
  width: 100%;
  margin-top: 60px; 
  position: relative;
  z-index: -1; 
  
  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }
`;

export const HeaderSection = styled.div`
  width: 80%;
  background-color: #00507b;
  color: white;
  border-radius: 20px;
  padding: 20px;
  margin: 24px auto;

  div {
    display: flex;
    flex-direction: row;
    
    .text {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 0;
    }
  }

  img {
    width: 300px;
    height: 300px;
  }

  h1 {
    font-size: 70px;
  }
  
  h2 {
    width: 80%;
    background-color: #8BC500;
    border-radius: 20px;
    font-family: "Poppins";
    font-size: 18px;
    color: #FFFFFF;
    padding: 6px 14px;
  }

  p {
    font-family: "Poppins";
    font-size: 14px;
  }

  .divInformacoes {
    display: flex;
    flex-direction: row;
    align-items: center;

    .headerIcones {
      width: 30px; 
      height: 30px; 
      margin: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    
    h1 {
      font-size: 50px;
    }

    div {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const MainForm = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .tituloFormulario {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    h1 {
      background-color: #2A4F6A;  
      color: #FFFFFF;
      font-weight: normal;
      padding: 4px 8px;
      border-radius: 8px;
    }

    h2 {
      font-family: "Poppins";
      font-weight: normal;
      font-size: 16px;
      padding: 4px 8px;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    .tituloFormulario {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const InputGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;

  h1 {
    font-family: "Poppins";
    font-size: 16px;
  }

  .textgreen {
    margin: 0 0 16px 0;
    background-color: #8BC500;  
    color: #FFFFFF;
    font-weight: normal;
    padding: 4px 8px;
    border-radius: 8px;
    width: 210px;
  }

  .detalhes {
    margin: 0;
    width: 180px;
  }

  .checkboxArea {
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px; 
    flex-wrap: wrap;

    input {
      width: 20px; 
      height: 20px; 
    }

    .segundoTitulo {
      margin: 0 0 0 10px; 
    }
  }

  .divContain {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    .divForm {
      margin: 0 16px 0 0;

      input, textarea {
        padding: 16px;
        width: 400px;
        height: 50px;
        border: 1px solid #2a4f6a;
        border-radius: 12px;
      }

      textarea {
        resize: none;
      }
      
      label {
        margin: 0 0 4px 0;
        display: block;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    .divContain {
      flex-direction: column;

      .divForm {
        input, textarea {
          width: 100%;
        }
      }
    }

    .checkboxArea {
      flex-direction: column; 
      align-items: flex-start;
      gap: 10px; 
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;

  button {
    font-size: 20px;
    background-color: #2A4F6A;
    border: 1px solid #094DB6;
    border-radius: 12px;
    color: #FFFFFF;
    padding: 8px 24px;
    cursor: pointer;
  }

  button:hover {
    background-color: #516675;
  }

  @media (max-width: 768px) {
    button {
      font-size: 16px;
      padding: 6px 16px;
    }
  }
`;

export const SlideItem = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
