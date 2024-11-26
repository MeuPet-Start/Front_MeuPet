import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {Swiper,SwiperSlide} from 'swiper/react';
import carrossel1 from "../../assets/carrossel1.png";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";
import Cemevet from "../../assets/Cemevet.png";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { BsClipboardCheck } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { HeaderSection, MainForm, InputGrid, ButtonGroup,SlideItem } from "./appointmentstyle";
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

      <HeaderSection>
        <div>
          <img src={Cemevet} alt="Clínica" />

          <div className="text">
            <h1>Centro Médico Veterinário</h1>
            <h2>Sua Clínica Veterinária: Saúde e Cuidado para o seu Pet</h2>
            <div>
              <PiStethoscopeDuotone />
              <p><strong> +4 Serviços Inclusos: </strong> Consultas,Exames e Cirurgias</p>
            </div> 
            <div>
              <BsClipboardCheck />
              <p><strong>Atendimento: Das 8h às 18h,</strong>todos os dias</p>
            </div> 
            <div>
              <MdLocalPhone />
              <p>Em caso de urgências, ligue: <strong>(81) 3440-0443</strong></p>
            </div> 
          </div>
          
        </div>
      </HeaderSection>

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

      <MainForm>
        <div>
           <h1>Serviços de Agendamento</h1>
           <h2>Preencha Rapidamente as informações de seu Pet e <strong> Agende com Facilidade:</strong></h2>
        </div>
        <InputGrid>
          <div>
            <h1>Informações do Animal:</h1>
            <div>
              <div>
                <h1>Tipo do animal:</h1>
                <input type="checkbox" id="cachorro" /> 
                <label for= "cachorro">Cachorro </label>  
                <input type="checkbox" id="gato" /> 
                <label for= "gato">Gato </label>  
              </div>
              <div>
                <h1>Gênero do Pet::</h1>
                <input type="checkbox" id="femea" /> 
                <label for= "femea">Fêmea </label>  
                <input type="checkbox" id="macho" /> 
                <label for= "macho">Macho</label>  
              </div>
            </div>
          </div>
          <div>
            <label>Nome do Pet</label>
            <input type="text" placeholder="Insira o nome do seu Pet" />
          </div>
          <div>
            <label>Idade</label>
            <input type="email" placeholder="Exemplo: 3 anos" />
          </div>
          <div>
            <label>Histórico médico relevante (se houver).</label>
            <input type="email" placeholder="Insira aqui as informações adicionais sobre o seu Pet" />
          </div>
          <div>
            <h1>Detalhes do serviço: </h1>
            </div>
            <div>
                <h1>Tipo do animal:</h1>
                <input type="checkbox" id="consulta" /> 
                <label for= "consulta">Consulta </label>  
                <input type="checkbox" id="exames" /> 
                <label for= "exames">Exames</label>  
                <input type="checkbox" id="vacinas" /> 
                <label for= "vacinas">Vacinas</label>  
              </div>
          <div>
            <label>Data do Serviço</label>
            <input type="number" placeholder="Data" />
          </div>
          <div>
            <label>Horários</label>
            <textarea placeholder="Horários"></textarea>
          </div>
        </InputGrid>

        <ButtonGroup>
          <button className="primary">Efetuar Marcação</button>
        </ButtonGroup>
      </MainForm>

      <Footer />
    </>
  );
};

export default Appointment;
