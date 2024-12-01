import Header from "../../components/header/header";
import Footer from '../../components/footer/footer';
import cachorrocopy from '../../assets/cachorrocopy.png';
import { ConfirmationContainer, ConfirmationMessage, DogImageContainer } from './confirmacaostyle';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmacaoAgendamento = () => {
  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => navigation("/historico"), 5000); 
  }, [])


  return (
    <>
    
      <ConfirmationContainer>
        <ConfirmationMessage>
          <h1>SEU AGENDAMENTO FOI CONFIRMADO!</h1>
          <p>Prepare o seu pet e chegue com 10 minutos de antecedência para um atendimento tranquilo.</p>
        </ConfirmationMessage>
        <DogImageContainer>
          <img src={cachorrocopy} alt="Dog" />
          <div className="overlay"></div>
        </DogImageContainer>
      </ConfirmationContainer>
      
    </>
  );
};

export default ConfirmacaoAgendamento;
