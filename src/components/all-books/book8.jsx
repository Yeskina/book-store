import book1 from '../big-images/lakota-america.webp'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const EighthBook = ({ AddBookInCart }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="lakota-america-book"></img>
          <BookDescription
            bookName="Lakota America: A New History of Indigenous Power (The Lamar Series in Western History)"
            author="Pekka Hamalainen"
            bookDescription={product.find((book) => book.id === 8).bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Pekka_H%C3%A4m%C3%A4l%C3%A4inen_(historian)'}
          />
        </div>
        <CartContainer price="$17,63" bookId={8} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="16+"
        pages="544 pages"
        language="English"
        date="October 13, 2020"
        grade="8-9"
        publisher="Yale University Press"
      />
      <Author author={product.find((book) => book.id === 8).biography()} />
      <BookDetails
        publisher="Yale University Press"
        language="English"
        pages="544 pages"
        age="16+"
        weight="1.53 pounds"
        size="6.25 x 1.5 x 9 inches"
      />
    </div>
  )
}

export default EighthBook
