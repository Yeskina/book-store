import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/51pYIEzOAGL.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const FourthBook = ( { AddBookInCart }) => {
  
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="stephen-hawking-book"></img>
            <BookDescription
              bookName="Stephen Hawking: A Memoir of Friendship and Physics"
              author="Leonard Mlodinow"
              bookDescription={product.find((book) => book.id === 4).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Leonard_Mlodinow'}
            />
          </div>
          <CartContainer price="$12,99" bookId={4} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="12+"
          pages="250 pages"
          language="English"
          date="September 08, 2020"
          grade="8-9"
          publisher="Random House Audio"
        />
        <Author author={product.find((book) => book.id === 4).biography()} />

        <BookDetails
          publisher="Random House Audio"
          language="English"
          pages="250 pages"
          age="12+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default FourthBook
