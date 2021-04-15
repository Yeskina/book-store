import book1 from '../big-images/silver-arrow.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const FirstBook = ({ AddBookInCart, product }) => {
  
  const bookDescription = () => {
    return (
      <div>
        <p>
          <i>
            Dear Uncle Herbert, You've never met me, but I'm your niece Kate, and since it is my
            birthday tomorrow and you are super-rich could you please send me a present?
          </i>
        </p>
        <p>
          Kate and her younger brother Tom lead dull, uninteresting lives. And if their dull,
          uninteresting parents are anything to go by, they don't have much to look forward to. Why
          can't Kate have thrilling adventures and save the world the way people do in books? Even
          her 11th birthday is shaping up to be mundane -- that is, until her mysterious and highly
          irresponsible Uncle Herbert, whom she's never even met before, surprises her with the most
          unexpected, exhilarating, inappropriate birthday present of all time: a colossal steam
          locomotive called the Silver Arrow.
        </p>
        <p>
          Kate and Tom's parents want to send it right back where it came from. But Kate and Tom
          have other ideas -- and so does the Silver Arrow -- and soon they're off to distant lands
          along magical rail lines in the company of an assortment of exotic animals who, it turns
          out, can talk. With only curiosity, excitement, their own resourcefulness and the thrill
          of the unknown to guide them, Kate and Tom are on the adventure of a lifetime . . . and
          who knows? They just might end up saving the world after all.
        </p>
        <p>
          This thrilling fantasy adventure will not only entertain young readers but inspire them to
          see the beautiful, exciting, and precious world around them with new eyes.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <b>Lev Grossman</b> is the author of five novels including the #1 <i>New York Times</i>
        bestselling Magicians trilogy, which has been published in thirty countries. A TV adaptation
        of the trilogy is now in its fifth season as the top-rated show on Syfy. Grossman is also an
        award-winning journalist who spent fifteen years as the book critic and lead technology
        writer at <i>Time</i> magazine, where he published more than twenty cover stories. In
        addition he has written for the <i>New York Times</i>, the <i>Wall Street Journal</i>,
        <i>Wired</i>, the <i>Believer</i>, the
        <i>Village Voice</i>, NPR, Salon, Slate, and Buzzfeed, among many others. He lives in New
        York City with his wife and three children.
      </div>
    )
  }
  console.warn(AddBookInCart)
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="the silver arrow"></img>
          <BookDescription
            bookName="The Silver arrow"
            author="Lev Grossman"
            bookDescription={bookDescription()}
            authorLink={"https://en.wikipedia.org/wiki/Lev_Grossman"}
          />
        </div>
        <CartContainer price="$18" books={product} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="8 - 12 years"
        pages="288 pages"
        language="English"
        date="September 1, 2020"
        grade="3-7"
        publisher="Little"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Little, Brown Books for Young Readers"
        language="English"
        pages="288 pages"
        age="8 - 12 years"
        weight="12.8 ounces"
        size="5.63 x 0.88 x 8 inches"
      />
    </div>
  )
}

export default FirstBook
