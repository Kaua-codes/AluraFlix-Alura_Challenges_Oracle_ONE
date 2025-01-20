import styled from "styled-components";
import iconeFechar from "@/assets/iconeFechar.png";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const DialogEstilizado = styled.dialog`
  background-color: #03122f;
  border: 5px solid #6bd1ff;
  border-radius: 15px;

  width: 974px;
  height: 500px;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    button {
      position: fixed;
      top: 24px;
      right: 24px;

      background-color: transparent;
      border: none;

      cursor: pointer;
    }
  }
`;

const ModalEditar = ({ videoSelecionado, aoFechar }) => {
  return (
    <>
      {videoSelecionado && (
        <>
          <Overlay />
          <DialogEstilizado open={!!videoSelecionado} onClose={aoFechar}>
            <form method="dialog">
              <button formMethod="dialog">
                <img src={iconeFechar} />
              </button>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalEditar;
