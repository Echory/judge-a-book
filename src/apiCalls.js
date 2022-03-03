export const fetchBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=potato&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}`

  const res = await fetch(url)
  const data = await res.json()
  
  return data.items
}