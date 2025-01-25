import { BrowserRouter, Route, Routes } from "react-router";
import { CardVideoProvider } from "./context/CardVideoContext";
import Inicio from "./pages/Inicio/Inicio";
import NovoVideo from "./pages/NovoVideo/NovoVideo";
import Padrao from "./pages/Padrao/Padrao";
import EstilosGlobais from "./components/EstilosGlobais";
import Player from "./pages/Player/Player";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />
        <CardVideoProvider>
          <Routes>
            <Route path="/" element={<Padrao />}>
              <Route index element={<Inicio />} />
              <Route path="/upload" element={<NovoVideo />} />
            </Route>
            <Route path="/watch/:id" element={<Player />} />
            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </CardVideoProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
