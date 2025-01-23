import iconeLixeira from "@/assets/iconeLixeira.svg";
import iconeLapis from "@/assets/iconeLapis.svg";
import styled from "styled-components";
import { Link } from "react-router";
import { BotaoCardDireita, BotaoCardEsquerda } from "./BotaoCard";

const CardEstilizado = styled.section`
  width: 400px;

  display: flex;
  flex-direction: column;
`;

const ImagemCard = styled.div`
  width: 400px;
  aspect-ratio: 16 / 9;

  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 4px 4px 0px 0px;
  border: ${(props) =>
    props.$cor ? `5px solid ${props.$cor}` : "5px solid #6bd1ff"};
  box-sizing: border-box;
  box-shadow: ${(props) =>
    props.$cor
      ? `inset 0px 0px 17px 8px ${props.$cor}`
      : "inset 0px 0px 17px 8px #68d1ff"};
`;

const CardRodape = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);

  height: 60px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  border: ${(props) =>
    props.$cor ? `5px solid ${props.$cor}` : "5px solid #6bd1ff"};
  border-top: none;
  border-radius: 0px 0px 15px 15px;
  box-sizing: border-box;
`;

const Card = ({ video, cor, aoDeletarVideo, aoEditarVideo }) => {
  return (
    <CardEstilizado>
      <Link to={video.linkVideo}>
        <ImagemCard $cor={cor} $backgroundImage={video.linkImagem} />
      </Link>
      <CardRodape $cor={cor}>
        <BotaoCardEsquerda
          cor={cor}
          icone={iconeLixeira}
          idVideo={video.id}
          aoClicar={aoDeletarVideo}
        >
          DELETAR
        </BotaoCardEsquerda>
        <BotaoCardDireita
          cor={cor}
          icone={iconeLapis}
          idVideo={video.id}
          aoClicar={aoEditarVideo}
        >
          EDITAR
        </BotaoCardDireita>
      </CardRodape>
    </CardEstilizado>
  );
};

export default Card;
