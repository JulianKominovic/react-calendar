import React from "react";
import { setCurrentYear, setCurrentMonth } from "../utils/calendarFunctions";

import {
  LandingBody,
  LandingLogoContainer,
  Title,
  Subtitle,
  SocialLinks,
  HorizontalFlex,
  StyledReactLink,
} from "../components/landing/LandingComps";

const Landing = () => {
  return (
    <LandingBody>
      <LandingLogoContainer>
        <i className="fas fa-calendar"></i>
      </LandingLogoContainer>
      <Title>Simple Calendar</Title>
      <Subtitle>Just a lightweight pocket calendar</Subtitle>
      <StyledReactLink
        to={`/calendar/${setCurrentYear()}/${setCurrentMonth()}`}
      >
        Continue
      </StyledReactLink>
      <HorizontalFlex>
        <SocialLinks href="https://www.linkedin.com/in/jkominovic/">
          <i className="fab fa-linkedin"></i>
        </SocialLinks>
        <SocialLinks href="https://github.com/JulianKominovic">
          <i className="fab fa-github"></i>
        </SocialLinks>
      </HorizontalFlex>
      <Subtitle>Julian Ezequiel Kominovic</Subtitle>
    </LandingBody>
  );
};

export default Landing;
