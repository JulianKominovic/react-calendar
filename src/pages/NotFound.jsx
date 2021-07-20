import React from "react";
import styled from "styled-components";

const generateCustomPosition = () => {
  const MAX = 100;
  const MIN = -50;
  let res = parseInt(Math.random() * (MAX - MIN) + MIN);
  return res;
};

const Container = styled.div`
  background-image: linear-gradient(0deg, #8551ff, #3000a1);
  color: #fff;
  text-shadow: 0 0 10px #000;
  height: 100vh;
  text-align: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  font-family: "Roboto", sans-serif;
`;

const ErrorText = styled.p`
  font-size: clamp(10px, 20vw, 200px);
  font-weight: 800;
  margin-bottom: 0;
  position: relative;
  z-index: 1;
`;

const SuggestionText = styled.p`
  font-size: clamp(10px, 5vw, 200px);
  font-weight: 400;
  position: relative;
  z-index: 1;
`;

const PlanetsText = styled.p`
  font-family: "Planets";
  font-size: 400px;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  color: #feffc3;
  animation: animatedPlanets infinite 10s ease-in-out alternate-reverse;
  z-index: 0;
  @keyframes animatedPlanets {
    0% {
      top: ${(props) => props.initY} vh;
      left: ${(props) => props.initX} vw;
    }
    100% {
      top: ${(props) => props.endY}vh;
      left: ${(props) => props.endX}vw;
    }
  }
`;
const NotFound = () => {
  return (
    <Container>
      <ErrorText>ERROR 404</ErrorText>
      <SuggestionText>
        Creo que te perdiste en un lugar desconocido
      </SuggestionText>
      <PlanetsText
        initY={generateCustomPosition() - generateCustomPosition()}
        initX={generateCustomPosition() - generateCustomPosition()}
        endY={generateCustomPosition() - generateCustomPosition()}
        endX={generateCustomPosition() - generateCustomPosition()}
      >
        _
      </PlanetsText>
    </Container>
  );
};

export default NotFound;
