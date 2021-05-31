import { Switch,Route } from "react-router-dom";
/*import Signup from "./pages/registration/Signup";*/
import Login from "./pages/registration/Login";
import MainRegistration from "./pages/registration/main_registration";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <MainRegistration />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
