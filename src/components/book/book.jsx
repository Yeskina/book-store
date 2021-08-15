import { useParams } from 'react-router-dom'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './book.scss'

const Book = ({ AddBookInCart }) => {
  let { id } = useParams()
  const currentBook = product.find((book) => book.id === parseInt(id, 10))

  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={currentBook.image} alt="the silver arrow"></img>
          <BookDescription
            bookName={currentBook.bookName}
            author={currentBook.author}
            bookDescription={currentBook.bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Lev_Grossman'}
          />
        </div>
        <CartContainer
          price={currentBook.price}
          bookId={currentBook.id}
          AddBookInCart={AddBookInCart}
        />
      </div>
      <DescriptionLine
        age={currentBook.age}
        pages={currentBook.pages}
        language={currentBook.language}
        date={currentBook.date}
        grade={currentBook.grade}
        publisher={currentBook.publisher}
      />
      <Author author={currentBook?.biography?.()} />
      <BookDetails
        publisher={currentBook.publisher}
        language={currentBook.language}
        pages={currentBook.pages}
        age={currentBook.age}
        weight={currentBook.weight}
        size={currentBook.size}
      />
    </div>
  )
}

export default Book
