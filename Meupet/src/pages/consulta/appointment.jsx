//  import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import Input from "../../components/input/input";
// import Sections from "../../components/sections/sections";
import {Swiper,SwiperSlide} from 'swiper/react';
import carrossel1 from "../../assets/carrossel1.png";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";
import cantinhodafilo from "../../assets/cantinhodafilo.png";
import { HeaderSection, MainForm, InputGrid, ButtonGroup,SlideItem, TextBlock } from "./appointmentstyle";
import "swiper/css"


const Appointment = () => {
 
  const data =[
    {id:'1', image:carrossel1},
    {id:'2', image:carrossel2},
    {id:'3', image:carrossel3}
  ]
 
  return (
    <>

      <Header></Header>

      <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable:true}}
            navigation
      >  
            
        {data.map((item) =>(
          <SwiperSlide key={item.id}>
          <SlideItem
          src={item.image}
           alt="Veterinário com Cachorro" 
           className="slide-item">
           </SlideItem>
          
        </SwiperSlide>
        )
       )
        }
      </Swiper>


      <HeaderSection>
        <div>
          <img src={cantinhodafilo} alt="Clínica" />

          <TextBlock>
          <h1>Centro Médico Veterinário</h1>
          <h2>Saúde e cuidado para o seu pet.</h2>
          <p>Várzea | 3 Serviços inclusos | (81) 3440-0443</p>
          <p>Atendimento das 8h às 18h</p>
          </TextBlock>
          
        </div>
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
          <div className="divInputRadio">
            <label>Tipo do Animal</label>
            <div className="inputRadio">           
              <label>Cachorro</label>           
              <input type="RADIO" name="animalGenero" value="op1"/> 
          </div>
          <div className="inputRadio">           
              <label>Gato</label>           
              <input type="RADIO" name="animalGenero" value="op1"/> 
          </div>
          </div>
          <div className="divInputRadio">
            <label>Gênero do Animal</label>
            <div className="inputRadio">
                <label>Macho</label>           
                <input type="RADIO" name="animalGenero" value="op1"/> 
                
            </div>
            <div className="inputRadio"> 
              <label>Fêmea</label>
              <input type="RADIO" name="animalGenero" value="op2"/> 
            </div>
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
