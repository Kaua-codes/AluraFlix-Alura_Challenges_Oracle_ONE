import styled from "styled-components";

const BannerEstilizado = styled.figure`
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 18, 51, 0.56), rgba(0, 18, 51, 0.56)), url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;

  max-width: 100%;

  display: flex;
  gap: 50px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding: 210px 40px 100px;
  margin: 0;
  border: 4px solid #68d1ff;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-sizing: border-box;
`;

const BannerTexto = styled.section`
  width: 665px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    background-color: #6bd1ff;
    color: #f5f5f5;

    font-family: "Roboto", sans-serif;
    font-size: 48px;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 296px;
    height: 92px;

    text-align: center;

    border-radius: 15px;
  }

  h2 {
    color: #f5f5f5;
    font-family: "Roboto", sans-serif;
    font-size: 46px;
    font-weight: 400;
    margin-top: 40px;
  }

  p {
    color: #f5f5f5;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 300;
    margin-top: 10px;
  }
`;

const BannerVideo = styled.section`
  width: 640px;
  height: 100%;
  aspect-ratio: 16 / 9;

  border: 4px solid #68d1ff;
  border-radius: 4px;
  box-shadow: inset 0 0 17px 8px #68d1ff;
  box-sizing: border-box;
`;

const Banner = ({ categoria, titulo, descricao, linkImagem, linkVideo }) => {
  return (
    <BannerEstilizado $backgroundImage={linkImagem}>
      <BannerTexto>
        <h1>{categoria}</h1>
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </BannerTexto>

      <BannerVideo>
        <iframe
          width="100%"
          height="100%"
          src={linkVideo}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </BannerVideo>
    </BannerEstilizado>
  );
};

export default Banner;
