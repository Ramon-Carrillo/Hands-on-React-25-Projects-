import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Emma Greene',
  title: 'How to Draw Everything',
  img: './images/book-1.jpg',
}
const secondBook = {
  author: 'Jack Haynes',
  title: 'Learn a Lot While You Sit on the Pot',
  img: './images/book-2.jpg',
}
const thirdBook = {
  author: 'Mel Robbins',
  title: 'The Let Them Theory',
  img: './images/book-3.jpg',
}
function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />

      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
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
