import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/year-monkey.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const ThirteenthBook = ({AddBookInCart}) => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="games-book"></img>
            <BookDescription
              bookName="Year of the Monkey"
              author="Patti Smith"
              bookDescription={product.find((book) => book.id === 13).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Patti_Smith'}
            />
          </div>
          <CartContainer price="$4,99" bookId={13} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="14+"
          pages="224 pages"
          language="English"
          date="September 1, 2020"
          grade="7-8"
          publisher="Vintage"
        />
      <Author author={product.find((book) => book.id === 13).biography()} />
        <BookDetails
          publisher="Vintage"
          language="English"
          pages="224 pages"
          age="14+"
          weight="7.2 ounces"
          size="5.4 x 0.6 x 8 inches"
        />
      </div>
    </div>
  )
}

export default ThirteenthBook
