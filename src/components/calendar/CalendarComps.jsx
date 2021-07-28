import styled from "styled-components";
import { CALENDAR_THEME, SELECT_YEAR_THEME } from "../../themes";
import { Link } from "react-router-dom";
import { animated } from "react-spring";

const CalendarContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  color: ${CALENDAR_THEME.fc};
`;

const CalendarHeader = styled(animated.div)`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  padding-top: 3vh;
  position: relative;
  z-index: 1;
`;

const YearLinkRouter = styled(Link)`
  color: ${CALENDAR_THEME.fc};
  text-decoration: none;
`;

const Year = styled.h1`
  margin: 0;
  cursor: pointer;
  font-size: clamp(10px, 10vw, 50px);

  &:hover,
  :active,
  :focus,
  :checked {
    background-color: transparent;
  }
`;

const Month = styled.h2`
  margin: 0;
  height: 100%;
  font-weight: 400;
  line-height: 0.9em;
  font-size: clamp(10px, 6vw, 2em);
`;
const NavMenu = styled(Link)`
  height: 100%;
  font-size: clamp(10px, 10vw, 50px);
  display: flex;
  align-items: center;
  color: ${CALENDAR_THEME.fc};
`;

const CalendarGrid = styled(animated.div)`
  height: 70vh;

  display: grid;

  position: relative;
  z-index: 1;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 0.4fr repeat(6, 1fr);

  place-items: center;
  text-align: center;

  font-size: clamp(10px, 4vw, 2em);
  font-weight: 600;

  background-color: rgba(255, 255, 255, 0.602);
  border: 1px solid #aaaaaa37;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.226);
  backdrop-filter: blur(6px);
  border-radius: 4vw;
  padding: 1.6vw;

  margin: 8vh 8vw 2vh 8vw;
`;

const CurrentDate = styled(animated.div)``;

const DaysOfWeekNames = styled(Link)`
  color: #000;
`;

const ValidDays = styled(Link)`
  text-decoration: none;
  color: ${CALENDAR_THEME.fc};
`;

const OffsetDays = styled(Link)`
  color: #4e4e4e29;
  text-decoration: none;
`;

const CurrentDay = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

//YEAR SELECTION SECTION
const YearSelector = styled(animated.div)`
  position: absolute;

  top: 0;

  z-index: 99;
  height: 88vh;
  width: 100vw;
  background-color: ${SELECT_YEAR_THEME.bg};

  display: flex;
  flex-direction: column;
  justify-content: start;

  padding-top: 6vh;
  padding-bottom: 6vh;

  align-items: center;
`;

const YearSelectorBackButton = styled(Link)`
  position: fixed;
  bottom: 6vh;
  color: ${SELECT_YEAR_THEME.bgHover};
  left: 50%;
  transform: translate(-50%);
  font-size: clamp(10px, 10vw, 4em);
  text-decoration: none;
  background-color: ${SELECT_YEAR_THEME.fc};
  padding: 1vh 10vw;
  text-align: center;
  font-weight: 600;
  border-radius: 1.6em;
`;

const YearSliderSelector = styled(animated.div)`
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  align-items: center;

  margin-bottom: 6vh;
  height: 38%;
  width: 90vw;

  overflow-y: auto;
`;

const YearSelectorButton = styled(animated.button)`
  color: ${SELECT_YEAR_THEME.fc};
  background-color: transparent;
  border: none;
  padding: 2vh 0;
  font-size: clamp(10px, 8vw, 3em);
  font-weight: 600;
  border-radius: 1.6em;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${SELECT_YEAR_THEME.bgHover};
    color: #fff;
  }
`;

const MonthSelectorButton = styled(animated.button)`
  color: ${SELECT_YEAR_THEME.fc};
  background-color: transparent;
  border: none;
  border-radius: 1.6em;
  padding: 2vh 0;
  font-size: clamp(10px, 5vw, 3em);
  font-weight: 400;
  width: 100%;
  &:hover,
  &:focus {
    background-color: ${SELECT_YEAR_THEME.bgHover};
    color: #fff;
  }
`;

export {
  CalendarContainer,
  CalendarHeader,
  YearLinkRouter,
  Year,
  Month,
  NavMenu,
  CalendarGrid,
  CurrentDate,
  DaysOfWeekNames,
  ValidDays,
  OffsetDays,
  CurrentDay,
  YearSelector,
  YearSelectorBackButton,
  YearSliderSelector,
  YearSelectorButton,
  MonthSelectorButton,
};
