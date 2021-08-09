import book1 from '../big-images/how-i-built-this.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'
import './all-books.scss'

const SixthBook = ({ AddBookInCart }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="how-i-built-this-book"></img>
          <BookDescription
            bookName="How I Built This: The Unexpected Paths to Success from the World's Most Inspiring Entrepreneurs"
            author="Guy Raz"
            bookDescription={product.find((book) => book.id === 6).bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Guy_Raz'}
          />
        </div>
        <CartContainer price="$13,30" bookId={6} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="16+"
        pages="526 pages"
        language="English"
        date="September 15, 2020"
        grade="5-7"
        publisher="Audible Studios"
      />
      <Author author={product.find((book) => book.id === 6).biography()} />
      <BookDetails
        publisher="Audible Studios"
        language="English"
        pages="526 pages"
        age="8 - 12 years"
        weight="12.8 ounces"
        size="5.63 x 0.88 x 8 inches"
      />
    </div>
  )
}

export default SixthBook
