import { Link } from "react-router-dom";
import styled from "styled-components";
import { EDIT_TASK_THEME } from "../../themes";

const TaskEditContainer = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.backgroundColor,
  },
}))`
  padding: 1vh 4vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  gap: 1.6vh;
`;

const InputTitle = styled.input.attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.198);
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.25);
  padding: 1vh 0;
  text-align: center;

  width: 70%;

  font-size: clamp(10px, 6vw, 100px);

  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputDesc = styled.textarea.attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  background-color: ${EDIT_TASK_THEME.cardBackgroundColor};

  border: none;
  border-radius: 1.6em;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.513);
  padding: 2vh 4vw;
  width: 50%;
  height: 40vh;

  font-weight: 400;
  font-size: clamp(10px, 2vw, 100px);
  &::placeholder {
    text-align: center;
  }
  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputTime = styled.input.attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  background-color: ${EDIT_TASK_THEME.cardBackgroundColor};

  border: none;
  border-radius: 1.6em;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25);
  padding: 1vh 4vw;
  margin-right: 3vw;
  text-align: left;

  font-weight: 400;

  &::placeholder {
    color: ${EDIT_TASK_THEME.placeHolderColor};
  }
  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputNotification = styled.button.attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  background-color: ${EDIT_TASK_THEME.cardBackgroundColor};
  border: none;
  border-radius: 1.6em;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25);
  padding: 1vh;
  width: 10vw;

  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputColor = styled.input`
  background-color: ${EDIT_TASK_THEME.cardBackgroundColor};
  border: none;
  border-radius: 1.6em;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 1vh;
  width: 10vw;
  outline: none;

  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const InputLabel = styled.label.attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  margin-right: 4vw;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled(Link).attrs((props) => ({
  style: {
    color: props.textcolor,
  },
}))`
  background-color: transparent;

  text-align: center;
  border-radius: 1.6em;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.25);
  padding: 2vh 16vw;
  text-decoration: none;

  &:active,
  :focus,
  :hover {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

export {
  TaskEditContainer,
  InputTitle,
  InputDesc,
  InputTime,
  InputNotification,
  InputLabel,
  InputColor,
  SubmitButton,
};
