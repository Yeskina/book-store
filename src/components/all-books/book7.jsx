import book1 from '../big-images/dessert-person.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const SeventhBook = ({ AddBookInCart }) => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="dessert-person-book"></img>
          <BookDescription
            bookName="Dessert Person: Recipes and Guidance for Baking with Confidence"
            author="Claire Saffitz"
            bookDescription={product.find((book) => book.id === 7).bookDesc()}
            authorLink={'https://en.wikipedia.org/wiki/Claire_Saffitz'}
          />
        </div>
        <CartContainer price="$30,81" bookId={7} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="12+"
        pages="368 pages"
        language="English"
        date="October 20, 2020"
        grade="8-9"
        publisher="Clarkson Potter"
      />
      <Author author={product.find((book) => book.id === 7).biography()} />
      <BookDetails
        publisher="Clarkson Potter"
        language="English"
        pages="368 pages"
        age="12+"
        weight="3.36 pounds"
        size="8.31 x 1.22 x 11.38 inches"
      />
    </div>
  )
}

export default SeventhBook
