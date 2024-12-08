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
} from "./agendaStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { useUserData } from "../../hooks/useUserData";
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
  const [appointmentToConfirm, setAppointmentToConfirm] = useState(null);
  const { userData } = useUserData();

  // Verificar permissões de usuário
  // useEffect(() => {
  //   if (!userType || userType !== "clinica") {
  //     alert("Você não tem permissão para acessar esta página.");
  //     navigate("/login");
  //   }
  // }, [userType, navigate]);

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
        animalType: appointment.animal.type,
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
    title: `${appointmentsForDay.length} consulta${
      appointmentsForDay.length > 1 ? "s" : ""
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
      await axios.delete(`/api/appointments/${appointmentToCancel.id}`);
      setAppointments((prevAppointments) =>
        prevAppointments.map((app) =>
          app.id === appointmentToCancel.id
            ? { ...app, status: "CANCELADO" }
            : app
        )
      );
      setIsCancelModalOpen(false);
      setIsCancelledNotificationOpen(true);
    } catch (error) {
      console.error("Erro ao cancelar a consulta:", error);
    }
  };
  const handleConfirmAppointment = async (appointment) => {
    try {
      const response = await api.put(
        `/agendamento/atendimento/${appointment.partner.id}/${appointment.id}`,
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
              <img
                src="https://via.placeholder.com/150"
                alt="Clínica"
                style={{ borderRadius: "10px", marginRight: "20px" }}
              />
              <AppointmentDetails>
                <AppointmentCardType>
                  <AppointmentType>{appointment.servico.name}</AppointmentType>
                  <StatusBadge status={appointment.status}>
                    {appointment.status}
                  </StatusBadge>
                </AppointmentCardType>
                <AppointmentDetailsInfoCard>
                  <AppointmentDetailsInfo>
                    <p>
                      <strong>Nome Tutor:</strong> {appointment.user.name}
                    </p>
                    <p>
                      <strong>Data:</strong> {appointment.dataAgendamento}
                    </p>
                    <p>
                      <strong>Horário:</strong> {appointment.horaInicio}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {appointment.user.phone}
                    </p>
                  </AppointmentDetailsInfo>
                  <AppointmentDetailsInfo>
                    <p>
                      <strong>Nome Pet:</strong> {appointment.animal.name}
                    </p>
                    <p>
                      <strong>Idade:</strong> {appointment.animal.age}
                    </p>
                    <p>
                      <strong>Sexo:</strong> {appointment.animal.sexo}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {appointment.animal.type}
                    </p>
                  </AppointmentDetailsInfo>
                </AppointmentDetailsInfoCard>
              </AppointmentDetails>

              <ButtonContainer>
                <ConfirmButton
                  onClick={() => {
                    setAppointmentToConfirm(appointment);
                    setIsConfirmModalOpen(true);
                  }}
                >
                  Confirmar Agendamento
                </ConfirmButton>
                <CancelButton
                  onClick={() => {
                    handleCancelClick(appointment), setShowCancelModal(true);
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

      {isModalOpen && selectedAppointment && (
        <Modal>
          <ModalContent>
            <h2>
              Consultas do dia{" "}
              {new Date(
                selectedAppointment[0].dataAgendamento
              ).toLocaleDateString("pt-BR")}
            </h2>
            {selectedAppointment.map((appointment) => (
              <AppointmentCard key={appointment.id}>
                <AppointmentCardType>
                  <AppointmentType>{appointment.servico.name}</AppointmentType>
                  <StatusBadge status={appointment.status}>
                    {appointment.status}
                  </StatusBadge>
                </AppointmentCardType>
                <AppointmentDetailsInfoCard>
                  <AppointmentDetailsInfo>
                    <p>
                      <strong>Horário:</strong> {appointment.horaInicio}
                    </p>
                    <p>
                      <strong>Pet:</strong> {appointment.animal.name}
                    </p>
                    <p>
                      <strong>Tutor:</strong> {appointment.user.name}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {appointment.user.phone}
                    </p>
                  </AppointmentDetailsInfo>
                </AppointmentDetailsInfoCard>
              </AppointmentCard>
            ))}
            <ModalButtonContainer>
              <ConfirmButton onClick={() => setIsModalOpen(false)}>
                Fechar
              </ConfirmButton>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      )}

      {isCancelModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Confirmação de Cancelamento</h2>
            <p>
              Deseja cancelar o agendamento de{" "}
              {appointmentToConfirm.servico.name}?
            </p>
            <p>Pet: {appointmentToConfirm.animal.name}</p>
            <p>Data: {appointmentToConfirm.dataAgendamento}</p>
            <p>Horário: {appointmentToConfirm.horaInicio}</p>
            <ModalButtonContainer>
              <CancelButton onClick={confirmCancel}>Sim</CancelButton>
              <ConfirmButton onClick={() => setIsCancelModalOpen(false)}>
                Não
              </ConfirmButton>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      )}

      {isCancelledNotificationOpen && (
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
      )}

      {isConfirmModalOpen && appointmentToConfirm && (
        <Modal>
          <ModalContent>
            <h2>Confirmar Agendamento</h2>
            <p>
              Deseja confirmar o agendamento de{" "}
              {appointmentToConfirm.servico.name}?
            </p>
            <p>Pet: {appointmentToConfirm.animal.name}</p>
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
      )}
    </Container>
  );
}
