import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  Container,
  ContainerHeader,
  SectionHero,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CalendarSection,
  AppointmentSubtitle,
  AppointmentInfoContainer,
  AppointmentCard,
  AppointmentDetails,
  AppointmentType,
  CancelButton,
  ConfirmButton,
  Calendar,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalButtonContainer,
  StatusBadge,
  AppointmentDetailsInfo,
  AppointmentDetailsInfoCard,
  AppointmentCardType,
  ButtonContainer,
  AppointmentCardTypeModal,
  AppointmentCardModal,
  AppointmentDetailsInfoModal,
  ModalTitle,
  AppointmentCardContent,
  AppointmentCardInfoContent,
} from "./agendaStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useUserData } from "../../hooks/useUserData";
import { useUserType } from "../../hooks/useUserType";
import { api } from "../../services/api";

export function Agenda() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelledNotificationOpen, setIsCancelledNotificationOpen] =
    useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [appointmentToConfirm, setAppointmentToConfirm] = useState({});
  const { userData } = useUserData();
  const { userType } = useUserType();
  const [concludedAppointments, setConcludedAppointments] = useState([]);

  const handleConcludeAppointment = async (appointment) => {
    try {
      const response = await api.put(
        `/agendamento/atendimento/${appointment.partnerId}/${appointment.id}`,
        {
          status: "CONCLUIDO"
        }
      );
      if (response.status === 200) {
        setAppointments(appointments.map(app =>
          app.id === appointment.id
            ? { ...app, status: "CONCLUIDO" }
            : app
        ));
      }
    } catch (error) {
      console.error("Erro ao concluir consulta:", error);
      alert("Erro ao concluir consulta. Tente novamente."); x
    }
  };

  useEffect(() => {
    if (userType && userType !== "clinic") {
      alert("Você não tem permissão para acessar esta página.");
      navigate("/");
    }
  }, [userType, navigate]);

  const fetchAppointments = async () => {
    try {
      const response = await api.get(
        `/agendamento/atendimento/partner/${userData.id}`
      );
      console.log(userData.id);

      const formattedAppointments = response.data.map((appointment) => ({
        id: appointment.id,
        dataAgendamento: appointment.dataAgendamento,
        horaInicio: appointment.horaInicio.slice(0, 5), // Format time to HH:mm
        horaFim: appointment.horaFim,
        status: appointment.status.toUpperCase(),
        partnerId: appointment.partner.id,
        userName: appointment.user.name,
        endereco: appointment.partner.address,
        servicoName: appointment.servico.name,
        animalName: appointment.animal.name,
        animalAge: appointment.animal.age,
        animalType: appointment.animal.type,
        animalGender: appointment.animal.sexo,
        phone: appointment.user.phone,
      }));

      // Optional: Filter out canceled appointments
      const activeAppointments = formattedAppointments.filter(
        (appointment) => appointment.status !== "CANCELADO"
      );

      setAppointments(activeAppointments);
    } catch (error) {
      console.error("Erro ao buscar agendamentos:", error);
    }
  };

  useEffect(() => {
    if (userData && userData.id) {
      fetchAppointments();
    }
  }, [userData]);

  const groupAppointmentsByDate = (appointments) => {
    return appointments.reduce((acc, appointment) => {
      const date = appointment.dataAgendamento;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(appointment);
      return acc;
    }, {});
  };

  // Update calendar events mapping
  const calendarEvents = Object.entries(
    groupAppointmentsByDate(appointments)
  ).map(([date, appointmentsForDay]) => ({
    date,
    title: `${appointmentsForDay.length} consulta${appointmentsForDay.length > 1 ? "s" : ""
      }`,
    backgroundColor: "#2A4F6A",
    borderColor: "#1c3d53",
    extendedProps: {
      appointments: appointmentsForDay,
    },
  }));
  const handleEventClick = (eventInfo) => {
    const appointmentsForDay = eventInfo.event.extendedProps.appointments;
    setSelectedAppointment(appointmentsForDay);
    setIsModalOpen(true);
  };

  const handleCancelClick = (appointment) => {
    setAppointmentToCancel(appointment);
    setIsCancelModalOpen(true);
  };

  const confirmCancel = async () => {
    try {
      await api.put(`/agendamento/atendimento/${appointmentToCancel.partnerId}/${appointmentToCancel.id}`,
        {
          status: "CANCELADO",
        });
      setIsCancelModalOpen(false);
      setIsCancelledNotificationOpen(true);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cancelar a consulta:", error);
    }
  };
  const handleConfirmAppointment = async (appointment) => {
    try {
      const response = await api.put(
        `/agendamento/atendimento/${appointment.partnerId}/${appointment.id}`,
        {
          status: "CONFIRMADO",
        }
      );

      if (response.status === 200) {
        // Update local state
        setAppointments(
          appointments.map((app) =>
            app.id === appointment.id ? { ...app, status: "CONFIRMADO" } : app
          )
        );

        setIsConfirmModalOpen(false);
        alert("Agendamento confirmado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao confirmar agendamento:", error);
      alert("Erro ao confirmar agendamento. Tente novamente.");
    }
  };

  return (
    <Container>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <SectionHero>
        <HeroContent>
          <HeroTitle>Agenda de Consultas</HeroTitle>
          <HeroSubtitle>
            Acompanhe aqui as consultas agendadas da sua clínica.
          </HeroSubtitle>
        </HeroContent>
      </SectionHero>

      <CalendarSection>
        <Calendar>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={calendarEvents}
            eventClick={handleEventClick}
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            eventContent={(eventInfo) => (
              <div
                style={{
                  padding: "2px",
                  fontSize: "0.85em",
                  lineHeight: "1.3",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <div style={{ fontWeight: "bold" }}>{eventInfo.timeText}</div>
                <div>{eventInfo.event.title}</div>
                <div
                  style={{
                    backgroundColor:
                      eventInfo.event.extendedProps.status === "PENDENTE"
                        ? "#FFA500"
                        : "#4CAF50",
                    color: "white",
                    padding: "2px 4px",
                    borderRadius: "3px",
                    marginTop: "2px",
                    fontSize: "0.8em",
                  }}
                >
                  {eventInfo.event.extendedProps.status}
                </div>
              </div>
            )}
            eventDidMount={(info) => {
              info.el.style.fontSize = "0.85em";
              info.el.style.cursor = "pointer";
            }}
          />
        </Calendar>
      </CalendarSection>

      <AppointmentInfoContainer>
        <AppointmentSubtitle>
          Acompanhe aqui as consultas agendadas da sua clínica.
        </AppointmentSubtitle>
        {appointments.filter((appointment) => appointment).length > 0 ? (
          appointments.map((appointment, index) => (
            <AppointmentCard key={index}>
              <AppointmentDetails>
                <AppointmentCardType>
                  <AppointmentType>{appointment.servicoName}</AppointmentType>
                  <StatusBadge status={appointment.status}>
                    {appointment.status}
                  </StatusBadge>
                </AppointmentCardType>
                <AppointmentDetailsInfoCard>
                  <AppointmentDetailsInfo>
                    <p>
                      <strong>Nome Tutor:</strong> {appointment.userName}
                    </p>
                    <p>
                      <strong>Data:</strong> {appointment.dataAgendamento}
                    </p>
                    <p>
                      <strong>Horário:</strong> {appointment.horaInicio}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {appointment.phone}
                    </p>
                  </AppointmentDetailsInfo>
                  <AppointmentDetailsInfo>
                    <p>
                      <strong>Nome Pet:</strong> {appointment.animalName}
                    </p>
                    <p>
                      <strong>Idade:</strong> {appointment.animalAge}
                    </p>
                    <p>
                      <strong>Sexo:</strong> {appointment.animalGender}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {appointment.animalType}
                    </p>
                  </AppointmentDetailsInfo>
                </AppointmentDetailsInfoCard>
              </AppointmentDetails>

              <ButtonContainer>
                {appointment.status === "CONFIRMADO" ? (
                  <ConfirmButton
                    onClick={() => {
                      setAppointmentToConfirm(appointment);
                      handleConcludeAppointment(appointment);
                    }}
                  >
                    Concluir Consulta
                  </ConfirmButton>
                ) : (
                  <>
                    <ConfirmButton
                      onClick={() => {
                        setAppointmentToConfirm({
                          id: appointment.id,
                          dataAgendamento: appointment.dataAgendamento,
                          horaInicio: appointment.horaInicio.slice(0, 5),
                          horaFim: appointment.horaFim,
                          status: appointment.status.toUpperCase(),
                          partnerId: appointment.partnerId,
                          userName: appointment.userName,
                          endereco: appointment.endereco,
                          servicoName: appointment.servicoName,
                          animalName: appointment.animalName,
                          animalAge: appointment.animalAge,
                          animalType: appointment.animalType,
                          animalGender: appointment.animalGender,
                          phone: appointment.phone
                        });
                        setIsConfirmModalOpen(true);
                      }}
                    >
                      Confirmar Agendamento
                    </ConfirmButton>
                  </>
                )}
                <CancelButton
                  onClick={() => {
                    setAppointmentToCancel({
                      id: appointment.id,
                      dataAgendamento: appointment.dataAgendamento,
                      horaInicio: appointment.horaInicio.slice(0, 5),
                      horaFim: appointment.horaFim,
                      status: appointment.status.toUpperCase(),
                      partnerId: appointment.partnerId,
                      userName: appointment.userName,
                      endereco: appointment.endereco,
                      servicoName: appointment.servicoName,
                      animalName: appointment.animalName,
                      animalAge: appointment.animalAge,
                      animalType: appointment.animalType,
                      animalGender: appointment.animalGender,
                      phone: appointment.phone
                    });
                    setIsCancelModalOpen(true);
                  }}
                >
                  Cancelar Agendamento
                </CancelButton>
              </ButtonContainer>
            </AppointmentCard>
          ))
        ) : (
          <p>Não há agendamentos disponíveis.</p>
        )}
      </AppointmentInfoContainer>

      <Footer />
      {/* FIm tela */}


      {/* Modal visualizar consultas dia */}
      {
        isModalOpen && selectedAppointment && (
          <Modal>
            <ModalContent>
              <ModalTitle>
                <h2>
                  Consultas do dia{" "}
                  {new Date(
                    selectedAppointment[0].dataAgendamento
                  ).toLocaleDateString("pt-BR")}
                </h2>
              </ModalTitle>
              {selectedAppointment.map((appointment) => (
                <AppointmentCardModal key={appointment.id}>
                  <AppointmentCardContent>
                    <AppointmentCardInfoContent>
                      <AppointmentCardTypeModal>
                        <AppointmentType>{appointment.servicoName}</AppointmentType>
                        <StatusBadge status={appointment.status}>
                          {appointment.status}
                        </StatusBadge>
                      </AppointmentCardTypeModal>
                      <AppointmentDetailsInfoCard>
                        <AppointmentDetailsInfoModal>
                          <p>
                            <strong>Horário:</strong> {appointment.horaInicio}
                          </p>
                          <p>
                            <strong>Pet:</strong> {appointment.animalName}
                          </p>
                          <p>
                            <strong>Tutor:</strong> {appointment.userName}
                          </p>
                          <p>
                            <strong>Telefone:</strong> {appointment.phone}
                          </p>
                        </AppointmentDetailsInfoModal>
                      </AppointmentDetailsInfoCard>
                    </AppointmentCardInfoContent>
                    <ModalButtonContainer>
                      <ConfirmButton
                        onClick={() => {
                          setAppointmentToConfirm({
                            id: appointment.id,
                            dataAgendamento: appointment.dataAgendamento,
                            horaInicio: appointment.horaInicio.slice(0, 5), // Format time to HH:mm
                            horaFim: appointment.horaFim,
                            status: appointment.status.toUpperCase(),
                            partnerId: appointment.partnerId,
                            userName: appointment.userName,
                            endereco: appointment.endereco,
                            servicoName: appointment.servicoName,
                            animalName: appointment.animalName,
                            animalAge: appointment.animalAge,
                            animalType: appointment.animalType,
                            animalGender: appointment.animalGender,
                            phone: appointment.phone
                          });
                          setIsConfirmModalOpen(true);
                        }}
                      >
                        Confirmar
                      </ConfirmButton>
                      <CancelButton
                        onClick={() => {
                          setAppointmentToConfirm({
                            id: appointment.id,
                            dataAgendamento: appointment.dataAgendamento,
                            horaInicio: appointment.horaInicio.slice(0, 5), // Format time to HH:mm
                            horaFim: appointment.horaFim,
                            status: appointment.status.toUpperCase(),
                            partnerId: appointment.partnerId,
                            userName: appointment.userName,
                            endereco: appointment.endereco,
                            servicoName: appointment.servicoName,
                            animalName: appointment.animalName,
                            animalAge: appointment.animalAge,
                            animalType: appointment.animalType,
                            animalGender: appointment.animalGender,
                            phone: appointment.phone
                          });
                          setIsCancelModalOpen(true);
                        }}
                      >
                        Cancelar
                      </CancelButton>
                    </ModalButtonContainer>
                  </AppointmentCardContent>
                </AppointmentCardModal>
              ))}
              <ModalButtonContainer>
                <ConfirmButton onClick={() => setIsModalOpen(false)}>
                  Fechar
                </ConfirmButton>
              </ModalButtonContainer>
            </ModalContent>
          </Modal>
        )
      }

      {/* Modal cancela */}

      {
        isCancelModalOpen && (
          <Modal>
            <ModalContent>
              <h2>Confirmação de Cancelamento</h2>
              <p>
                Deseja cancelar o agendamento de{" "}
                {appointmentToConfirm.servicoName}?
              </p>
              <p>Pet: {appointmentToConfirm.animalName}</p>
              <p>Data: {appointmentToConfirm.dataAgendamento}</p>
              <p>Horário: {appointmentToConfirm.horaInicio}</p>
              <ModalButtonContainer>
                <CancelButton onClick={() => setIsCancelModalOpen(false)}>
                  Não
                </CancelButton>
                <ConfirmButton onClick={() => {
                  handleCancelClick(appointmentToConfirm)
                  confirmCancel()
                }}>Sim</ConfirmButton>
              </ModalButtonContainer>
            </ModalContent>
          </Modal>
        )
      }

      {/* Modal confirmacao cancelamento */}

      {
        isCancelledNotificationOpen && (
          <Modal>
            <ModalContent>
              <h2>Consulta Cancelada</h2>
              <p>A consulta foi cancelada com sucesso!</p>
              <ModalCloseButton
                onClick={() => setIsCancelledNotificationOpen(false)}
              >
                Fechar
              </ModalCloseButton>
            </ModalContent>
          </Modal>
        )
      }

      {/* modal Confirma agendamento */}

      {
        isConfirmModalOpen && appointmentToConfirm && (
          <Modal>
            <ModalContent>
              <h2>Confirmar Agendamento</h2>
              <p>
                Deseja confirmar o agendamento de{" "}
                {appointmentToConfirm.servicoName}?
              </p>
              <p>Pet: {appointmentToConfirm.animalName}</p>
              <p>Data: {appointmentToConfirm.dataAgendamento}</p>
              <p>Horário: {appointmentToConfirm.horaInicio}</p>

              <ModalButtonContainer>
                <CancelButton onClick={() => setIsConfirmModalOpen(false)}>
                  Cancelar
                </CancelButton>
                <ConfirmButton
                  onClick={() => handleConfirmAppointment(appointmentToConfirm)}
                >
                  Confirmar
                </ConfirmButton>
              </ModalButtonContainer>
            </ModalContent>
          </Modal>
        )
      }
    </Container >
  );
}
