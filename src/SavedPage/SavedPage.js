import React from "react"
import "./SavedPage.css"
import { Link } from "react-router-dom"

const SavedPage = ({savedBooks}) => {
  return(
    <div className="saved-container">
      <Link to="/">
        <button className="back-button">Back To Vote</button>
      </Link>
      <h1 className="to-read">To-read</h1>
      <section className="fetched-books">
        {savedBooks.map(({ id, volumeInfo }) => (
          <div className="book-div" key={id}>
            <p className="cover-title">{volumeInfo.title}</p>
            <img className="saved-img" src={volumeInfo.imageLinks.thumbnail}/>
          </div>
        ))}
      </section>
    </div>
  )
}

export default SavedPage