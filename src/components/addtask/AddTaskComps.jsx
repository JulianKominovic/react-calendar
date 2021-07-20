import { Link } from "react-router-dom";
import styled from "styled-components";
import { EDIT_TASK_THEME } from "../../themes";

const AddTaskbarBody = styled.div`
  background-color: #40e0d0;
  min-height: 100vh;
`;

const NavBarTask = styled.div`
  padding: 2vh 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vh;
  width: 82vw;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: ${EDIT_TASK_THEME.fc};
  font-size: clamp(10px, 12vw, 100px);
`;
const GeneralSection = styled.div`
  text-align: right;
`;

const Year = styled.h1`
  margin: 0;
  color: ${EDIT_TASK_THEME.fc};
`;

const MonthAndDay = styled.h2`
  margin: 0;
  color: ${EDIT_TASK_THEME.fc};
  font-weight: 300;
  line-height: 0.8em;
`;

const TaskBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding: 2vh 4vw;

  overflow-y: scroll;
`;

const TextIndicatesLists = styled.h3`
  margin: 0;
  color: ${EDIT_TASK_THEME.fc};
  font-weight: 600;
  margin-bottom: 2vh;
  margin-right: 2vw;
`;

const EmptyTask = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 1.6em;
  padding: 2vh 4vw;
  width: 82vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmptyTaskTitle = styled.h4`
  margin: 0;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 700;
`;

const TaskButton = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.3);
  font-size: clamp(10px, 6vw, 100px);
  margin-left: 6vw;
`;

const Task = styled.div`
  background-color: ${(props) => props.backgroundColor || " #fef"};
  border-radius: 1.6em;
  padding: 2vh 4vw;
  width: 82vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
`;

const TaskTitle = styled.h4`
  margin: 0;
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
`;

const TaskHour = styled.h4`
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;

  &:after {
    content: " hs.";
  }
`;

export {
  AddTaskbarBody,
  NavBarTask,
  BackButton,
  GeneralSection,
  Year,
  MonthAndDay,
  TaskBar,
  TextIndicatesLists,
  EmptyTask,
  EmptyTaskTitle,
  TaskButton,
  Task,
  TaskTitle,
  TaskHour,
};
