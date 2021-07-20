import React, { useState } from "react";
import { Prompt } from "react-router-dom";

import {
  buildMonthsClickables,
  buildYearsClickables,
} from "../../utils/calendarBuilders";
import { setCurrentMonth, setCurrentYear } from "../../utils/calendarFunctions";
import { YearSliderSelector, YearSelectorBackButton } from "./CalendarComps";

const YearSelector = () => {
  const [year, setYear] = useState(setCurrentYear());
  const [month, setMonth] = useState(setCurrentMonth());

  const intersectYearClicked = (yearReceptor) => {
    setYear(yearReceptor);
  };

  const intersectMonthClicked = (yearReceptor) => {
    setMonth(yearReceptor);
  };

  return (
    <>
      <YearSliderSelector>
        {buildYearsClickables(intersectYearClicked)}
      </YearSliderSelector>
      <YearSliderSelector>
        {buildMonthsClickables(intersectMonthClicked)}
      </YearSliderSelector>

      <YearSelectorBackButton
        to={`calendar/${year}/${month}`} /*onClick={handleYearClick} */
      >
        Aplicar
      </YearSelectorBackButton>
      <Prompt
        message={(location, action) => {
          if (action === "POP") alert("NO GUARDASTE LOS CAMBIOS");
        }}
      ></Prompt>
    </>
  );
};

export default YearSelector;
