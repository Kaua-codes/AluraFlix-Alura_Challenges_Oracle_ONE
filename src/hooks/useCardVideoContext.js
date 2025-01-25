import { useContext } from "react";
import { CardVideoContext } from "../context/CardVideoContext";

export const useCardVideoContext = () => {
  const {
    videos,
    setVideos,
    categorias,
    setCategorias,
    videoParaEditar,
    setVideoParaEditar,
  } = useContext(CardVideoContext);

  const deletarVideo = (id) => {
    console.log("Deletando video...");
    setVideos(videos.filter((video) => video.id !== id));
  };

  const editarVideo = (id) => {
    console.log("Editando video...");
    setVideoParaEditar(videos.find((video) => video.id === id));
  };

  const fecharModal = () => {
    setVideoParaEditar(null);
  };

  const aoVideoAdicionado = (video) => {
    setVideos([...videos, video]);
  };

  const aoVideoEditado = (videoEditado) => {
    const videosAtualizados = videos.map((video) =>
      video.id === videoEditado.id ? videoEditado : video
    );
    setVideos(videosAtualizados);
  };

  return {
    videos,
    setVideos,
    categorias,
    videoParaEditar,
    setVideoParaEditar,
    deletarVideo,
    editarVideo,
    fecharModal,
    aoVideoAdicionado,
    aoVideoEditado,
  };
};
