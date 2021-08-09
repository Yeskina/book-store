import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/micro-rpg.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const TwelfthBook = ( { AddBookInCart}) => {

  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="games-book"></img>
            <BookDescription
              bookName="Games (The Ultimate RPG Guide Series)"
              author="James D’Amato"
              bookDescription={product.find((book) => book.id === 12).bookDesc()}
              authorLink={'https://www.simonandschuster.com/authors/James-D-Amato/144640563'}
            />
          </div>
          <CartContainer price="$14,99" bookId={12} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="12+"
          pages="128 pages"
          language="English"
          date="December 8, 2020"
          grade="7-8"
          publisher="Adams Media"
        />
      <Author author={product.find((book) => book.id === 12).biography()} />
        <BookDetails
          publisher="Adams Media"
          language="English"
          pages="128 pages"
          age="12+"
          weight="7.2 ounces"
          size="8.5 x 0.4 x 10 inches"
        />
      </div>
    </div>
  )
}

export default TwelfthBook
