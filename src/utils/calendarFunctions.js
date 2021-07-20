import { getCurrentDate } from "../services/dateFunctions";

const setCurrentMonth = () => {
  const dateText = getCurrentDate().split(",");
  const actualDay = parseInt(dateText[2]);

  return actualDay;
};

const setCurrentYear = () => {
  const dateText = getCurrentDate().split(",");
  const actualMonth = parseInt(dateText[3]);
  return actualMonth;
};

export { setCurrentMonth, setCurrentYear };
