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

const BackButton = styled(Link).attrs((props) => ({
  style: {
    color: props.color || EDIT_TASK_THEME.fc,
  },
}))`
  text-decoration: none;

  font-size: clamp(10px, 12vw, 100px);
`;
const GeneralSection = styled.div`
  text-align: right;
`;

const Year = styled.h1.attrs((props) => ({
  style: {
    color: props.color || EDIT_TASK_THEME.fc,
  },
}))`
  margin: 0;

  font-size: clamp(10px, 8vw, 4em);
`;

const MonthAndDay = styled.h2.attrs((props) => ({
  style: {
    color: props.color || EDIT_TASK_THEME.fc,
  },
}))`
  margin: 0;

  font-weight: 300;
  line-height: 0.8em;
  font-size: clamp(10px, 6vw, 3em);
`;

const TaskBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding: 2vh 4vw;

  overflow-y: hidden;
`;

const TextIndicatesLists = styled.h3`
  margin: 0;
  color: ${EDIT_TASK_THEME.fc};
  font-weight: 600;
  margin-bottom: 2vh;
  margin-right: 2vw;
  font-size: clamp(10px, 4vw, 2em);
`;

const EmptyTask = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 8vw;
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
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: clamp(10px, 4vw, 2em);
`;

const TaskButton = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: clamp(10px, 6vw, 3em);
  margin-left: 4vw;
`;

const Task = styled.div`
  background-color: ${(props) => props.backgroundColor || " #fef"};
  border-radius: 8vw;
  padding: 2vh 4vw;
  width: 82vw;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
`;

const TaskTitle = styled.h4`
  width: 50%;
  margin: 0;
  color: ${(props) => {
    return props.textcolor;
  }};
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: clamp(10px, 4vw, 2em);
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
