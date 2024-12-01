import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import hospital from "../../assets/hospital.png";
import { FaRegClock, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Background, Container, Card, Categoria, Info, Image } from "./historicostyle";
import { useEffect, useState } from "react";
import { api } from "../../services/api";



const MinhasConsulta = () => {
  const [consultas, setConsultas] = useState([{}])


  async function handleConsulta() {

    const response = await api.get("/agendamento/atendimento/user/" + "73a07354-dfde-4088-8cb0-f98a5dfd6242");

    console.log(response.data);
    const filteredData = response.data.map((consulta) => ({
      id: consulta.id,
      dataAgendamento: consulta.dataAgendamento,
      horaInicio: consulta.horaInicio,
      status: consulta.status,
      partnerName: consulta.partner.name,
      servicoName: consulta.servico.name,
      animalName: consulta.animal.name,
      animalType: consulta.animal.type,
    }));
    setConsultas(filteredData);
  }




  useEffect(() => {
    handleConsulta()
  }, [])

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