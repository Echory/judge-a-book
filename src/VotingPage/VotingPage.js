import React from "react"
import "./VotingPage.css"
import { Link } from "react-router-dom"

const VotingPage = ({book, nextBook, saveBook}) => {
  if(book) {
    return(
      <div className="vote-container">
        <div className="header">
          <h1 className="app-name">Judge A Book</h1>
          <Link to="/saved">
            <button className="saved-button">See Saved</button>
          </Link>
        </div>
        <p className="judge-para">Go ahead, judge a book by it's cover</p>
        <section className="cover-section">
          <img className="cover-img" src={book.volumeInfo.imageLinks.thumbnail}/>
          <div className="vote-buttons">
            <button className="vote-button thumbs-up" onClick={saveBook}>👍</button>
            <button className="vote-button thumbs-down" onClick={nextBook}>👎</button>
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default VotingPage