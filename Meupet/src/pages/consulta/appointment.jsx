import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Input from "../../components/input/input";
import Sections from "../../components/sections/sections";
import carrossel1 from "../../assets/carrossel1.png";
import cantinhodafilo from "../../assets/cantinhodafilo.png";
import { HeaderSection, MainForm, InputGrid, ButtonGroup, CarrosselImage } from "./appointmentstyle";

const Appointment = () => {
  return (
    <>
      <CarrosselImage>
        <img src={carrossel1} alt="Veterinário com Cachorro" />
      </CarrosselImage>

      <HeaderSection>
        <img src={cantinhodafilo} alt="Clínica" />
        <h1>Centro Médico Veterinário</h1>
        <h2>Saúde e cuidado para o seu pet.</h2>
        <p>Várzea | 3 Serviços inclusos | (81) 3440-0443</p>
        <p>Atendimento das 8h às 18h</p>
      </HeaderSection>

      <MainForm>
        <h2>Serviço de Agendamento</h2>
        <InputGrid>
          <div>
            <label>CPF</label>
            <input type="text" placeholder="Insira seu CPF" />
          </div>
          <div>
            <label>Nome Completo</label>
            <input type="text" placeholder="ex: Maria Clara" />
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" placeholder="ex: 81 99576-1234" />
          </div>
          <div>
            <label>Selecione o bairro</label>
            <input type="text" placeholder="ex: Ibura" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="email" placeholder="ex: maria@gmail.com" />
          </div>
          <div>
            <label>Confirmar E-mail</label>
            <input type="email" placeholder="ex: maria@gmail.com" />
          </div>
          <div>
            <label>Idade do responsável pelo animal</label>
            <input type="number" placeholder="Idade" />
          </div>
          <div>
            <label>Tipo do Animal</label>
            <input type="text" placeholder="ex: Cachorro" />
          </div>
          <div>
            <label>Gênero do Animal</label>
            <input type="text" placeholder="ex: Macho" />
          </div>
          <div>
            <label>Observação</label>
            <textarea placeholder="ex: meu pet está doente há vários dias"></textarea>
          </div>
        </InputGrid>

        <ButtonGroup>
          <button className="primary">Marcar Consulta</button>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
            <button className="secondary">Ver Como Chegar</button>
          </a>
        </ButtonGroup>
      </MainForm>

      <Footer />
    </>
  );
};

export default Appointment;
