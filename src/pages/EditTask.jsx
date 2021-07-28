import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  addTaskToDatabase,
  replaceTask,
} from "../services/localStorageManagment";

import {
  NavBarTask,
  BackButton,
  GeneralSection,
  Year,
  MonthAndDay,
} from "../components/addtask/AddTaskComps";
import {
  TaskEditContainer,
  InputTitle,
  InputDesc,
  InputTime,
  InputNotification,
  InputColor,
  InputLabel,
  SubmitButton,
} from "../components/edittask/EditTaskComps";
import { getDayOfTheWeek, getMonth } from "../services/dateFunctions";

const EditTask = (props) => {
  const { title, desc, time, color, notification } =
    props.location.aboutProps !== undefined
      ? props.location.aboutProps
      : {
          title: "",
          desc: "",
          time: "",
          color: "",
          notification: null,
        };

  const calculateInverseColor = () => {
    return (Number(`0x1${bgColor.slice(1)}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  };
  const params = useParams();
  const year = parseInt(params.year);
  const month = parseInt(params.month);
  const day = parseInt(params.day);

  const [bgColor, setBgColor] = useState(color || "");
  const [fgColor, setFgColor] = useState("#" + calculateInverseColor(bgColor));

  const [taskConfig, setTaskConfig] = useState({
    title: title,
    desc: desc,
    time: time,
    color: color || "#ffffff",
    notification: notification !== null ? notification : false,
  });

  const handleTitleChange = (e) => {
    setTaskConfig((prevElements) => ({
      ...prevElements,
      title: e.target.value,
    }));
  };
  const handleDescChange = (e) => {
    setTaskConfig((prevElements) => ({
      ...prevElements,
      desc: e.target.value,
    }));
  };
  const handleTimeChange = (e) => {
    setTaskConfig((prevElements) => ({
      ...prevElements,
      time: e.target.value,
    }));
  };
  const handleColorChange = (e) => {
    setTaskConfig((prevElements) => ({
      ...prevElements,
      color: e.target.value,
    }));

    setBgColor(e.target.value);
    setFgColor("#" + calculateInverseColor(e.target.value));
  };
  const handleNotificationChange = (e) => {
    setTaskConfig((prevElements) => ({
      ...prevElements,
      notification: !prevElements.notification,
    }));
  };

  const updateTask = () => {
    props.location.aboutProps === undefined
      ? addTaskToDatabase(taskConfig, year, month, day)
      : replaceTask(year, month, day, title, taskConfig);
  };

  return (
    <TaskEditContainer backgroundColor={bgColor} textcolor={fgColor}>
      <NavBarTask>
        <BackButton color={fgColor} to={`/addtask/${year}/${month}/${day}`}>
          <i className="fas fa-arrow-circle-left"></i>
        </BackButton>
        <GeneralSection>
          <Year color={fgColor}>{year}</Year>
          <MonthAndDay color={fgColor}>
            {getDayOfTheWeek(year, month, day)} {day}, {getMonth(month)}
          </MonthAndDay>
        </GeneralSection>
      </NavBarTask>

      <InputTitle
        type="text"
        name="title"
        id="title"
        placeholder="Titulo..."
        value={taskConfig.title}
        onChange={(e) => handleTitleChange(e)}
        textcolor={fgColor}
      />

      <InputDesc
        type="text"
        name="desc"
        id="desc"
        placeholder="Descripcion"
        onChange={(e) => handleDescChange(e)}
        value={taskConfig.desc}
        textcolor={fgColor}
      />
      <GeneralSection>
        <InputTime
          type="time"
          name="time"
          id="time"
          onChange={(e) => handleTimeChange(e)}
          value={taskConfig.time}
          textcolor={fgColor}
        />
        <InputNotification
          type="button"
          onClick={(e) => handleNotificationChange(e)}
          textcolor={fgColor}
        >
          {taskConfig.notification === true ? (
            <i className="fas fa-bell-slash"></i>
          ) : (
            <i className="fas fa-bell"></i>
          )}
        </InputNotification>
      </GeneralSection>

      <GeneralSection>
        <InputLabel htmlFor="color" textcolor={fgColor}>
          Elegi un color
        </InputLabel>
        <InputColor
          type="color"
          name="color"
          id="color"
          onChange={(e) => handleColorChange(e)}
          value={taskConfig.color}
        />
      </GeneralSection>
      <InputLabel type="submit" value="Guardar" onClick={updateTask} />
      <SubmitButton
        to={`/addtask/${year}/${month}/${day}`}
        onClick={updateTask}
        textcolor={fgColor}
      >
        Guardar
      </SubmitButton>
    </TaskEditContainer>
  );
};

export default EditTask;
