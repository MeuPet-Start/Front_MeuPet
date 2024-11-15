import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Input from "../../components/input/input";
import Sections from "../../components/sections/sections";
import AppointmentImage from "../../assets/appointmentImage.png";
import CastracaoIcon from "../../assets/castracaoIcon.png";
import VacinacaoIcon from "../../assets/vacinacaoIcon.png";
import AgendarIcon from "../../assets/agendarConsultaIcon.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import {
    Main,
    HeaderSection,
    Section,
    Contact,
    TextInput,
    CheckboxInput,
    Observetion
} from './appointmentstyle';

const Appointment = () => {
    return (
        <>
            <Header />
            <Main>
                <HeaderSection>
                    <img src={AppointmentImage} alt="" />
                    <div className="veterinaryCenter">
                        <h1>Centro Médico Veterinário</h1>
                        <FaMapMarkerAlt color='#2A4F6A' />
                        <h2>Várzea</h2>
                    </div>
                </HeaderSection>

                <Section>
                    <div style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Sections
                            srcImage={AgendarIcon}
                            altImage='Ícone Castração'
                            style={{
                                width: '65px',         
                                height: 'auto',       
                                objectFit: 'contain',}}
                        />
                        <button style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            fontSize: '16px',
                        }}>Agendar Consulta</button>
                    </div>

                    <div style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Sections
                            srcImage={VacinacaoIcon}
                            altImage='Ícone Vacinação'
                            style={{
                                width: '65px',         
                                height: 'auto',        
                                objectFit: 'contain',}}
                        />
                        <button style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            fontSize: '16px',
                        }}>Agendar Vacinação</button>
                    </div>

                    <div style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Sections
                            srcImage={CastracaoIcon}
                            altImage='Ícone Castração'
                            style={{
                                width: '76px',        
                                height: 'auto',      
                                objectFit: 'contain',}}
                        />
                        <button style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '10px 20px',
                            fontSize: '16px',
                        }}>Agendar Consulta</button>
                    </div>

                </Section>

                <Contact>
                    <FaSquarePhone color='#2A4F6A' />
                    <a href="xxx">(81) 98835-0426</a>
                </Contact>
                <div style={{ border: '3px solid #d5d5d5', padding: '25px 25px 25px 25px' }}>
                    <h4>Atendimento das 8h às 18h</h4>

                    <TextInput style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Insira seu CPF</label>
                            <Input
                                type='text'
                                placeholder='Insira seu CPF'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Nome Completo</label>
                            <Input
                                type='text'
                                placeholder='ex: Maria Clara'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>E-mail</label>
                            <Input
                                type='text'
                                placeholder='E-mail'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Idade do responsável pelo animal</label>
                            <Input
                                type='text'
                                placeholder='Idade'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Confirmar E-mail</label>
                            <Input
                                type='text'
                                placeholder='E-mail'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Selecione o bairro</label>
                            <Input
                                type='text'
                                placeholder='ex: Ibura'
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 45%' }}>
                            <label style={{ marginBottom: '5px' }}>Telefone</label>
                            <Input
                                type='text'
                                placeholder='ex: 81 99576-1234'
                            />
                        </div>
                    </TextInput>


                    <CheckboxInput style={{ flexDirection: 'column' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <h1>Tipo do Animal</h1>
                            <div className="checkboxDiv">
                                <Input text='Cachorro' type='checkbox' />
                                <Input text='Gato' type='checkbox' />
                            </div>
                        </div>

                        <div>
                            <h1>Gênero do Animal</h1>
                            <div className="checkboxDiv">
                                <Input text='Macho' type='checkbox' />
                                <Input text='Femea' type='checkbox' />
                            </div>
                        </div>
                    </CheckboxInput>

                    <Observetion style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                        <div style={{ flexDirection: "column" }}>
                            <label >Observação</label>
                            <textarea
                                placeholder='ex: meu pet está doente a vários dias'
                                style={{
                                    width: '700%',                 
                                    maxWidth: '600px',            
                                    height: '80px',               
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    border: '1px solid #ccc',
                                    boxSizing: 'border-box',       
                                    margin: '0 auto',    
                                    resize: 'vertical',            
                                    '@media (max-width: 600px)': {
                                        fontSize: '14px',           
                                        height: '120px',             
                                    }
                                }}
                            />
                        </div>
                        <button style={{ alignSelf: 'center', padding: '10px 20px', fontSize: '16px', borderRadius: '20px' }}>Enviar Dados</button>
                    </Observetion>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export default Appointment;
