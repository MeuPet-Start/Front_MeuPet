import styled from "styled-components";

export const CarrosselImage = styled.div`
  width: 100%;
  margin-top: 3.75rem; 
  position: relative;
  z-index: -1;

  img {
    width: 100%;
    max-height: 25rem; 
    object-fit: cover;
  }
`;

export const HeaderSection = styled.div`
  width: 80%;
  background-color: #00507b;
  color: white;
  border-radius: 20px ; 
  padding: 1.25rem; 
  margin: 1.5rem auto; 

  div {
    display: flex;
    flex-direction: row;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.375rem; 
    margin: 0;
  }

  img {
    width: 18.75rem; 
    height: 18.75rem; 
  }

  h1 {
    font-size: 4.375rem; 
  }

  h2 {
    width: 80%;
    background-color: #8bc500;
    border-radius: 1.25rem; 
    font-family: "Poppins";
    font-size: 1.125rem;
    color: #ffffff;
    padding: 0.375rem 0.875rem;
  }

  p {
    font-family: "Poppins";
    font-size: 0.875rem;
  }

  .divInformacoes {
    display: flex;
    flex-direction: row;
    align-items: center;

    .headerIcones {
      width: 1.875rem; 
      height: 1.875rem; 
      margin: 0.75rem; 
    }
  }

  @media (max-width: 48em) { 
    width: 90%;

    h1 {
      font-size: 3.125rem; 
    }

    div {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 12.5rem; 
      height: 12.5rem; 
    }
  }
`;

export const MainForm = styled.div`
  width: 80%;
  margin: 1.25rem auto; 
  padding: 1.25rem; 
  background: #f8f8f8;
  border-radius: 10px ; 
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1); 

  .tituloFormulario {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem; 

    h1 {
      background-color: #2a4f6a;
      color: #ffffff;
      font-weight: normal;
      padding: 0.25rem 0.5rem; 
      border-radius:  8px; 
    }

    h2 {
      font-family: "Poppins";
      font-weight: normal;
      font-size: 1rem; 
      padding: 0.25rem 0.5rem; 
      border-radius: 8px ; 
    }
  }

  @media (max-width: 48em) { 
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
  gap: 0.9375rem; 
  margin-bottom: 2.5rem; 

  h1 {
    font-family: "Poppins";
    font-size: 1rem; 
  }

  .textgreen {
    margin: 0 0 1rem 0;
    background-color: #8bc500;
    color: #ffffff;
    font-weight: normal;
    padding: 0.25rem 0.5rem; 
    border-radius: 8px ; 
    width: 13.125rem; 
  }

  .detalhes {
    margin: 0;
    width: 11.25rem; 
  }

  .checkboxArea {
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem; 
    flex-wrap: wrap;

    input {
      width: 1.25rem; 
      height: 1.25rem; 
    }


    label {
      margin: 0;
    }
  }

  .divContain {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 

    .divForm {
      margin: 0 1rem 0 0; 

      input,
      textarea {
        padding: 1rem; 
        width: 25rem; 
        height: 3.125rem; 
        border: 1px solid #2a4f6a;
        border-radius: 12px ;
      }

      textarea {
        resize: none;
      }

      label {
        margin: 0 0 0.25rem 0; 
        display: block;
        font-size: 1.25rem; 
      }
    }
  }

  @media (max-width: 48em) { 
    .divContain {
      flex-direction: column;

      .divForm {
        input,
        textarea {
          width: 100%;
        }
      }
    }

    .checkboxArea {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.625rem; 
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0; 

  button {
    font-size: 1.25rem; 
    background-color: #2a4f6a;
    border: 1px solid #094db6;
    border-radius: 12px ; 
    color: #ffffff;
    padding: 0.5rem 1.5rem; 
    cursor: pointer;
  }

  button:hover {
    background-color: #516675;
  }

  @media (max-width: 48em) { 
    button {
      font-size: 1rem; 
      padding: 0.375rem 1rem; 
    }
  }
`;

export const SlideItem = styled.img`
  width: 80%;
  height: 100%;
  border-radius: 20px; 
  display: block;
  margin: 0 auto;

  @media (max-width: 48em) { 
    width: 90%;
  }
`;
