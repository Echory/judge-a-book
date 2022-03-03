import React from "react"
import "./VotingPage.css"

const VotingPage = ({book, nextBook, saveBook}) => {
  if(book) {
    return(
      <div>
        <h1 className="app-name">Judge A Book</h1>
        <p className="judge-para">Go ahead, judge a book by it's cover</p>
        <section className="cover-section">
          <img className="cover-img" src={book.volumeInfo.imageLinks.thumbnail}/>
          <div className="vote-buttons">
            <button onClick={saveBook}>👍</button>
            <button onClick={nextBook}>👎</button>
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default VotingPage