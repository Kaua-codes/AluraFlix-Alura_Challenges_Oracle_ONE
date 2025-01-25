import styled from "styled-components";
import Banner from "../../components/Banner";
import Categoria from "../../components/Categoria";
import ModalEditar from "../../components/ModalEditar";
import { useCardVideoContext } from "../../hooks/useCardVideoContext";

const InicioContainer = styled.main`
  max-width: 1440px;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const CategoriasContainer = styled.div`
  padding: 0px 42px 160px;
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const Inicio = () => {
  const { videos, categorias } = useCardVideoContext();

  return (
    <InicioContainer>
      <Banner
        categoria="Musica pop"
        titulo="Issues - Sara Farell Acoustic Cover"
        linkImagem="https://img.youtube.com/vi/LCTO52FiUtQ/maxresdefault.jpg"
        linkVideo="https://www.youtube.com/embed/LCTO52FiUtQ?playlist=LCTO52FiUtQ&rel=0"
        descricao="Confira a versão acústica de Sara Farell para a música Issues, de Julia Michaels."
      />

      <CategoriasContainer>
        {categorias.map((categoria) => {
          return (
            <Categoria
              key={categoria.id}
              categoria={categoria}
              videos={videos.filter((video) => {
                return video.categoria === categoria.nome;
              })}
            />
          );
        })}
      </CategoriasContainer>

      <ModalEditar />
    </InicioContainer>
  );
};

export default Inicio;
