import { useEffect, useState } from "react";
import styled from "styled-components";
import Campo from "../Campo";
import Botao from "../Botao";
import { v4 as uuidv4 } from "uuid";
import { useCardVideoContext } from "../../hooks/useCardVideoContext";

const Formulario = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  form {
    display: flex;
    flex-direction: column;
  }
`;

const FormularioCardCriar = styled(Formulario)`
  gap: 60px;

  form {
    gap: 60px;
  }
`;

const FormularioCardEditar = styled(Formulario)`
  gap: 42px;

  form {
    gap: 42px;
  }
`;

const TituloFormulario = styled.h2``;

const TituloFormularioCardCriar = styled(TituloFormulario)`
  font-family: "source-sans-pro", sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 24px;

  color: #ffffff;

  padding: 20px 0px;
  border-top: 3px solid #262626;
  border-bottom: 3px solid #262626;
`;

const TituloFormularioCardEditar = styled(TituloFormulario)`
  font-family: "Roboto", serif;
  font-weight: 900;
  font-size: 60px;

  color: #2271d1;
`;

const GrupoCampo = styled.div`
  display: flex;
`;

const GrupoCampoCardCriar = styled(GrupoCampo)`
  gap: 20px;
`;

const GrupoCampoCardEditar = styled(GrupoCampo)`
  flex-direction: column;
  gap: 42px;
`;

const ContainerBotao = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerBotaoCardCriar = styled(ContainerBotao)`
  justify-content: flex-start;
  gap: 30px;
`;

const ContainerBotaoCardEditar = styled(ContainerBotao)`
  justify-content: space-between;
`;

const FormularioCard = ({
  tituloFormulario,
  videoSelecionado,
  fecharModal,
  type,
}) => {
  const { categorias, aoVideoAdicionado, aoVideoEditado } =
    useCardVideoContext();

  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [linkImagem, setLinkImagem] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (videoSelecionado) {
      setTitulo(videoSelecionado.titulo);
      setCategoria(videoSelecionado.categoria);
      setLinkImagem(videoSelecionado.linkImagem);
      setLinkVideo(videoSelecionado.linkVideo);
      setDescricao(videoSelecionado.descricao);
    }
  }, [videoSelecionado]);

  const limparFormulario = () => {
    setTitulo("");
    setCategoria("");
    setLinkImagem("");
    setLinkVideo("");
    setDescricao("");
  };

  const aoGuardar = (evento) => {
    if (!videoSelecionado) {
      evento.preventDefault();
      aoVideoAdicionado({
        id: uuidv4(),
        titulo,
        categoria,
        linkImagem,
        linkVideo,
        descricao,
      });
      limparFormulario();
    } else {
      evento.preventDefault();
      aoVideoEditado({
        id: videoSelecionado.id,
        titulo,
        categoria,
        linkImagem,
        linkVideo,
        descricao,
      });
      limparFormulario();
      fecharModal();
    }
  };

  const FormularioEstilizado =
    type === "criar"
      ? FormularioCardCriar
      : type === "editar"
      ? FormularioCardEditar
      : Formulario;

  const TituloFormularioEstilizado =
    type === "criar"
      ? TituloFormularioCardCriar
      : type === "editar"
      ? TituloFormularioCardEditar
      : TituloFormulario;

  const GrupoCampoEstilizado =
    type === "criar"
      ? GrupoCampoCardCriar
      : type === "editar"
      ? GrupoCampoCardEditar
      : GrupoCampo;

  const ContainerBotaoEstilizado =
    type === "criar"
      ? ContainerBotaoCardCriar
      : type === "editar"
      ? ContainerBotaoCardEditar
      : ContainerBotao;

  const corBorda = type === "criar" ? "#262626" : "#2271D1";
  const corBordaFoco = type === "criar" ? "#ffffff" : "#6BD1FF";

  return (
    <FormularioEstilizado>
      <TituloFormularioEstilizado>
        {tituloFormulario}
      </TituloFormularioEstilizado>
      <form onSubmit={aoGuardar}>
        <GrupoCampoEstilizado>
          <Campo
            label="Titulo"
            valor={titulo}
            corBorda={corBorda}
            corBordaFoco={corBordaFoco}
            placeholder="O que é javascript?"
            obrigatorio={true}
            aoAlterado={(valor) => setTitulo(valor)}
          />

          <Campo
            label="Categoria"
            valor={categoria}
            corBorda={corBorda}
            corBordaFoco={corBordaFoco}
            placeholder=""
            obrigatorio={true}
            aoAlterado={(valor) => setCategoria(valor)}
            tipo="select"
            itens={categorias.map((categoria) => categoria.nome)}
          />
        </GrupoCampoEstilizado>

        <GrupoCampoEstilizado>
          <Campo
            label="Link da imagem"
            valor={linkImagem}
            corBorda={corBorda}
            corBordaFoco={corBordaFoco}
            placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
            obrigatorio={true}
            aoAlterado={(valor) => setLinkImagem(valor)}
          />

          <Campo
            label="Link do video"
            valor={linkVideo}
            corBorda={corBorda}
            corBordaFoco={corBordaFoco}
            placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
            obrigatorio={true}
            aoAlterado={(valor) => setLinkVideo(valor)}
          />
        </GrupoCampoEstilizado>

        <Campo
          label="Descrição"
          valor={descricao}
          corBorda={corBorda}
          corBordaFoco={corBordaFoco}
          placeholder="Digite aqui a descrição do seu vídeo..."
          obrigatorio={true}
          aoAlterado={(valor) => setDescricao(valor)}
          tipo="text-area"
        />

        <ContainerBotaoEstilizado>
          <Botao type="submit">Guardar</Botao>

          <Botao
            aoClicar={() => {
              limparFormulario();
            }}
          >
            Limpar
          </Botao>
        </ContainerBotaoEstilizado>
      </form>
    </FormularioEstilizado>
  );
};

export default FormularioCard;
