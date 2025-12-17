import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/613znXUaEWL._AC_UL600_SR600,400_.jpg'
    alt='How to Draw Everything'
  />
)
const Title = () => {
  return <h2>How to Draw Everything</h2>
}
const Author = () => <h4>Emma Greene</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
