import styled from 'styled-components';

export const ConfirmationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;


  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ConfirmationMessage = styled.div`
  max-width: 600px;
  width: 100%; 
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 32px;
    color: #fff;
    background-color: #2a4f6a;
    border-radius: 8px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #333;
    font-weight: normal;
  }


  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
    h1 {
      font-size: 28px;
      padding: 8px 16px;
    }
    p {
      font-size: 16px;
    }
  }

  
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 12px;
    h1 {
      font-size: 24px;
      padding: 6px 12px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const DogImageContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 67%;
  transform: translateY(-50%);
  z-index: 1;

  img {
    max-width: 500px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  
  @media (max-width: 768px) {
    position: relative;
    right: 0;
    top: auto;
    transform: none;
    margin-top: 20px;
    img {
      max-width: 400px; 
      width: 100%;
    }
  }

  
  @media (max-width: 480px) {
    position: relative;
    margin-top: 10px;
    img {
      max-width: 300px; 
    }
  }
`;
