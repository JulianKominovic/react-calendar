import styled from "styled-components";
import { CALENDAR_THEME, SELECT_YEAR_THEME } from "../../themes";
import { Link } from "react-router-dom";
import { animated } from "react-spring";

const CalendarContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

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
  color: ${CALENDAR_THEME.fc};
`;

const CalendarHeader = styled(animated.div)`
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;
  padding-top: 3vh;
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

  /* margin-top: 4vh; */
  display: grid;

  position: relative;
  z-index: 1;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 0.4fr repeat(6, 1fr);

  place-items: center;
  text-align: center;

  font-size: clamp(10px, 4vw, 50px);
  font-weight: 600;

  margin: 8vh 2vh 2vh 2vh;
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
  font-size: clamp(10px, 12vw, 100px);
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
  font-size: clamp(10px, 8vw, 60px);
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
  font-size: clamp(10px, 5vw, 60px);
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
