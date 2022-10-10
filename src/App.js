
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Billing from "./pages/Billing";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import TroppyMgt from "./pages/TropphyMgt";
import ViewPlayerProfile from "./pages/ViewPlayerProfile";
import TeamMgt from "./pages/TeamMgt";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/tropphy-mgt" component={TroppyMgt} />
          <Route exact path="/view-player-profile" component={ViewPlayerProfile} />
          <Route exact path="/team-mgt" component={TeamMgt} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
