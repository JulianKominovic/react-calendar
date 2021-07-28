import React from "react";
import { useParams } from "react-router-dom";
import {
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
} from "../components/addtask/AddTaskComps";
import { getMonth, getDayOfTheWeek } from "../services/dateFunctions";
import {
  removeTaskToDatabase,
  requestTasks,
  toggleNotificationFromTask,
} from "../services/localStorageManagment";

const AddTaskBar = (props) => {
  const params = useParams();
  const day = parseInt(params.day);
  const month = parseInt(params.month);
  const year = parseInt(params.year);

  const calculateInverseColor = (hex) => {
    return (Number(`0x1${hex.slice(1)}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  };

  const buildTasks = () => {
    const taskRequest = requestTasks(year, month, day);

    return taskRequest.map((item) => {
      const taskTextColor = "#" + calculateInverseColor(item.color);

      return (
        <Task key={item.title} backgroundColor={item.color}>
          <TaskTitle textcolor={taskTextColor}>{item.title}</TaskTitle>

          <GeneralSection>
            <TaskButton
              to={`/addtask/${year}/${month}/${day}`}
              color={taskTextColor}
              onClick={() => {
                toggleNotificationFromTask(year, month, day, item.title);
                alert("Esta funcion aun no esta disponible");
              }}
            >
              {item.notification ? (
                <i className="fas fa-bell-slash"></i>
              ) : (
                <i className="fas fa-bell"></i>
              )}
            </TaskButton>
            <TaskButton
              color={taskTextColor}
              to={{
                pathname: `/edittask/${year}/${month}/${day}`,
                aboutProps: item,
              }}
            >
              <i className="fas fa-edit"></i>
            </TaskButton>
            <TaskButton
              color={taskTextColor}
              to={`/addtask/${year}/${month}/${day}`}
              onClick={(e) =>
                removeTaskToDatabase(year, month, day, item.title)
              }
            >
              <i className="fas fa-trash"></i>
            </TaskButton>
          </GeneralSection>
        </Task>
      );
    });
  };

  return (
    <AddTaskbarBody>
      <NavBarTask>
        <BackButton to={`/calendar/${year}/${month}`}>
          <i className="fas fa-arrow-circle-left"></i>
        </BackButton>
        <GeneralSection>
          <Year>{year}</Year>
          <MonthAndDay>
            {getDayOfTheWeek(year, month, day)} {day}, {getMonth(month)}
          </MonthAndDay>
        </GeneralSection>
      </NavBarTask>
      <TaskBar>
        <TextIndicatesLists>Lista de tareas</TextIndicatesLists>
        {requestTasks(year, month, day) !== null ? buildTasks() : null}

        <EmptyTask>
          <EmptyTaskTitle>Nueva tarea</EmptyTaskTitle>
          <TaskButton to={`/edittask/${year}/${month}/${day}`}>
            <i className="fas fa-plus"></i>
          </TaskButton>
        </EmptyTask>
      </TaskBar>
    </AddTaskbarBody>
  );
};

export default AddTaskBar;
