import logo from "@/assets/logo.png";
import styled from "styled-components";

const LogoEstilizada = styled.div`
  display: flex;
  width: 168px;
  height: 40px;

  img {
    width: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoEstilizada>
      <img src={logo} alt="Logo da aluraFlix" />
    </LogoEstilizada>
  );
};

export default Logo;
