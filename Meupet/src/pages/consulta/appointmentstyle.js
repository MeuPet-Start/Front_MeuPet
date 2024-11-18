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
background-color: #00507b;
color: white;
text-align: center;
padding: 20px 0;
div{
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  margin-right: 24px;
  min-width: 120px;
  margin-bottom: 10px;
  }

  h1 {
    font-size: 24px;
    margin: 10px 0;
  }
  
  h2 {
    font-size: 18px;
    color: #82c83a;
    margin: 5px 0;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;

export const TextBlock = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center
  margin: 0;
  `;

export const MainForm = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h2{
    margin-bottom: 16px;
  } 
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-size: 14px;
  }

  textarea {
    resize: none;
    height: 80px;
  }

  .divInputRadio{
    display: flex;
	  flex-direction: column; 
    gap: 8px;
  }

  .inputRadio {
	display: flex;
	flex-direction: row; 
  label{
    width: 20px;
  }
  }
`;


export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 25px;
    cursor: pointer;
  }

  .primary {
    background-color: #82c83a;
    color: white;
  }

   .secondary {
     background-color: #82c83a;
     color: white;
   }
`;

export const SlideItem = styled.img`
    width: 100%;
    height:100%;
    object-fit:cover;
`;
