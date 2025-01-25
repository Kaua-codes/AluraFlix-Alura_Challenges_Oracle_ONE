import { Outlet } from "react-router";
import styled from "styled-components";
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";

const Fundo = styled.div`
  background-color: #191919;
  width: 100%;
  min-height: 100vh;
`;

const Padrao = () => {
  return (
    <Fundo>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </Fundo>
  );
};

export default Padrao;
