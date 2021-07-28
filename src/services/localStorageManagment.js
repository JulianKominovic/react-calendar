const localStorage = window.localStorage;

//LOCALSTORAGE KEY IS THE CONCATENATION OF YEAR MONTH AND DAY BUT PARSED
//THE PRIMARY KEY Of TASKS OBJECTS ARE THEIR TITLE

//if the task is already in data base returns -1
const addTaskToDatabase = (object, year, month, day) => {
  const id = parseInt("" + year + month + day);
  const arrayOfObjects = [];

  if (typeof localStorage.getItem(id) === typeof "") {
    const destructurizeStorage = JSON.parse(localStorage.getItem(id));
    let isItemDuplicated = false;
    destructurizeStorage.forEach((item) => {
      if (item.title === object.title) {
        isItemDuplicated = true;
      }
    });
    if (isItemDuplicated === true) return -1;

    destructurizeStorage.map((item) => arrayOfObjects.push(item));
    arrayOfObjects.push(object);
    localStorage.setItem(id, JSON.stringify(arrayOfObjects));
  } else {
    arrayOfObjects.push(object);
    localStorage.setItem(id, JSON.stringify(arrayOfObjects));
  }
};

const removeTaskToDatabase = (year, month, day, keyTaskTitle) => {
  const id = parseInt("" + year + month + day);

  const arrayOfObjects = [];

  if (typeof localStorage.getItem(id) === typeof "") {
    const destructurizeStorage = JSON.parse(localStorage.getItem(id));
    destructurizeStorage.map((item) => arrayOfObjects.push(item));
    const filteredArray = arrayOfObjects.filter(
      (item) => item.title !== keyTaskTitle
    );

    localStorage.setItem(id, JSON.stringify(filteredArray));
  }
};

const requestTasks = (year, month, day) => {
  const id = parseInt("" + year + month + day);

  return JSON.parse(localStorage.getItem(id));
};

const replaceTask = (year, month, day, keyTaskTitle, newTaskData) => {
  const id = parseInt("" + year + month + day);

  const localStorageData = JSON.parse(localStorage.getItem(id));
  const filteredArray = localStorageData.filter(
    (item) => item.title !== keyTaskTitle
  );
  filteredArray.push(newTaskData);
  localStorage.setItem(id, JSON.stringify(filteredArray));
};

const toggleNotificationFromTask = (year, month, day, keyTaskTitle) => {
  const id = parseInt("" + year + month + day);
  const localStorageData = JSON.parse(localStorage.getItem(id));
  const finalArray = localStorageData.map((item) => {
    const localItem = item;
    if (localItem.title === keyTaskTitle)
      localItem.notification = !localItem.notification;
    return localItem;
  });
  localStorage.setItem(id, JSON.stringify(finalArray));
};

const clearLocalStorage = () => {
  localStorage.clear();
};

export {
  clearLocalStorage,
  addTaskToDatabase,
  removeTaskToDatabase,
  requestTasks,
  replaceTask,
  toggleNotificationFromTask,
};
