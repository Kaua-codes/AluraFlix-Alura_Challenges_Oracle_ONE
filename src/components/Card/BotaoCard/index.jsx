import styled from "styled-components";

const BotaoCardEstilizado = styled.button`
  background-color: transparent;
  color: #ffffff;

  border: none;

  display: flex;
  gap: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", serif;
  font-weight: 800;
  font-size: 16px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$cor ? `${props.$cor}80` : "#6bd1ff80"};
  }
`;

const IconeBotao = styled.img`
  width: 25px;
  height: 28px;
`;

const BotaoCard = ({ children, icone, cor, idVideo, aoClicar }) => {
  return (
    <BotaoCardEstilizado $cor={cor} onClick={() => aoClicar(idVideo)}>
      <IconeBotao src={icone} />
      {children}
    </BotaoCardEstilizado>
  );
};

// Componentes baseados no estilo original com ajustes de border-radius
const BotaoCardEsquerdaEstilizado = styled(BotaoCardEstilizado)`
  border-radius: 0 0 0 8px;
`;

const BotaoCardDireitaEstilizado = styled(BotaoCardEstilizado)`
  border-radius: 0 0 8px 0;
`;

// Reutilizando lógica do BotaoCard
const BotaoCardEsquerda = ({ children, icone, cor, idVideo, aoClicar }) => {
  return (
    <BotaoCardEsquerdaEstilizado $cor={cor} onClick={() => aoClicar(idVideo)}>
      <IconeBotao src={icone} />
      {children}
    </BotaoCardEsquerdaEstilizado>
  );
};

const BotaoCardDireita = ({ children, icone, cor, idVideo, aoClicar }) => {
  return (
    <BotaoCardDireitaEstilizado $cor={cor} onClick={() => aoClicar(idVideo)}>
      <IconeBotao src={icone} />
      {children}
    </BotaoCardDireitaEstilizado>
  );
};

export { BotaoCardEsquerda, BotaoCardDireita };
export default BotaoCard;
