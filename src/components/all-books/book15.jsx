import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/star-wars.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const FifteenthBook = ({ AddBookInCart }) => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="star-wars-origami-book"></img>
            <BookDescription
              bookName="Star Wars Origami 2: 34 More Projects from a Galaxy Far, Far Away...."
              author="Chris Alexander"
              bookDescription={product.find((book) => book.id === 15).bookDesc()}
              authorLink={
                'https://en.wikipedia.org/wiki/Christopher_Alexander#:~:text=Alexander%20is%20known%20for%20many,Design%2C%20and%20The%20Oregon%20Experiment.'
              }
            />
          </div>
          <CartContainer price="$14,99" bookId={15} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="8 years and up"
          pages="384 pages"
          language="English"
          date="October 13, 2020"
          grade="7-8"
          publisher="Workman"
        />
        <Author author={product.find((book) => book.id === 15).biography()} />
        <BookDetails
          publisher="Workman Publishing Company"
          language="English"
          pages="384 pages"
          age="8 years and up"
          weight="7.2 ounces"
          size="8.5 x 1 x 8 inches"
        />
      </div>
    </div>
  )
}

export default FifteenthBook
