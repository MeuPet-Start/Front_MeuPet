import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  Container,
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
import ptLocale from "@fullcalendar/core/locales/pt";

export function Agenda() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelledNotificationOpen, setIsCancelledNotificationOpen] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      // Chamada para obter os dados do servidor
      const simulatedAppointments = [
        {
          type: "Consulta",
          name: "Maria Luiza",
          date: "2024-11-30",
          time: "9:00",
          phone: "(81) 9983-7632",
          status: "confirmado", 
          id: 1, 
        },
        {
          type: "Vacina",
          name: "João Silva",
          date: "2024-12-01",
          time: "10:30",
          phone: "(81) 9876-5432",
          status: "confirmado", 
          id: 2, 
        },
        {
          type: "Tosa",
          name: "Ana Clara",
          date: "2024-12-02",
          time: "14:00",
          phone: "(81) 1234-5678",
          status: "confirmado", 
          id: 3, 
        },
      ];

      setAppointments(simulatedAppointments);
    };

    fetchAppointments();
  }, []);

  const calendarEvents = appointments.map((appointment) => ({
    title: appointment.type,
    date: appointment.date,
    extendedProps: {
      appointment,
    },
    backgroundColor: appointment.status === "confirmado" ? "#4caf50" : "#b90000", 
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
      await fetch(`/api/appointments/${appointmentToCancel.id}`, {
        method: 'DELETE',
      });
      setAppointments((prevAppointments) =>
        prevAppointments.map((app) =>
          app.id === appointmentToCancel.id ? { ...app, status: "cancelado" } : app
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
      <Header />
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
        {appointments.filter((appointment) => appointment.status === "confirmado").length > 0 ? (
          appointments
            .filter((appointment) => appointment.status === "confirmado")
            .map((appointment, index) => (
              <AppointmentCard key={index}>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Clínica"
                  style={{ borderRadius: "10px", marginRight: "20px" }}
                />
                <AppointmentDetails>
                  <AppointmentType>{appointment.type}</AppointmentType>
                  <p>
                    <strong>Nome:</strong> {appointment.name}
                  </p>
                  <p>
                    <strong>Data:</strong> {new Date(appointment.date).toLocaleDateString("pt-BR")}
                  </p>
                  <p>
                    <strong>Horário:</strong> {appointment.time}
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
            <p>Ao confirmar, o cliente será informado do cancelamento.</p>
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
