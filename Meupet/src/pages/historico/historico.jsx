import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import hospital from "../../assets/hospital.png";
import { FaRegClock, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Background, Container, Card, Categoria, Info, Image } from "./historicostyle";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useUserType } from "../../hooks/useUserType";
import { useUserData } from "../../hooks/useUserData";
import { useNavigate } from "react-router-dom";



const MinhasConsulta = () => {
  const [consultas, setConsultas] = useState([{}])
  const { userEmail } = useUserType();
  const { userData } = useUserData();
  const navigate = useNavigate();
  const userId = userData.id;

  // console.log(userData.id)

  async function handleConsulta() {
    
    const response = await api.get(`/agendamento/atendimento/user/${userId}`);

    console.log(response.data);
    const filteredData = response.data.map((consulta) => ({
      id: consulta.id,
      dataAgendamento: consulta.dataAgendamento,
      horaInicio: consulta.horaInicio,
      status: consulta.status,
      partnerName: consulta.partner.name,
      servicoName: consulta.servico.name,
      animalName: consulta.animal.name,
      animalType: consulta.animal.type
    }));
    
    if(filteredData.partnerName == "") {
      setConsultas()
    }
    setConsultas(filteredData);
  }


  useEffect(() => {
    if (userData) {
      if (userData.userType === "clinic") {
        navigate("/"); // Redireciona para a tela inicial
      } else {
        handleConsulta();
      }
    }
  }, [userData]);

  return (
    <>
      <Header />
      <Background>
        <section className="background_White">
          <Container>
            <h1>Minhas Consultas</h1>
          </Container>
          {consultas.map((consulta) => (
          <Card key={consulta.id}>
            <Image src={hospital} alt="Clínica" />
          
            <Info>
            <div className="container_categoria">
              <Categoria>{consulta.servicoName}</Categoria>
              <h2>{consulta.partnerName}</h2>
              <div className="detalhes">
                <p><FaRegClock />{consulta.horaInicio}</p>
                <p><FaMapMarkerAlt /> Rua Riachão 53 - Várzea</p>
                <p><FaRegCalendarAlt />{consulta.dataAgendamento}</p>
              </div>
            </div>
            <button>Como chegar</button>
            </Info>
          </Card>
            ))}

        </section>
      </Background>
      <Footer />
    </>
  );
};

export default MinhasConsulta;