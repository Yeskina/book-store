import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/sleep-donation.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const SecondBook = ({ AddBookInCart }) => {

  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="sleep-donation"></img>
            <BookDescription
              bookName="Sleeping Donation"
              author="Karen Russell"
              bookDescription={product.find((book) => book.id === 2).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Karen_Russell'}
            />
          </div>
          <CartContainer price="$11,99" bookId={2} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="160 pages"
          language="English"
          date="September 29, 2020"
          grade="5-7"
          publisher="Vintage"
        />
      <Author author={product.find((book) => book.id === 2).biography()} />
        <BookDetails
          publisher="Vintage"
          language="English"
          pages="160 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default SecondBook
