import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cemevet from "../../assets/Cemevet.png";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { BsClipboardCheck } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import {
  HeaderSection,
  Form,
  InputGrid,
  Headertitle,
  HeaderSubTitle,
  Headerinfo,
  HeaderImage,
  HeaderText,
  FormHeader,
  FormTitle,
  FormSubTitle,
  FormGroup,
  Label,
  Input,
  FormInputTitle,
  FormGroupInfo,
  FormGroupInfoInput,
  FormGroupDetalhes,
  FormGroupDetalhesInput,
  Button,
} from "./consultastyle";

import { api } from "../../services/api";
import { number } from "yup";

const Consulta = () => {
  const navigate = useNavigate();

  const genderOptions = [
    { id: "femea", label: "Fêmea", value: "F" },
    { id: "macho", label: "Macho", value: "M" },
  ];

  const animalOptions = [
    { id: "cachorro", label: "Cachorro", value: "Cachorro" },
    { id: "gato", label: "Gato", value: "Gato" },
  ];

  const handleButtonClick = () => {
    navigate("/confirmacao");
  };

  const handleSubmit = async (values) => {
    try {
      const response = await api.post("/agendamento", values);
      alert("Agendamento realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao realizar o agendamento. Tente novamente.");
    }
  };

  const formik = useFormik({
    initialValues: {
      nomePet: "",
      idade: "",
      historico: "",
      tipoAnimal: [],
      generoPet: "",
      tipoServico: [],
      data: "",
      horarios: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Header />

      <HeaderSection>
        <HeaderImage src={Cemevet} alt="Clínica" />
        <Headerinfo>
          <Headertitle>Centro Médico Veterinário</Headertitle>
          <HeaderSubTitle>
            Sua Clínica Veterinária: Saúde e Cuidado para o seu Pet
          </HeaderSubTitle>

          <HeaderText>
            <PiStethoscopeDuotone style={{ height: "2rem", width: "2rem" }} />
            +4 Serviços Inclusos: Consultas, Exames e Cirurgias
          </HeaderText>
          <HeaderText>
            <BsClipboardCheck style={{ height: "2rem", width: "2rem" }} />
            Atendimento: Das 8h às 18h, todos os dias
          </HeaderText>

          <HeaderText>
            <MdLocalPhone style={{ height: "2rem", width: "2rem" }} />
            Em caso de urgências, ligue: (81) 3440-0443
          </HeaderText>
        </Headerinfo>
      </HeaderSection>

      <Form onSubmit={formik.handleSubmit}>
        <FormHeader>
          <FormTitle>Serviços de Agendamento</FormTitle>
          <FormSubTitle>
            Preencha Rapidamente as informações de seu Pet e Agende com
            Facilidade:
          </FormSubTitle>
        </FormHeader>

        <InputGrid>
          <FormInputTitle>Informações do Animal:</FormInputTitle>
          <FormGroupInfo>
            <FormGroupInfoInput>
              <Label>Nome do Pet:</Label>
              <Input
                type="text"
                name="nome do Pet"
                placeholder="Insira o nome do seu Pet"
                onChange={formik.handleChange}
                value={formik.values.nomePet}
              />
            </FormGroupInfoInput>
            <FormGroupInfoInput>
              <Label>Idade:</Label>
              <Input
                type="number"
                name="idade"
                placeholder="Exemplo: 3 anos"
                onChange={formik.handleChange}
                value={formik.values.idade}
              />
            </FormGroupInfoInput>
            <FormGroupInfoInput>
              <Label>Histórico médico relevante (se houver):</Label>

              <Input
                type="text"
                name="historico médico"
                placeholder="Insira aqui as informações adicionais sobre o seu Pet"
                onChange={formik.handleChange}
                value={formik.values.historico}
              />
            </FormGroupInfoInput>
          </FormGroupInfo>
          <FormGroup>
            <FormInputTitle>Tipo do animal:</FormInputTitle>

            {animalOptions.map((option) => (
              <FormGroup key={option.id}>
                <Input
                  type="radio"
                  id={option.id}
                  name="tipoAnimal"
                  value={option.value}
                  onChange={formik.handleChange}
                  defaultChecked={option.value === "Cachorro"}
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </FormGroup>
            ))}
          </FormGroup>

          <FormGroup>
            <FormInputTitle>Gênero do Pet:</FormInputTitle>
            {genderOptions.map((option) => (
              <FormGroup key={option.id}>
                <Input
                  type="radio"
                  id={option.id}
                  name="generoPet"
                  value={option.value}
                  onChange={formik.handleChange}
                  defaultChecked={option.value === "F"} // Marca 'Fêmea' como padrão
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </FormGroup>
            ))}
          </FormGroup>

          <FormGroup>
            <FormInputTitle>Tipo do serviço:</FormInputTitle>
            <Input
              type="radio"
              id="consulta"
              defaultChecked
              name="tipoServico"
              value="consulta"
              onChange={formik.handleChange}
            />
            <Label for="consulta">Consulta</Label>
          </FormGroup>

          <FormGroupDetalhes>
            <FormInputTitle>Detalhes do serviço: </FormInputTitle>
            <FormGroupDetalhesInput>
              <Label>Data do Serviço:</Label>
              <Input
                type="date"
                name="data do serviço"
                placeholder="Data :"
                onChange={formik.handleChange}
                value={formik.values.data || ""}
              />
              <Label>Horários:</Label>
              <Input
                type="time"
                name="horario"
                placeholder="Horários"
                onChange={formik.handleChange}
              />
            </FormGroupDetalhesInput>
          </FormGroupDetalhes>
        </InputGrid>

        <Button onClick={handleButtonClick}>Efetuar Marcação</Button>
      </Form>

      <Footer />
    </>
  );
};

export default Consulta;
