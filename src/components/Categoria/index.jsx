import styled from "styled-components";
import Card from "@/components/Card";
import TituloCategoria from "./TituloCategoria";

const CategoriaEstilizada = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;

  max-width: 1356px;
  overflow-x: auto;

  padding-bottom: 40px;

  /* Estilo para navegadores que suportam scrollbar-color */
  scrollbar-color: #2271d1 transparent; /* thumb background / track background */
  scrollbar-width: thin; /* Largura fina da barra */
  scroll-behavior: smooth;
`;

const Categoria = ({ categoria, videos }) => {
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
            />
          );
        })}
      </CardsContainer>
    </CategoriaEstilizada>
  );
};

export default Categoria;
