import book1 from '../big-images/water-protectors.webp'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const TenthBook = ({ AddBookInCart }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="circe-book"></img>
          <BookDescription
            bookName="We Are Water Protectors"
            author="Carole Lindstrom"
            bookDescription={product.find((book) => book.id === 10).bookDesc()}
            authorLink={'http://www.carolelindstrom.com/'}
          />
        </div>
        <CartContainer price="$16,19" bookId={10} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="3 - 6 years"
        pages="40 pages"
        language="English"
        date="April 14, 2020"
        grade="Preschool - 1"
        publisher="Roaring Brook Press"
      />
      <Author author={product.find((book) => book.id === 10).biography()} />
      <BookDetails
        publisher="Roaring Brook Press"
        language="English"
        pages="40 pages"
        age="3 - 6 years"
        weight="10.6 ounces"
        size="10.39 x 0.41 x 10.25 inches"
      />
    </div>
  )
}

export default TenthBook
