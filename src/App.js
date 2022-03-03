import {Component} from "react"
import { Route, Switch } from "react-router-dom";
import './App.css'
import VotingPage from "./VotingPage/VotingPage"
import SavedPage from "./SavedPage/SavedPage";

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <Switch>
        <Route exact path="/">
          <VotingPage />
        </Route>
        <Route exact path="/saved">
          <SavedPage />
        </Route>
      </Switch>
    )
  }
}

export default App;
