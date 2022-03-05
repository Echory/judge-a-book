import React from "react"
import "./SavedPage.css"
import { Link } from "react-router-dom"

const SavedPage = ({savedBooks, deleteBook}) => {
  return(
    <div className="saved-container">
      <nav className="nav-bar">
        <Link to="/">
          <button className="back-button">Back To Vote</button>
        </Link>
        <h1 className="to-read">To-read</h1>
      </nav>
      <section className="fetched-books">
        {savedBooks.map(({ id, volumeInfo }) => (
          <div className="book-div" key={id}>
            <p className="cover-title">{volumeInfo.title}</p>
            <img className="saved-img" src={volumeInfo.imageLinks.thumbnail}/>
            <button className="delete-button" onClick={() => deleteBook(id)}>✖️</button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default SavedPage