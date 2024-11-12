import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #00316a;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #85ba47;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #00316a;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #002554;
  }
`;

export const DogImage = styled.img`
  position: absolute;
  right: 20px;
  bottom: 0;
  width: 200px;
`;