import styled from "styled-components";

export const Title = () => {
  return (
    <Header>
      <h1>
        <span>Gaming Site</span>
        <span>Gaming Site</span>
      </h1>
      <h2>Lets Play!</h2>
    </Header>
  );
};

const Header = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  h1 {
    position: relative;
    font-family: "Exo";
    font-size: 9em;
    margin: 0;
    transform: skew(-15deg);
    letter-spacing: 0.03em;
    z-index: -1;
    &::after {
      content: "";
      position: absolute;
      top: -0.1em;
      right: 0.05em;
      width: 0.4em;
      height: 0.4em;
      background: radial-gradient(
          white 3%,
          rgba(white, 0.3) 15%,
          rgba(white, 0.05) 60%,
          transparent 80%
        ),
        radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 5% 100%,
        radial-gradient(rgba(white, 0.2) 50%, transparent 60%) 50% 50% / 70% 5%;
      background-repeat: no-repeat;
    }

    span:first-child {
      display: block;
      text-shadow: 0 0 0.1em #8ba2d0, 0 0 0.2em black, 0 0 5em #165ff3;
      -webkit-text-stroke: 0.06em rgba(black, 0.5);
    }

    span:last-child {
      position: absolute;
      left: 0;
      top: 0;
      background-image: linear-gradient(
        #032d50 25%,
        #00a1ef 35%,
        white 50%,
        #20125f 50%,
        #8313e7 55%,
        #ff61af 75%
      );
      -webkit-text-stroke: 0.01em #94a0b9;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h2 {
    font-family: "Mr Dafoe";
    margin: 0;
    font-size: 5.5em;
    margin-top: -0.6em;
    color: white;
    text-shadow: 0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.3em #fe05e1;
    transform: rotate(-7deg);
  }
`;
