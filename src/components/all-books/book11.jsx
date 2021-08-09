import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/river-song.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const EleventhBook = ({ AddBookInCart }) => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="one-long-river-of-song-book"></img>
            <BookDescription
              bookName="One Long River of Song: Notes on Wonder"
              author="Brian Doyle"
              bookDescription={product.find((book) => book.id === 11).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Brian_Doyle_(writer)'}
            />
          </div>
          <CartContainer price="$17,99" bookId={11} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="272 pages"
          language="English"
          date="December 8, 2020"
          grade="5-7"
          publisher="Back Bay Books"
        />
      <Author author={product.find((book) => book.id === 11).biography()} />
        <BookDetails
          publisher="Back Bay Books"
          language="English"
          pages="272 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.38 x 0.63 x 8.25 inches"
        />
      </div>
    </div>
  )
}

export default EleventhBook
