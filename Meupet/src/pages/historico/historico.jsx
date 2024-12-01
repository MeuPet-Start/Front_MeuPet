import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import hospital from "../../assets/hospital.png";
import { FaRegClock, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Background, Container, Card, Categoria, Info, Image } from "./historicostyle";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const MinhasConsulta = () => {
  const [consultas,setConsultas] = useState([])

  async function handleConsulta() {
    const response = await api.get("/agendamento/atendimento")
    setConsultas(response.data)
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
          <Card>
            <Image src={hospital} alt="Clínica" />
            <Info>
            <div className="container_categoria">
              <Categoria>CASTRAÇÃO</Categoria>
              <h2>Centro Médico Veterinário</h2>
              <div className="detalhes">
              <p><FaRegClock /> 8h</p>
              <p><FaMapMarkerAlt /> Rua Riachão 53 - Várzea</p>
              <p><FaRegCalendarAlt /> 28/11/2024</p>
              </div>
              </div>
              <button>Como chegar</button>
            </Info>
          </Card>

        </section>
      </Background>
      <Footer />
    </>
  );
};

export default MinhasConsulta;