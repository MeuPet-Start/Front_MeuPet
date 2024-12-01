import styled from 'styled-components';

export const ConfirmationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 1.25rem; 
  background-color: #f9f9f9;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.9375rem; 
  }
`;

export const ConfirmationMessage = styled.div`
  max-width: 37.5rem;
  width: 100%;
  padding: 1.25rem; 
  background-color: #ffffff;
  border-radius: 8px; 
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); 

  h1 {
    font-size: 2rem; 
    color: #fff;
    background-color: #2a4f6a;
    border-radius: 8px; 
    padding: 0.625rem 1.25rem; 
    margin-bottom: 1.25rem; 
  }

  p {
    font-size: 1.125rem; 
    color: #333;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 0.9375rem; 

    h1 {
      font-size: 1.75rem; 
      padding: 0.5rem 1rem; 
    }

    p {
      font-size: 1rem; 
    }
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 0.75rem; 

    h1 {
      font-size: 1.5rem; 
      padding: 0.375rem 0.75rem; 
    }

    p {
      font-size: 0.875rem; 
    }
  }
`;

export const DogImageContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  img {
    max-width: 600px; 
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    position: relative;
    margin-top: 1.25rem; 
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 480px) {
    position: relative;
    margin-top: 0.625rem; 
    img {
      max-width: 300px;
    }
  }
`;
