//PAGES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import SelectYear from "./pages/SelectYear";
import AddTaskBar from "./pages/AddTaskBar";
import EditTask from "./pages/EditTask";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/calendar/:year/:month" component={Calendar}></Route>
        <Route exact path="/selectyear" component={SelectYear}></Route>
        <Route
          exact
          path="/addtask/:year/:month/:day"
          component={AddTaskBar}
        ></Route>
        <Route
          exact
          path="/edittask/:year/:month/:day"
          component={EditTask}
        ></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
