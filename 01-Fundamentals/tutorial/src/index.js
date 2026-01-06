import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Emma Greene',
    title: 'How to Draw Everything',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Jack Haynes',
    title: 'Learn a Lot While You Sit on the Pot',
    img: './images/book-2.jpg',
    id: 2,
  },
  {
    author: 'Mel Robbins',
    title: 'The Let Them Theory',
    img: './images/book-3.jpg',
    id: 3,
  },
]
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
