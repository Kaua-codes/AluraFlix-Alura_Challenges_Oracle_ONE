import styled from "styled-components";
import Card from "../components/Card";
import TituloCategoria from "./TituloCategoria";

const CategoriaEstilizada = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Categoria = ({ categoria, videos, aoDeletarVideo, aoEditarVideo }) => {
  return (
    <CategoriaEstilizada>
      <TituloCategoria corDeFundo={categoria.cor}>
        {categoria.nome}
      </TituloCategoria>
      <CardsContainer>
        {videos.map((video) => {
          return (
            <Card
              key={video.id}
              linkImagem={video.linkImagem}
              linkVideo={video.linkVideo}
              video={video}
              cor={categoria.cor}
              aoDeletarVideo={aoDeletarVideo}
              aoEditarVideo={aoEditarVideo}
            />
          );
        })}
      </CardsContainer>
    </CategoriaEstilizada>
  );
};

export default Categoria;
