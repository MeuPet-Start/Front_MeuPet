import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import hospital from "../../assets/hospital.png";
import { FaRegClock, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import {
  Main,
  Background,
  Container,
  ContainerHeader,
  Card,
  ServiceCardtags,
  Info,
  Image,
  ButtonContainer,
  MapButton,
  CancelButton,
  Modal,
  ModalContent,
  ModalButtonContainer,
  ConfirmButton,
} from "./historicostyle";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useUserType } from "../../hooks/useUserType";
import { useUserData } from "../../hooks/useUserData";
import { useNavigate } from "react-router-dom";

const MinhasConsulta = () => {
  const [consultas, setConsultas] = useState([]);
  const { userEmail } = useUserType();
  const { userData } = useUserData();
  const navigate = useNavigate();
  const userId = userData.id;

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedConsultaId, setSelectedConsultaId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllConsultas, setShowAllConsultas] = useState(false);

  const handleShowMore = () => {
    setShowAllConsultas(!showAllConsultas);
  };

  const handleCancelAppointment = async (id) => {
    setIsLoading(true);
    try {
      await api.put(`/agendamento/cancel/${id}`, {
        status: "CANCELED",
      });
      setConsultas(consultas.filter((consulta) => consulta.id !== id));
      setShowCancelModal(false);
    } catch (error) {
      console.error("Erro ao cancelar consulta:", error);
      alert("Erro ao cancelar consulta. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMapRedirect = (endereco) => {
    const formattedAddress = encodeURIComponent(endereco);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`,
      "_blank"
    );
  };

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
      animalType: consulta.animal.type,
    }));

    if (filteredData.partnerName == "") {
      setConsultas();
    }
    setConsultas(filteredData);
  }

  useEffect(() => {
    if (userData) {
      if (userData.userType === "clinic") {
        navigate("/");
      } else {
        handleConsulta();
      }
    }
  }, [userData]);

  return (
    <>
      <Main>
        <ContainerHeader>
          <Header />
        </ContainerHeader>
        <Background>
          <section className="background_White">
            <Container>
              <h1>Minhas Consultas</h1>
            </Container>
            {consultas
              .slice(0, showAllConsultas ? consultas.length : 5)
              .map((consulta) => (
                <Card key={consulta.id}>
                  <Image src={hospital} alt="Clínica" />
                  <Info>
                    <div className="container_categoria">
                      <h2>{consulta.partnerName}</h2>
                      <ServiceCardtags>
                        <span>{consulta.servicoName}</span>
                      </ServiceCardtags>
                      <div className="detalhes">
                        <p>
                          <FaRegClock />
                          {consulta.horaInicio}
                        </p>
                        <p>
                          <FaMapMarkerAlt /> {consulta.endereco}
                        </p>
                        <p>
                          <FaRegCalendarAlt />
                          {consulta.dataAgendamento}
                        </p>
                      </div>
                    </div>
                    <ButtonContainer>
                      <MapButton
                        onClick={() => handleMapRedirect(consulta.endereco)}
                      >
                        Como chegar
                      </MapButton>
                      <CancelButton
                        onClick={() => {
                          setSelectedConsultaId(consulta.id);
                          setShowCancelModal(true);
                        }}
                      >
                        Cancelar consulta
                      </CancelButton>
                    </ButtonContainer>
                  </Info>
                </Card>
              ))}
            {consultas.length > 5 && (
              <ButtonShowMore onClick={handleShowMore}>
                {showAllConsultas
                  ? "Ver menos consultas"
                  : "Ver mais consultas"}
              </ButtonShowMore>
            )}
          </section>
          {showCancelModal && (
            <Modal>
              <ModalContent>
                <h2>Confirmar Cancelamento</h2>
                <p>Tem certeza que deseja cancelar esta consulta?</p>
                <ModalButtonContainer>
                  <CancelButton
                    onClick={() => setShowCancelModal(false)}
                    disabled={isLoading}
                  >
                    Voltar
                  </CancelButton>
                  <ConfirmButton
                    onClick={() => handleCancelAppointment(selectedConsultaId)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Cancelando..." : "Confirmar"}
                  </ConfirmButton>
                </ModalButtonContainer>
              </ModalContent>
            </Modal>
          )}
        </Background>
        <Footer />
      </Main>
    </>
  );
};

export default MinhasConsulta;
