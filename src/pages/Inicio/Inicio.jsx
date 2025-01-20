import styled from "styled-components";
import Banner from "../../components/Banner";
import Categoria from "../../Categoria";
import { useState } from "react";
import Api from "@/mocks/db.json";
import ModalEditar from "../../components/ModalEditar";

const InicioContainer = styled.main`
  max-width: 1440px;
  margin: 0px auto 160px;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const CategoriasContainer = styled.div`
  padding: 0px 42px;
  display: flex;
  flex-direction: column;
  gap: 90px;
`;

const Inicio = () => {
  const [videos, setVideos] = useState(Api.videos);
  const [categorias, setCategorias] = useState(Api.categorias);
  const [videoParaEditar, setVideoParaEditar] = useState(null);

  const deletarVideo = (id) => {
    console.log("Deletando video...");
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editarVideo = (id) => {
    console.log("Editando video...");
    setVideoParaEditar(videos.filter((video) => video.id === id));
  };

  const fecharModal = () => {
    setVideoParaEditar(null);
  };

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
              aoDeletarVideo={deletarVideo}
              aoEditarVideo={editarVideo}
            />
          );
        })}
      </CategoriasContainer>
      <ModalEditar videoSelecionado={videoParaEditar} aoFechar={fecharModal} />
    </InicioContainer>
  );
};

export default Inicio;
