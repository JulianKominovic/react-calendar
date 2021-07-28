import { animated } from "react-spring";
import styled from "styled-components";

const AnimationsContainer = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${(props) => {
    if (props.month === 12) return "#76FFFF";
    if (props.month >= 1 && props.month <= 3) {
      return "#76FFFF";
    }
    if (props.month > 3 && props.month <= 6) {
      return "#FCD499";
    }
    if (props.month > 6 && props.month <= 9) {
      return "#DAF1FF";
    }
    if (props.month > 9 && props.month <= 11) {
      return "#BAE0F2";
    }
  }};
`;

const TopElementAnimated = styled(animated.img)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
  top: -50vh;
  right: -50vw;
`;

const BottomImageElement = styled(animated.img)`
  height: 40vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  object-position: top;
`;

const AuthorCredits = styled.a`
  width: 100vw;

  position: absolute;
  z-index: 0;
  left: 0;
  bottom: 1vh;
  font-size: clamp(10px, 2vw, 20px);
  text-decoration: none;
  color: black;
  text-align: center;
  font-weight: 800;
  background-color: rgba(255, 255, 255, 0.609);
`;

export {
  TopElementAnimated,
  AnimationsContainer,
  BottomImageElement,
  AuthorCredits,
};
