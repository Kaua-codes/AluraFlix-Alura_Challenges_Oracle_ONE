import Api from "@/mocks/db.json";
import { createContext, useState } from "react";

export const CardVideoContext = createContext();
CardVideoContext.displayName = "CardVideo";

export const CardVideoProvider = ({ children }) => {
  const [videos, setVideos] = useState(Api.videos);
  const [categorias, setCategorias] = useState(Api.categorias);
  const [videoParaEditar, setVideoParaEditar] = useState(null);

  return (
    <CardVideoContext.Provider
      value={{
        videos,
        setVideos,
        categorias,
        setCategorias,
        videoParaEditar,
        setVideoParaEditar,
      }}
    >
      {children}
    </CardVideoContext.Provider>
  );
};
