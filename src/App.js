import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookDetails from "./screens/bookDetails/bookDetails";
import LandingPage from "./screens/landingPage/landingPage";
import SignIn from "./screens/signIn/signIn";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/details" component={BookDetails}></Route>
        <Route exact path="/signIn" component={SignIn}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
