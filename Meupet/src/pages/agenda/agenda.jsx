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
  CancelledStatus,
  ConfirmadStatus,
} from "./agendaStyle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import axios from 'axios';
import { useUserData } from "../../hooks/useUserData";
import { api } from "../../services/api";

export function Agenda() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelledNotificationOpen, setIsCancelledNotificationOpen] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);
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
      const response = await api.get(`/agendamento/atendimento/partner/${userData.id}`);
      console.log(userData.id)

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
        phone: appointment.user.phone
      }));

      // Optional: Filter out canceled appointments
      const activeAppointments = formattedAppointments.filter(
        appointment => appointment.status !== "CANCELADO"
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

  const calendarEvents = appointments.map((appointment) => ({
    title: `${appointment.type} - ${appointment.petName}`,
    date: appointment.date,
    extendedProps: {
      appointment,
    },
    backgroundColor: appointment.status === "CONFIRMADO" ? "#4caf50" : "#b90000",
  }));

  const handleEventClick = (eventInfo) => {
    const appointment = eventInfo.event.extendedProps.appointment;
    setSelectedAppointment(appointment);
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
          app.id === appointmentToCancel.id ? { ...app, status: "CANCELADO" } : app
        )
      );
      setIsCancelModalOpen(false);
      setIsCancelledNotificationOpen(true);
    } catch (error) {
      console.error("Erro ao cancelar a consulta:", error);
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
          <HeroSubtitle>Acompanhe aqui as consultas agendadas da sua clínica.</HeroSubtitle>
        </HeroContent>
      </SectionHero>

      <CalendarSection>
        <Calendar>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={calendarEvents}
            eventClick={handleEventClick}
            locale="pt"
            buttonText={{
              today: "Hoje",
            }}
            eventDidMount={(info) => {
              info.el.classList.add("pointer-cursor");
              info.el.style.cursor = "pointer";
              info.el.style.backgroundColor = info.event.backgroundColor;
              info.el.style.border = "none";
              info.el.style.fontWeight = "600";
              info.el.style.fontSize = "15px";
            }}
          />
        </Calendar>
      </CalendarSection>

      <AppointmentInfoContainer>
        <AppointmentSubtitle>Acompanhe aqui as consultas agendadas da sua clínica.</AppointmentSubtitle>
        {appointments.filter((appointment) => appointment.status === "PENDENTE").length > 0 ? (
          appointments
            .filter((appointment) => appointment.status === "PENDENTE")
            .map((appointment, index) => (
              <AppointmentCard key={index}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Clínica"
                  style={{ borderRadius: "10px", marginRight: "20px" }}
                />
                <AppointmentDetails>
                  <AppointmentType>{appointment.servicoName}</AppointmentType>
                  <p>
                    <strong>Nome:</strong> {appointment.userName}
                  </p>
                  <p>
                    <strong>Data:</strong> {new Date(appointment.dataAgendamento).toLocaleDateString("pt-BR")}
                  </p>
                  <p>
                    <strong>Horário:</strong> {appointment.horaInicio}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {appointment.phone}
                  </p>
                </AppointmentDetails>
                <AppointmentDetails>
                  {/* <AppointmentType>{appointment.servicoName}</AppointmentType> */}
                  <p>
                    <strong>Nome:</strong> {appointment.userName}
                  </p>
                  <p>
                    <strong>Data:</strong> {new Date(appointment.dataAgendamento).toLocaleDateString("pt-BR")}
                  </p>
                  <p>
                    <strong>Horário:</strong> {appointment.horaInicio}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {appointment.phone}
                  </p>
                </AppointmentDetails>
                <CancelButton onClick={() => handleCancelClick(appointment)}>Cancelar Agendamento</CancelButton>
              </AppointmentCard>
            ))
        ) : (
          <p>Não há agendamentos disponíveis.</p>
        )}
      </AppointmentInfoContainer>

      <Footer />

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Detalhes do Agendamento</h2>
            {selectedAppointment && (
              <>
                <p><strong>Tipo:</strong> {selectedAppointment.type}</p>
                <p><strong>Nome:</strong> {selectedAppointment.name}</p>
                <p><strong>Data:</strong> {new Date(selectedAppointment.date).toLocaleDateString('pt-BR')}</p>
                <p><strong>Horário:</strong> {selectedAppointment.time}</p>
                <p><strong>Telefone:</strong> {selectedAppointment.phone}</p>
                {selectedAppointment.status === "confirmado" && (
                  <ConfirmadStatus>Consulta Confirmada</ConfirmadStatus>
                )}
                {selectedAppointment.status === "cancelado" && (
                  <CancelledStatus>Consulta Cancelada</CancelledStatus>
                )}
                <br />
              </>
            )}
            <ModalCloseButton onClick={() => setIsModalOpen(false)}>Fechar</ModalCloseButton>
          </ModalContent>
        </Modal>
      )}

      {isCancelModalOpen && (
        <Modal>
          <ModalContent>
            <h2>Confirmação de Cancelamento</h2>
            <p>Tem certeza que deseja cancelar este agendamento?</p>
            <ModalButtonContainer>
              <CancelButton onClick={confirmCancel}>Sim</CancelButton>
              <ConfirmButton onClick={() => setIsCancelModalOpen(false)}>Não</ConfirmButton>
            </ModalButtonContainer>
          </ModalContent>
        </Modal>
      )}

      {isCancelledNotificationOpen && (
        <Modal>
          <ModalContent>
            <h2>Consulta Cancelada</h2>
            <p>A consulta foi cancelada com sucesso!</p>
            <p>Recomendamos entrar em contato para <strong>reagendar</strong>.</p>
            <ModalCloseButton onClick={() => setIsCancelledNotificationOpen(false)}>Fechar</ModalCloseButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}
