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
  border-radius:20px;
  padding: 20px;
  margin:24px auto;

  div{
    display: flex;
    flex-direction: row;
    
    .text{
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 0;
    }

  }

  img {
    width: 300px;
    heigth: 300px;
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
    color: #FFFFF;
    padding: 6px 14px;
  }

  p {
    font-family: "Poppins";
    font-size: 14px;
  }

  .divInformacoes{
  display: flex;
  flex-direction: row;
  align-items: center;

    .headerIcones {
      width: 30px; 
      height: 30px; 
      margin: 12px;
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

  .tituloFormulario{
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

    h1{
      background-color: #2A4F6A;  
      color: #FFFFFF;
      font-weight: normal;
      padding: 4px 8px;
      border-radius: 8px;
    }

    h2{
      font-family: "Poppins";
      font-weight: normal;
      font-size: 16px;
      padding: 4px 8px;
      border-radius: 8px;
    }
  }
`;

export const InputGrid = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;

      h1{
      font-family: "Poppins";
      font-size: 16px;
    }

  .checkboxArea{
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    align-items: center;

    input{
    width:50px;
    heigth:50px;
    }

    .segundoTitulo{
    margin:0 0 0 80px;
    }

  }

  .divContain{
  display:flex;

    .divForm{
      margin: 0 16px 0 0;

      input, textarea{
        padding:16px;
        width: 428px;
        height: 50px;
        border: 1px solid #2A4F6A;
        border-radius: 12px;
      }
      
      label{
      display: block;
      font-size:20px;
      }
  }
  }
}
`;


export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    button {
      font-size: 20px;
      background-color: #2A4F6A;
      border:1px solid #094DB6;
      border-radius: 12px;
      color: #FFFFFF;
      padding: 8px 24px;
      cursor: pointer;
    }

    button:hover{
      background-color: #516675;
    }
`;

export const SlideItem = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  display: block;
  margin: 0 auto;  

  `;

