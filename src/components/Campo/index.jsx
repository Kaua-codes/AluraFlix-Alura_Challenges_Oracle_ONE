import styled from "styled-components";

export const CampoEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  width: 573px;
`;

const LabelEstilizado = styled.label`
  color: #ffffff;

  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const InputEstilizado = styled.input`
  background-color: transparent;
  color: #ffffff;
  padding: 16px 12px;
  border: 3px solid ${(props) => props.$corBorda};
  border-radius: 10px;
  outline: none; /* Remove o foco padrão */

  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  &::placeholder {
    color: #a5a5a5;

    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    font-size: 20px;
    border-color: ${(props) => props.$corBorda};
    line-height: 24px;
  }
  &:focus {
    border-color: ${(props) => props.$corBordaFoco};
  }
`;

const TextAreaEstilizado = styled.textarea`
  background-color: transparent;
  color: #ffffff;
  padding: 16px 12px;
  border: 3px solid ${(props) => props.$corBorda};
  border-radius: 10px;
  outline: none; /* Remove o foco padrão */

  height: 112px;
  resize: none;

  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  &::placeholder {
    color: #a5a5a5;

    font-family: "Source Sans Pro", sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
  &:focus {
    border-color: ${(props) => props.$corBordaFoco};
  }
`;

const SelectEstilizado = styled.select`
  background-color: transparent;
  color: #ffffff;
  padding: 16px 12px;
  border: 3px solid ${(props) => props.$corBorda};
  border-radius: 10px;
  outline: none; /* Remove o foco padrão */

  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  &:focus {
    border: 3px solid ${(props) => props.$corBordaFoco};
  }

  option {
    background-color: #262626;
  }
`;

const Campo = ({
  label,
  valor,
  tipo,
  itens,
  obrigatorio,
  placeholder,
  aoAlterado,
  corBorda = "#2271D1",
  corBordaFoco = "#6BD1FF",
}) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  console.log(corBordaFoco);

  return (
    <CampoEstilizado>
      <LabelEstilizado>{label}</LabelEstilizado>
      {tipo === "text-area" ? (
        <TextAreaEstilizado
          value={valor}
          $corBorda={corBorda}
          $corBordaFoco={corBordaFoco}
          placeholder={placeholder}
          required={obrigatorio}
          onChange={aoDigitado}
        />
      ) : tipo === "select" ? (
        <SelectEstilizado
          value={valor}
          $corBorda={corBorda}
          $corBordaFoco={corBordaFoco}
          required={obrigatorio}
          onChange={aoDigitado}
        >
          <option value="">Clique aqui e selecione uma opção</option>
          {itens.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </SelectEstilizado>
      ) : (
        <InputEstilizado
          value={valor}
          $corBorda={corBorda}
          $corBordaFoco={corBordaFoco}
          type={tipo || "text"}
          placeholder={placeholder}
          required={obrigatorio}
          onChange={aoDigitado}
        />
      )}
    </CampoEstilizado>
  );
};

export default Campo;
