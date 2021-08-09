import book1 from '../big-images/circe.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const NinthBook = ( { AddBookInCart }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="circe-book"></img>
          <BookDescription
            bookName="Circe"
            author="Madeline Miller"
            bookDescription={product.find((book) => book.id === 9).bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Madeline_Miller'}
          />
        </div>
        <CartContainer price="$13,07" bookId={9} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="18+"
        pages="416 pages"
        language="English"
        date="April 14, 2020"
        grade="8-9"
        publisher="Back Bay Books"
      />
      <Author author={product.find((book) => book.id === 9).biography()} />
      <BookDetails
        publisher="Back Bay Books"
        language="English"
        pages="416 pages"
        age="18+"
        weight="1.53 pounds"
        size="5.5 x 1.04 x 8.25 inches"
      />
    </div>
  )
}

export default NinthBook
