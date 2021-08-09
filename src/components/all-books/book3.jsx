import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/51DZeZw7K0L.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import BookDetails from '../book-details/book-details'
import product from '../../products'


import './all-books.scss'

const ThirdBook = ({ AddBookInCart }) => {
  
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="sleep-donation"></img>
            <BookDescription
              bookName="Greenlights"
              author="Matthew McConaughey"
              bookDescription={product.find((book) => book.id === 3).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Matthew_McConaughey'}
            />
          </div>
          <CartContainer price="$14,99" bookId={3} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="16+"
          pages="360 pages"
          language="English"
          date="October 20, 2020"
          grade="8-9"
          publisher="Random House Audio"
        />

        <BookDetails
          publisher="Random House Audio"
          language="English"
          pages="360 pages"
          age="16+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default ThirdBook
