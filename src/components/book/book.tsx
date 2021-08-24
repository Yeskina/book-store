import React from 'react'
import { useParams } from 'react-router-dom'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './book.scss'
import { CartContainerInfo } from '../interface'



const Book: React.FC<CartContainerInfo> = ({ AddBookInCart }) => {
  const { id } = useParams<{id: string}>()
  const currentBook = product.find((book) => book.id === parseInt(id, 10))
  if (!currentBook) {
    return <div>The book is not avaliable</div>
  }
  const {
    bookName,
    author,
    price,
    image,
    age,
    pages,
    language,
    date,
    grade,
    publisher,
    weight,
    size,
    bookDesc,
    biography,
  } = currentBook

  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={image} alt="the silver arrow"></img>
          <BookDescription
            bookName={bookName}
            author={author}
            bookDescription={bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Lev_Grossman'}
          />
        </div>
        <CartContainer price={price} bookId={parseInt(id, 10)} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age={age}
        pages={pages}
        language={language}
        date={date}
        grade={grade}
        publisher={publisher}
      />
      <Author author={biography?.()} />
      <BookDetails
        publisher={publisher}
        language={language}
        pages={pages}
        age={age}
        weight={weight}
        size={size}
      />
    </div>
  )
}

export default Book
