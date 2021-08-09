import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/61eqltFwZKL.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'
import './all-books.scss'

const FifthBook = ({ AddBookInCart }) => {
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="magic-lessons"></img>
            <BookDescription
              bookName="Magic Lessons: A Prequel to Practical Magic"
              author="Alice Hoffman"
              bookDescription={product.find((book) => book.id === 5).bookDesc()}
              authorLink={'https://en.wikipedia.org/wiki/Alice_Hoffman'}
            />
          </div>
          <CartContainer price="$14,99" bookId={5} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="230 pages"
          language="English"
          date="October 06, 2020"
          grade="4-8"
          publisher="Simon & Schuster Audio"
        />
        <Author author={product.find((book) => book.id === 5).biography()} />
        <BookDetails
          publisher="Simon & Schuster Audio"
          language="English"
          pages="230 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default FifthBook
