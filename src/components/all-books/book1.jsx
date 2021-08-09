import book1 from '../big-images/silver-arrow.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const FirstBook = ({ AddBookInCart }) => {
  // const { bookDesc } = cart

  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="the silver arrow"></img>
          <BookDescription
            bookName="The Silver arrow"
            author="Lev Grossman"
            bookDescription={product.find((book) => book.id === 1).bookDesc()}
            authorLink={"https://en.wikipedia.org/wiki/Lev_Grossman"}
          />
        </div>
        <CartContainer price="$18" bookId={1} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="8 - 12 years"
        pages="288 pages"
        language="English"
        date="September 1, 2020"
        grade="3-7"
        publisher="Little"
      />
      <Author author={product.find((book) => book.id === 1).biography()} />
      <BookDetails
        publisher="Little, Brown Books for Young Readers"
        language="English"
        pages="288 pages"
        age="8 - 12 years"
        weight="12.8 ounces"
        size="5.63 x 0.88 x 8 inches"
      />
    </div>
  )
}

export default FirstBook
