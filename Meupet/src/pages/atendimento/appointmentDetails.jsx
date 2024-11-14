import React from 'react';
import { useParams } from 'react-router-dom';

export function AppointmentDetails() {
  const { id } = useParams();

  // Mock de informações detalhadas (substitua por dados reais)
  const appointments = {
    1: {
      name: 'Centro Médico Veterinário',
      location: 'Várzea',
      services: '3 Serviços inclusos',
      contact: '(81) 3440–0443',
      hours: 'Atendimento das 8h às 18h',
    },
    2: {
      name: 'Clínica Pet Life',
      location: 'Boa Viagem',
      services: '4 Serviços inclusos',
      contact: '(81) 9999–8888',
      hours: 'Atendimento das 9h às 17h',
    },
  };

  const appointment = appointments[id];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {appointment ? (
        <>
          <h1>{appointment.name}</h1>
          <p>📍 Localização: {appointment.location}</p>
          <p>📅 Serviços: {appointment.services}</p>
          <p>📞 Contato: {appointment.contact}</p>
          <p>🕒 Horário: {appointment.hours}</p>
        </>
      ) : (
        <p>Informações não encontradas</p>
      )}
    </div>
  );
}
