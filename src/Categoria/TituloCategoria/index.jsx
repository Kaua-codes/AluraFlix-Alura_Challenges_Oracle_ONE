import styled from "styled-components";

const TituloCategoriaEstilizado = styled.h1`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#6bd1ff"};
  color: #f5f5f5;

  width: 432px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 800;

  border-radius: 15px;
`;

const TituloCategoria = ({ children, corDeFundo }) => {
  return (
    <TituloCategoriaEstilizado $backgroundColor={corDeFundo}>
      {children}
    </TituloCategoriaEstilizado>
  );
};

export default TituloCategoria;
