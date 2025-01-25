import styled from "styled-components";
import iconeFechar from "@/assets/iconeFechar.png";
import Formulario from "../FormularioCard";
import { useCardVideoContext } from "../../hooks/useCardVideoContext";
import FormularioCard from "../FormularioCard";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;

  background-color: #03122f;
  border: 5px solid #6bd1ff;
  border-radius: 15px;

  width: 768px;
  max-height: 90vh;
  overflow-y: auto;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  box-sizing: border-box;

  /* Estilo para navegadores que suportam scrollbar-color */
  scrollbar-color: #2271d1 transparent; /* thumb background / track background */
  scrollbar-width: thin; /* Largura fina da barra */
  scroll-behavior: smooth;
`;

const ButtonCloseModal = styled.button`
  position: fixed;
  top: 24px;
  right: 24px;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

const ContainerFormulario = styled.div`
  padding: 60px;
  height: 100%;
`;

const ModalEditar = () => {
  const { videoParaEditar, fecharModal } = useCardVideoContext();
  const videoSelecionado = videoParaEditar;

  return (
    <>
      {videoSelecionado && (
        <>
          <Overlay />
          <DialogEstilizado open={!!videoSelecionado} onClose={fecharModal}>
            <form method="dialog">
              <ButtonCloseModal formMethod="dialog">
                <img src={iconeFechar} />
              </ButtonCloseModal>
            </form>
            <ContainerFormulario>
              <FormularioCard
                type="editar"
                tituloFormulario="EDITAR CARD:"
                videoSelecionado={videoSelecionado}
                fecharModal={fecharModal}
              />
            </ContainerFormulario>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalEditar;
