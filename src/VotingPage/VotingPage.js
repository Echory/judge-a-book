import React from "react"
import "./VotingPage.css"

const VotingPage = ({book, nextBook}) => {
  if(book) {
    return(
      <div>
        <h1 className="app-name">Judge A Book</h1>
        <section className="cover-section">
          <img src={book.volumeInfo.imageLinks.thumbnail}/>
          <div className="vote-buttons">
            <button>👍</button>
            <button onClick={nextBook}>👎</button>
          </div>
        </section>
      </div>
    )
  }

  return null
}

export default VotingPage