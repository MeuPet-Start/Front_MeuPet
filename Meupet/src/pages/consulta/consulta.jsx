
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import carrossel1 from "../../assets/carrossel1.png";
import carrossel2 from "../../assets/carrossel2.png";
import carrossel3 from "../../assets/carrossel3.png";
import Cemevet from "../../assets/Cemevet.png";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { BsClipboardCheck } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { useNavigate } from "react-router"; 
import { useFormik } from 'formik';
import { HeaderSection, MainForm, InputGrid, ButtonGroup, SlideItem } from "./consultastyle";
import "swiper/css"
import axios from "axios";

const Consulta = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/confirmacao");  
  };

  const data = [
    { id: '1', image: carrossel1 },
    { id: '2', image: carrossel2 },
    { id: '3', image: carrossel3 },
  ];

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("https://seu-backend.com/api/agendamento", values);
      alert("Agendamento realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao realizar o agendamento. Tente novamente.");
    }
  };

  const formik = useFormik({
    initialValues: {
      nomePet: "",
      idade: "",
      historico: "",
      tipoAnimal: [],
      generoPet: "",
      tipoServico: [],
      data: "",
      horarios: ""
    },
    onSubmit: handleSubmit
  });
  return (
    <>
      <Header />
      
      <HeaderSection>
        <div>
          <img src={Cemevet} alt="Clínica" />
          <div className="text">
            <h1>Centro Médico Veterinário</h1>
            <h2>Sua Clínica Veterinária: Saúde e Cuidado para o seu Pet</h2>
            <div className="divInformacoes">
              <PiStethoscopeDuotone className="headerIcones" />
              <p><strong> +4 Serviços Inclusos: </strong> Consultas, Exames e Cirurgias</p>
            </div>
            <div className="divInformacoes">
              <BsClipboardCheck className="headerIcones" />
              <p><strong>Atendimento: Das 8h às 18h,</strong> todos os dias</p>
            </div>
            <div className="divInformacoes">
              <MdLocalPhone className="headerIcones" />
              <p>Em caso de urgências, ligue: <strong>(81) 3440-0443</strong></p>
            </div>
          </div>
        </div>
      </HeaderSection>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideItem
              src={item.image}
              alt="Veterinário com Cachorro"
              className="slide-item"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <MainForm onSubmit={formik.handleSubmit}>
        <div className="tituloFormulario">
          <h1>Serviços de Agendamento</h1>
          <h2>Preencha Rapidamente as informações de seu Pet e <strong>Agende com Facilidade:</strong></h2>
        </div>
        
        
        <InputGrid>
          <div>
            <h1 className="textgreen">Informações do Animal:</h1>
            <div className="checkboxArea">
              <h1>Tipo do animal:</h1>
              <input type="checkbox" id="cachorro" name="tipoAnimal" value="Cachorro" onChange={formik.handleChange} />
              <label for="cachorro">Cachorro</label>
              <input type="checkbox" id="gato" name="tipoAnimal" value="Gato" onChange={formik.handleChange} />
              <label for="gato">Gato</label>

              <h1 className="segundoTitulo">Gênero do Pet:</h1>
              <input type="radio" id="femea"  name="generoPet" value="F" onChange={formik.handleChange} />
              <label for="radio">Fêmea</label>
              <input type="radio" id="macho"  name="generoPet" value="M" onChange={formik.handleChange} />
              <label for="macho">Macho</label>
            </div>
          </div>

          <div className="divContain">
            <div className="divForm">
              <label>Nome do Pet</label>
              <input type="text" name="nome do Pet" placeholder="Insira o nome do seu Pet" onChange={formik.handleChange} value={formik.values.nomePet} />
            </div>
            <div className="divForm">
              <label>Idade</label>
              <input type="number" name="idade" placeholder="Exemplo: 3 anos" onChange={formik.handleChange} value={formik.values.idade} />
            </div>
            <div className="divForm">
              <label>Histórico médico relevante (se houver).</label>
              <input type="text" name="historico médico"  placeholder="Insira aqui as informações adicionais sobre o seu Pet" onChange={formik.handleChange} value={formik.values.historico}/>
            </div>
          </div>

          <div>
            <h1 className="textgreen detalhes">Detalhes do serviço: </h1>
          </div>
          
          <div className="checkboxArea">
            <h1>Tipo do serviço:</h1>
            <input type="checkbox" id="consulta"  name="tipoServico" value="consulta" onChange={formik.handleChange} />
            <label for="consulta">Consulta</label>
            <input type="checkbox" id="exames"  name="tipoServico" value="exame" onChange={formik.handleChange} />
            <label for="exames">Exames</label>
            <input type="checkbox" id="vacinas" name="tipoServico" value="vacina" onChange={formik.handleChange}  />
            <label for="vacinas">Vacinas</label>
          </div>

          <div className="divContain">
            <div className="divForm">
              <label>Data do Serviço</label>
              <input type="date" name="data do serviço" placeholder="Data :" onChange={formik.handleChange} value={formik.values.data} />
            </div>
            <div className="divForm">
              <label>Horários</label>
              <input type="time" name="horario" placeholder="Horários" onChange={formik.handleChange} value={formik.values.horarios} ></input>
            </div>
          </div>
        </InputGrid>

        <ButtonGroup>
          <button onClick={handleButtonClick}>Efetuar Marcação</button>
        </ButtonGroup>
      </MainForm>

      <Footer />
    </>
  );
};

export default Consulta;
