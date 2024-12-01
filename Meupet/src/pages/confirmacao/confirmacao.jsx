import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import cachorro from '../../assets/cachorro.png';
import { ConfirmationContainer, ConfirmationMessage, DogImageContainer } from './confirmacaostyle';

const ConfirmacaoAgendamento = () => {
  return (
    <>
    
      <ConfirmationContainer>
        <ConfirmationMessage>
          <h1>SEU AGENDAMENTO FOI CONFIRMADO!</h1>
          <p>Prepare o seu pet e chegue com 10 minutos de antecedência para um atendimento tranquilo.</p>
        </ConfirmationMessage>
        <DogImageContainer>
          <img src={cachorro} alt="Dog" />
          <div className="overlay"></div>
        </DogImageContainer>
      </ConfirmationContainer>
      
    </>
  );
};

export default ConfirmacaoAgendamento;
