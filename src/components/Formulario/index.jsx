import { useEffect, useState } from "react";
import styled from "styled-components";
import Campo from "../Campo";
import Botao from "../Botao";
import { v4 as uuidv4 } from "uuid";

const FormularioEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  gap: 42px;
  justify-content: flex-start;

  form {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }
`;

const TituloFormulario = styled.h2`
  font-family: "Roboto", serif;
  font-weight: 900;
  font-size: 60px;

  color: #2271d1;
`;

const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Formulario = ({
  tituloFormulario,
  categorias,
  videoSelecionado,
  aoVideoCadastrado,
  fecharModal,
}) => {
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
      aoVideoCadastrado({
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
      aoVideoCadastrado({
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

  return (
    <FormularioEstilizado>
      <TituloFormulario>{tituloFormulario}</TituloFormulario>
      <form onSubmit={aoGuardar}>
        <Campo
          label="Titulo"
          valor={titulo}
          placeholder="O que é javascript?"
          obrigatorio={true}
          aoAlterado={(valor) => setTitulo(valor)}
        />

        <Campo
          label="Categoria"
          valor={categoria}
          placeholder=""
          obrigatorio={true}
          aoAlterado={(valor) => setCategoria(valor)}
          tipo="select"
          itens={categorias}
        />

        <Campo
          label="Link da imagem"
          valor={linkImagem}
          placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps..."
          obrigatorio={true}
          aoAlterado={(valor) => setLinkImagem(valor)}
        />

        <Campo
          label="Link do video"
          valor={linkVideo}
          placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap.."
          obrigatorio={true}
          aoAlterado={(valor) => setLinkVideo(valor)}
        />

        <Campo
          label="Descrição"
          valor={descricao}
          placeholder="Digite aqui a descrição do seu vídeo..."
          obrigatorio={true}
          aoAlterado={(valor) => setDescricao(valor)}
          tipo="text-area"
        />

        <ContainerBotao>
          <Botao type="submit">Guardar</Botao>

          <Botao
            aoClicar={() => {
              limparFormulario();
            }}
          >
            Limpar
          </Botao>
        </ContainerBotao>
      </form>
    </FormularioEstilizado>
  );
};

export default Formulario;
