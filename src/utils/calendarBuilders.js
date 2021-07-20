import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Component from "../components/calendar/CalendarComps";
import { getDaysOfMonth, getCurrentDate } from "../services/dateFunctions";
import moment from "moment";
import { USER_LANGUAGE } from "../services/dateFunctions";

const buildYearsClickables = (handleYearChange) => {
  const elements = [];
  for (let i = 2023; i > 2017; i--) {
    elements.push(
      <Component.YearSelectorButton
        name={i}
        key={i}
        onClick={(e) => {
          handleYearChange(parseInt(e.target.name));
        }}
      >
        {i}
      </Component.YearSelectorButton>
    );
  }

  return elements.map((e) => e);
};

const buildMonthsClickables = (handleMonthChange) => {
  const elements = [];
  for (let i = 0; i < 12; i++) {
    const month = moment().locale(USER_LANGUAGE).month(i).format("MMMM");
    const finalMonth = month.charAt(0).toUpperCase() + month.slice(1);
    elements.push(
      <Component.MonthSelectorButton
        name={i + 1}
        key={i + 1}
        onClick={(e) => {
          return handleMonthChange(parseInt(e.target.name));
        }}
      >
        {finalMonth}
      </Component.MonthSelectorButton>
    );
  }
  return elements.map((e) => e);
};

const buildCalendar = (year, month) => {
  const daysOfMonths = getDaysOfMonth(year, month);

  let numberOfMatches = 0;

  //ACTUAL DATE
  let actualDateArray = getCurrentDate().split(",");
  let currentDay = actualDateArray[1];
  let currentMonth = actualDateArray[2];
  let currentYear = actualDateArray[3];

  //Dynamic component
  let FinalComponent = styled(Link);

  return daysOfMonths.map((item, index) => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    if (item === "1") numberOfMatches++;
    if (numberOfMatches === 1) {
      // color = "#000";
      FinalComponent = Component.ValidDays;
      if (
        month === currentMonth &&
        year === currentYear &&
        currentDay === item
      ) {
        FinalComponent = Component.CurrentDay;
      }
    }
    if (numberOfMatches > 1 || numberOfMatches === 0)
      FinalComponent = Component.OffsetDays;
    if (index < 7) FinalComponent = Component.DaysOfWeekNames;

    return (
      <FinalComponent to={`/addTask/${year}/${month}/${item}`} key={index}>
        {item}
      </FinalComponent>
    );
  });
};

export { buildCalendar, buildMonthsClickables, buildYearsClickables };
