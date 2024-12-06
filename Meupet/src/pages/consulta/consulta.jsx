import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Cemevet from "../../assets/Cemevet.png";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { BsClipboardCheck } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { useLocation, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  ErrorText,
} from "./consultastyle";

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useUserData } from "../../hooks/useUserData";

const Consulta = () => {
  const { state } = useLocation();
  const { userData } = useUserData();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clinicData, setClinicData] = useState({
    name: "",
    servicos: [],
    openingHour: "",
    closingHour: "",
    phoneNumber: "",
    nomePet: "",
    idade: "",
    historico: "",
    tipoAnimal: "",
    generoPet: "",
    tipoServico: "",
    dataServico: "",
    horarios: "",
  });

  const [serviceSelected, setServiceSelected] = useState({});


  const navigate = useNavigate();

  const getData = async (clinicId) => {
    const response = await api.get(`/partner/agendamento/${clinicId}`);
    return response.data;
  };

  let clinicId = "";
  useEffect(() => {
    if (state?.id) {
      clinicId = state.id;
      getData(clinicId).then((data) => {
        setClinicData({
          name: data.name,
          servicos: data.services,
          openingHour: data.disponibilidades[0].openingHour,
          closingHour: data.disponibilidades[0].closingHour,
          phoneNumber: data.phoneNumber,
          nomePet: "",
          idade: "",
          historico: "",
          tipoAnimal: "",
          generoPet: "",
          tipoServico: "",
          dataServico: "",
          horarios: "",
        });
      });
    }
  }, [state]);

  const genderOptions = [
    { id: "femea", label: "Fêmea", value: "F" },
    { id: "macho", label: "Macho", value: "M" },
  ];

  const animalOptions = [
    { id: "cachorro", label: "Cachorro", value: "Cachorro" },
    { id: "gato", label: "Gato", value: "Gato" },
  ];

  // const handleButtonClick = () => {
  // navigate("/confirmacao");
  // };/

  const handleRequisicao = async (values) => {
    try {
      const response = await api.post("/agendamento/atendimento", {
        partnerId: clinicId,
        userId: userData.id,
        serviceId: serviceSelected.id,
        animal: {
          name: values.nomePet,
          age: values.idade,
          history: values.historico,
          type: values.tipoAnimal,
          sexo: values.generoPet,
        },
        appointmentDate: values.dataServico,
        startTime: values.openingHour,
        endTime: values.closingHour,
      });
      // const response = await api.post("/agendamento/atendimento",);
      alert("Agendamento realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao realizar o agendamento. Tente novamente.");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: clinicData,
    validationSchema: Yup.object({
      nomePet: Yup.string()
        .required("Nome do pet é obrigatório.")
        .min(2, "O nome do pet deve ter pelo menos 2 caracteres."),

      idade: Yup.number()
        .required("A idade do pet é obrigatória.")
        .positive("A idade deve ser um número positivo.")
        .integer("A idade deve ser um número inteiro."),

      historico: Yup.string()
        .optional()
        .max(500, "O histórico médico não pode exceder 500 caracteres."),
      tipoAnimal: Yup.string()
        .required("Por favor, selecione o tipo do animal.")
        .oneOf(["Cachorro", "Gato"], "Tipo de animal inválido."),
      generoPet: Yup.string()
        .required("Por favor, selecione o gênero do animal.")
        .oneOf(["F", "M"], "Gênero inválido."),
      tipoServico: Yup.string()
        .required("O tipo do serviço é obrigatório.")
        .oneOf(
          clinicData.servicos.map((servico) => servico.name),
          "Serviço inválido."
        ),
      dataServico: Yup.date().required("A data do serviço é obrigatória."),
      horarios: Yup.string().required("O horário do serviço é obrigatório."),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setIsSubmitting(true);
      try {
        handleRequisicao(values);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // useEffect(() => {
  //   if (userData) {
  //   }
  // }, [userData])

  return (
    <>
      <Header />

      <HeaderSection>
        <HeaderImage src={Cemevet} alt="Clínica" />
        <Headerinfo>
          <Headertitle>{clinicData.name}</Headertitle>
          <HeaderSubTitle>
            Sua Clínica Veterinária: Saúde e Cuidado para o seu Pet
          </HeaderSubTitle>

          <HeaderText>
            <PiStethoscopeDuotone style={{ height: "2rem", width: "2rem" }} />+
            {clinicData.servicos.length} Serviços Inclusos:{" "}
            {clinicData.servicos.map((servico, index) => {
              if (index == clinicData.servicos.length - 1) {
                return servico.name + ".";
              }
              return servico.name + ", ";
            })}
          </HeaderText>
          <HeaderText>
            <BsClipboardCheck style={{ height: "2rem", width: "2rem" }} />
            Atendimento: Das {clinicData.openingHour.slice(0, 5)} às{" "}
            {clinicData.closingHour.slice(0, 5)}, segunda a sexta.
          </HeaderText>

          <HeaderText>
            <MdLocalPhone style={{ height: "2rem", width: "2rem" }} />
            Em caso de urgências, ligue: {clinicData.phoneNumber}
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
                name="nomePet"
                placeholder="Insira o nome do seu Pet"
                onChange={formik.handleChange}
                value={formik.values.nomePet}
              />
              {formik.touched.nomePet && formik.errors.nomePet && (
                <ErrorText>{formik.errors.nomePet}</ErrorText>
              )}
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
              {formik.touched.idade && formik.errors.idade && (
                <ErrorText>{formik.errors.idade}</ErrorText>
              )}
            </FormGroupInfoInput>
            <FormGroupInfoInput>
              <Label>Histórico médico relevante (se houver):</Label>

              <Input
                type="text"
                name="historico"
                placeholder="Insira aqui as informações adicionais sobre o seu Pet"
                onChange={formik.handleChange}
                value={formik.values.historico}
              />
              {formik.touched.historico && formik.errors.historico && (
                <ErrorText>{formik.errors.historico}</ErrorText>
              )}
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
                  checked={formik.values.tipoAnimal === option.value}
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </FormGroup>
            ))}
            {formik.touched.tipoAnimal && formik.errors.tipoAnimal && (
              <ErrorText>{formik.errors.tipoAnimal}</ErrorText>
            )}
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
                  checked={formik.values.generoPet === option.value}
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </FormGroup>
            ))}
            {formik.touched.generoPet && formik.errors.generoPet && (
              <ErrorText>{formik.errors.generoPet}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <FormInputTitle>Tipo do serviço:</FormInputTitle>
            {clinicData.servicos.map((servico) => (
              <FormGroup key={servico.name}>
                <Input
                  type="radio"
                  id={servico.name}
                  name="tipoServico"
                  value={servico.name}
                  onChange={formik.handleChange}
                />
                <Label htmlFor={servico.name}>{servico.name}</Label>
              </FormGroup>
            ))}
            {formik.touched.tipoServico && formik.errors.tipoServico && (
              <ErrorText>{formik.errors.tipoServico}</ErrorText>
            )}
          </FormGroup>

          <FormGroupDetalhes>
            <FormInputTitle>Detalhes do serviço: </FormInputTitle>
            <FormGroupDetalhesInput>
              <Label>Data do Serviço:</Label>
              <Input
                type="date"
                name="dataServico"
                placeholder="Data :"
                onChange={formik.handleChange}
                value={formik.values.dataServico || ""}
              />
              {formik.touched.dataServico && formik.errors.dataServico && (
                <ErrorText>{formik.errors.dataServico}</ErrorText>
              )}
              <Label>Horários:</Label>
              <Input
                type="time"
                name="horarios"
                placeholder="Horários"
                onChange={formik.handleChange}
                value={formik.values.horarios || ""}
              />
              {formik.touched.horarios && formik.errors.horarios && (
                <ErrorText>{formik.errors.horarios}</ErrorText>
              )}
            </FormGroupDetalhesInput>
          </FormGroupDetalhes>
        </InputGrid>

        <Button type="submit">Efetuar Marcação</Button>
      </Form>

      <Footer />
    </>
  );
};

export default Consulta;
