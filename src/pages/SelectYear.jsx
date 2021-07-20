import React from "react";

import * as Component from "../components/calendar/CalendarComps";
import YearSelector from "../components/calendar/YearSelector";

const SelectYear = (props) => {
  return (
    <Component.YearSelector>
      <YearSelector />
    </Component.YearSelector>
  );
};

export default SelectYear;
