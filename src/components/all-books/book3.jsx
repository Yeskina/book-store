import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/51DZeZw7K0L.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import BookDetails from '../book-details/book-details'
import product from '../../products'


import './all-books.scss'

const ThirdBook = ({ AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          I’ve been in this life for 50 years, been trying to work out its riddle for 42, and been
          keeping diaries of clues to that riddle for the last 35. Notes about successes and
          failures, joys and sorrows, things that made me marvel, and things that made me laugh out
          loud. How to be fair. How to have less stress. How to have fun. How to hurt people less.
          How to get hurt less. How to be a good man. How to have meaning in life. How to be more
          me.
        </p>
        <p>
          Recently, I worked up the courage to sit down with those diaries. I found stories I
          experienced, lessons I learned and forgot, poems, prayers, prescriptions, beliefs about
          what matters, some great photographs, and a whole bunch of bumper stickers. I found a
          reliable theme, an approach to living that gave me more satisfaction, at the time, and
          still: If you know how, and when, to deal with life’s challenges - how to get relative
          with the inevitable - you can enjoy a state of success I call “catching greenlights”. So I
          took a one-way ticket to the desert and wrote this book: an album, a record, a story of my
          life so far.
        </p>
        <p>
          This is 50 years of my sights and seens, felts and figured-outs, cools and shamefuls.
          Graces, truths, and beauties of brutality. Getting away withs, getting caughts, and
          getting wets while trying to dance between the raindrops. Hopefully, it’s medicine that
          tastes good, a couple of aspirin instead of the infirmary, a spaceship to Mars without
          needing your pilot’s license, going to church without having to be born again, and
          laughing through the tears. It’s a love letter. To life. It’s also a guide to catching
          more greenlights - and to realizing that the yellows and reds eventually turn green, too.
          Good luck.
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="sleep-donation"></img>
            <BookDescription
              bookName="Greenlights"
              author="Matthew McConaughey"
              bookDescription={bookDescription()}
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
