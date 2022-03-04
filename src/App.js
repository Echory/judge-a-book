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
      books: [],
      randomBook: undefined,
      savedBooks: []
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  async getBooks() {
    const books = await fetchBooks()
    this.setState({books})

    this.setRandomBook()
  }

  setRandomBook = () => {
    const randomBook = this.state.books[Math.floor(Math.random()*this.state.books.length)];
    this.setState({randomBook})
  }

  saveBook = () => {
    this.setState({savedBooks: [...this.state.savedBooks, this.state.randomBook]})
    debugger
  } 


  render() {
    return(
      <Switch>
        <Route exact path="/">
          <VotingPage saveBook={this.saveBook} nextBook={this.setRandomBook} book={this.state.randomBook}/>
        </Route>
        <Route exact path="/saved">
          <SavedPage savedBooks={this.state.savedBooks} />
        </Route>
      </Switch>
    )
  }
}

export default App;
