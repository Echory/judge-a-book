import React, {useState, useEffect} from "react"
import "./SavedPage.css"
import { Link } from "react-router-dom"


const SavedPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  const deleteBook = (id) => {
    let booksFromLocalStorage = JSON.parse(localStorage.getItem("savedBooks"))
    
    booksFromLocalStorage = booksFromLocalStorage.filter(book => book.id !== id)
    localStorage.setItem("savedBooks", JSON.stringify(booksFromLocalStorage))

    setSavedBooks(booksFromLocalStorage)
  };

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("savedBooks"))
    if (books) {
      setSavedBooks(books)
    }
  }, [])

  return(
    <div className="saved-container">
      <nav className="nav-bar">
      <h1 className="app-name-saved">Judge A Book</h1>
      <h2 className="to-read">To-read</h2>
        <Link to="/">
          <button className="back-button">Back To Vote</button>
        </Link>
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