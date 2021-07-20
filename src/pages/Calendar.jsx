import React, { useState } from "react";
import { useSwipeable } from "react-swipeable"; //https://www.npmjs.com/package/react-swipeable
import { config, useSpring, useTransition } from "react-spring";
import { useParams } from "react-router-dom";
//OWN COMPONENTS
import * as Component from "../components/calendar/CalendarComps";

//BUILDING FUNCTIONS
import { buildCalendar } from "../utils/calendarBuilders";

//DATE FUNCTIONS
import {
  getMonth,
  calculatePreviousMonth,
  calculateNextMonth,
} from "../services/dateFunctions";
import {
  TopElementAnimated,
  AnimationsContainer,
  BottomImageElement,
  AuthorCredits,
} from "../components/calendar/DecorationComps";
import summerSvgUrl from "../svgs/orangeSummer.svg";
import snowflakeUrl from "../svgs/snowflake.svg";
import winterBottom from "../svgs/snowy-mountains.jpg";
import summerBottom from "../svgs/beach.svg";
import springBottom from "../svgs/springBackground.svg";
import autumnBottom from "../svgs/autumnBackground.svg";
//CACHE ALIKE CONSTANT
// const [summerTop, winterTop, winterBot, summerBot, springBot, autumnBot] = [
//   summerSvgUrl,
//   snowflakeUrl,
//   winterBottom,
//   summerBottom,
//   springBottom,
//   autumnBottom,
// ];

const Summer = () => {
  return (
    <AnimationsContainer>
      <TopElementAnimated src={summerSvgUrl} />
      <BottomImageElement src={summerBottom}></BottomImageElement>
      <AuthorCredits
        href="https://www.vecteezy.com/free-vector/nature"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nature Vectors by Vecteezy
      </AuthorCredits>
    </AnimationsContainer>
  );
};

const Winter = () => {
  return (
    <AnimationsContainer>
      <TopElementAnimated src={snowflakeUrl} />
      <BottomImageElement src={autumnBottom}></BottomImageElement>
      <AuthorCredits
        href="https://www.vecteezy.com/free-vector/nature"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nature Vectors by Vecteezy
      </AuthorCredits>
    </AnimationsContainer>
  );
};

const Autumn = () => {
  return (
    <AnimationsContainer>
      <TopElementAnimated src={snowflakeUrl} />
      <BottomImageElement src={winterBottom}></BottomImageElement>
    </AnimationsContainer>
  );
};

const Spring = () => {
  return (
    <AnimationsContainer>
      <TopElementAnimated src={summerSvgUrl} />
      <BottomImageElement src={springBottom}></BottomImageElement>
      <AuthorCredits
        href="https://www.vecteezy.com/free-vector/spring"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spring Vectors by Vecteezy
      </AuthorCredits>
    </AnimationsContainer>
  );
};

const buildDecoration = (month) => {
  if (month === 12) return Summer();
  if (month >= 1 && month <= 3) return Summer();
  if (month > 3 && month <= 6) return Winter();
  if (month > 6 && month <= 9) return Autumn();
  if (month > 9 && month <= 11) return Spring();
};

//------------------------------------------------------
const Calendar = () => {
  const urlParams = useParams();

  const [recalculatingMonths, setRecalculatingMonths] = useState(true);
  const [month, setMonth] = useState(parseInt(urlParams.month));
  const [year, setYear] = useState(parseInt(urlParams.year));

  //EVENT HANDLERS

  const mobileHandlers = useSwipeable({
    onSwipedRight: () => {
      setRecalculatingMonths((prev) => !prev);
      const calculatePrevMonth = calculatePreviousMonth(month, year);
      setMonth(parseInt(calculatePrevMonth[0]));
      setYear(parseInt(calculatePrevMonth[1]));
      setRecalculatingMonths((prev) => !prev);
    },
    onSwipedLeft: () => {
      setRecalculatingMonths((prev) => !prev);
      const calculateNextMonths = calculateNextMonth(month, year);

      setMonth(parseInt(calculateNextMonths[0]));
      setYear(parseInt(calculateNextMonths[1]));
      setRecalculatingMonths((prev) => !prev);
    },
  });

  const calendarAnimation = useSpring({
    from: { transform: "translateX(-100vw )" },
    to: { transform: "translateX(0)" },

    config: config.gentle,
  });

  const topBarCalendarAnimation = useSpring({
    from: { transform: "translateY(-80vh )" },
    to: {
      transform: "translateY(0)",
    },

    config: config.gentle,
  });

  const swipeTransition = useTransition(recalculatingMonths, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,

      delay: 200,
    },
    leave: {
      opacity: 0,
    },
  });

  return (
    <Component.CalendarContainer month={month}>
      <Component.CalendarHeader style={topBarCalendarAnimation}>
        <Component.CurrentDate>
          <Component.YearLinkRouter to="/selectyear">
            <Component.Year style={calendarAnimation}>
              {year} <i className="fas fa-caret-down"></i>
            </Component.Year>
          </Component.YearLinkRouter>
          <Component.Month>{getMonth(month)}</Component.Month>
        </Component.CurrentDate>
        <Component.NavMenu to="/addtask">
          <i className="fas fa-ellipsis-v"></i>
        </Component.NavMenu>
      </Component.CalendarHeader>
      {swipeTransition((styles, item) => {
        return (
          item && (
            <Component.CalendarGrid {...mobileHandlers} style={styles}>
              {buildCalendar(year, month)}
            </Component.CalendarGrid>
          )
        );
      })}
      {buildDecoration(month)}
    </Component.CalendarContainer>
  );
};

export default Calendar;
