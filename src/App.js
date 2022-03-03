import {Component} from "react"
import { Route, Switch } from "react-router-dom";
import './App.css'
import VotingPage from "./VotingPage/VotingPage"
import SavedPage from "./SavedPage/SavedPage";
import {fetchBooks} from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  async getBooks() {
    const books = await fetchBooks()
    this.setState({books})
  }

  render() {
    return(
      <Switch>
        <Route exact path="/">
          <VotingPage books={this.state.books} />
        </Route>
        <Route exact path="/saved">
          <SavedPage />
        </Route>
      </Switch>
    )
  }
}

export default App;
