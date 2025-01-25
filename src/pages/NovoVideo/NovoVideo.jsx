import styled from "styled-components";
import FormularioCard from "../../components/FormularioCard";

const NovoVideoContainer = styled.div`
  max-width: 1440px;
  margin: 70px auto;

  display: flex;
  flex-direction: column;
  gap: 47px;
`;

const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const TituloPagina = styled.h1`
  color: #f5f5f5;

  font-family: "Roboto", sans-serif;
  font-size: 60px;
  font-weight: 900;
`;

const SubtituloPagina = styled.p`
  color: #ffffff;

  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

const ContainerFormulario = styled.div`
  padding: 0px 134px;
`;

const NovoVideo = () => {
  return (
    <NovoVideoContainer>
      <TituloContainer>
        <TituloPagina>Novo Vídeo</TituloPagina>
        <SubtituloPagina>
          Complete o formulário para criar um novo card de vídeo.
        </SubtituloPagina>
      </TituloContainer>

      <ContainerFormulario>
        <FormularioCard type="criar" tituloFormulario="Criar " />
      </ContainerFormulario>
    </NovoVideoContainer>
  );
};

export default NovoVideo;
