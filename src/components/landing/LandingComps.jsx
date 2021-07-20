import { Link } from "react-router-dom";
import styled from "styled-components";
import { LANDING_THEME } from "../../themes";

const LandingBody = styled.header`
  font-family: "Roboto", sans-serif;
  color: ${LANDING_THEME.fc};

  background-color: ${LANDING_THEME.bg};

  width: 100vw;

  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const LandingLogoContainer = styled.div`
  font-size: clamp(10px, 30vw, 160px);
`;

const Title = styled.h1`
  font-size: clamp(10px, 10vw, 100px);
  font-weight: 800;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: clamp(10px, 3.6vw, 100px);
  font-weight: 300;
  margin-top: -10vh;
`;

const SocialLinks = styled.a`
  font-size: clamp(10px, 14vw, 100px);
  color: ${LANDING_THEME.fc};
`;

const HorizontalFlex = styled.div`
  display: flex;
  gap: 3em;
`;
const StyledReactLink = styled(Link)`
  background-color: ${LANDING_THEME["btn-clr"]};
  padding: 1em 3em;
  font-size: clamp(10px, 5vw, 100px);
  border-radius: 1.3em;
  text-decoration: none;
  color: #fff5eb;
`;

export {
  LandingBody,
  LandingLogoContainer,
  Title,
  Subtitle,
  SocialLinks,
  HorizontalFlex,
  StyledReactLink,
};
