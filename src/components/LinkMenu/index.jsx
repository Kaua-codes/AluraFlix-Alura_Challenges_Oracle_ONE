import styled from "styled-components";
import { Link, useLocation } from "react-router";

const LinkMenuEstilizado = styled(Link)`
  background-color: transparent;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 54px;

  border: 2px solid #f5f5f5;
  border-radius: 10px;

  text-decoration: none;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;

  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: rgba(0, 0, 0, 0.9);
    border-color: #2271d1;
    color: #2271d1;
    box-shadow: inset 0 0 12px 4px #2271d1;
  `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    border-color: #2271d1;
    color: #2271d1;
    box-shadow: inset 0 0 12px 4px #2271d1;
  }
`;

const LinkMenu = ({ children, to }) => {
  const localizacao = useLocation();
  const isActive = localizacao.pathname === to;

  return (
    <LinkMenuEstilizado to={to} $isActive={isActive}>
      {children}
    </LinkMenuEstilizado>
  );
};

export default LinkMenu;
