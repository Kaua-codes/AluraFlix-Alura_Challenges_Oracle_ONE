import styled from "styled-components";
import Logo from "../Logo";

const RodapeEstilizado = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 4px solid #2271d1;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
  display: flex;
  justify-content: center;
  padding: 42.5px 0;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <Logo />
    </RodapeEstilizado>
  );
};

export default Rodape;
