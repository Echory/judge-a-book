export const fetchBooks = async () => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=magic&key=${process.env.REACT_APP_GOOGLE_BOOKS_API}&maxResults=40`

  const res = await fetch(url)
  const data = await res.json()
  
  return data.items
}