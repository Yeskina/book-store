import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/erosion.webp'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const FourteenthBook = ({ AddBookInCart}) => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="games-book"></img>
            <BookDescription
              bookName="Erosion"
              author="Terry Tempest Williams"
              bookDescription={product.find((book) => book.id === 14).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Terry_Tempest_Williams'}
            />
          </div>
          <CartContainer price="$15,99" bookId={14} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="352 pages"
          language="English"
          date="October 13, 2020"
          grade="7-8"
          publisher="Picador Paper"
        />
      <Author author={product.find((book) => book.id === 14).biography()} />
        <BookDetails
          publisher="Picador Paper"
          language="English"
          pages="352 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.44 x 1.04 x 8.28 inches"
        />
      </div>
    </div>
  )
}

export default FourteenthBook
