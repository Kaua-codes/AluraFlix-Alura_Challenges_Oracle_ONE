import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio/Inicio";
import NaoEncontrada from "./pages/NaoEncontrada/NaoEncontrada";
import NovoVideo from "./pages/NovoVideo/NovoVideo";
import Padrao from "./pages/Padrao/Padrao";
import EstilosGlobais from "./components/EstilosGlobais";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <EstilosGlobais />
        <Routes>
          <Route path="/" element={<Padrao />}>
            <Route index element={<Inicio />} />
            <Route path="/upload" element={<NovoVideo />} />
          </Route>
          <Route path="/watch/:id" />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
