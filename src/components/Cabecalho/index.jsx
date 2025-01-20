import styled from "styled-components";
import Logo from "../Logo";
import LinkMenu from "../LinkMenu";

const CabecalhoEstilizado = styled.header`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 35.5px 51.15px;
  border-bottom: 4px solid #2271d1;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.nav`
  display: flex;
  gap: 25px;
`;

const Cabecalho = () => {
  return (
    <CabecalhoEstilizado>
      <Logo />
      <Menu>
        <LinkMenu to={"/"}>Início</LinkMenu>
        <LinkMenu to={"/upload"}>Novo Vídeo</LinkMenu>
      </Menu>
    </CabecalhoEstilizado>
  );
};

export default Cabecalho;
