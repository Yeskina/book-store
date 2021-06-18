import book1 from '../big-images/circe.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const NinthBook = ( { AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born.
          But Circe is a strange child -- not powerful, like her father, nor viciously alluring like
          her mother. Turning to the world of mortals for companionship, she discovers that she does
          possess power -- the power of witchcraft, which can transform rivals into monsters and
          menace the gods themselves.
        </p>
        <p>
          Threatened, Zeus banishes her to a deserted island, where she hones her occult craft,
          tames wild beasts and crosses paths with many of the most famous figures in all of
          mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous
          Medea, and, of course, wily Odysseus.
        </p>
        <p>
          But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the
          wrath of both men and gods, ultimately finding herself pitted against one of the most
          terrifying and vengeful of the Olympians. To protect what she loves most, Circe must
          summon all her strength and choose, once and for all, whether she belongs with the gods
          she is born from, or the mortals she has come to love.
        </p>
        <p>
          With unforgettably vivid characters, mesmerizing language, and page-turning suspense,
          Circe is a triumph of storytelling, an intoxicating epic of family rivalry, palace
          intrigue, love and loss, as well as a celebration of indomitable female strength in a
          man's world.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          Miller was born on July 24, 1978, in Boston and grew up in New York City and Philadelphia.
          After graduating from Brown University with a bachelor's and master's in Classics (2000
          and 2001, respectively), Miller then went on to teach Latin, Greek, and Shakespeare to
          high school students. She also studied for a year at the University of Chicago's Committee
          on Social Thought toward a PhD and from 2009 to 2010 at the Yale School of Drama for an
          MFA in Dramaturgy and Dramatic Criticism. As of May 2012 Miller lived in Cambridge,
          Massachusetts teaching and writing.<i>The Song of Achilles</i> was awarded the Orange
          Prize for Fiction and has been translated into twenty-five languages.
        </p>
        <p>
          <i>Circe</i>, Miller's second novel, was released on April 10, 2018. The book is a modern
          reimagining told from the perspective of Circe, an enchantress in Greek mythology who is
          featured in Homer's Odyssey. Circe was ranked the second-greatest book of the 2010s by
          Paste. An 8-part miniseries adaptation of the book has been greenlit for HBO Max. Rick
          Jaffa and Amanda Silver are set to write and produce the adaptation.
        </p>
      </div>
    )
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="circe-book"></img>
          <BookDescription
            bookName="Circe"
            author="Madeline Miller"
            bookDescription={bookDescription()}
            authorLink={'https://en.wikipedia.org/wiki/Madeline_Miller'}
          />
        </div>
        <CartContainer price="$13,07" bookId={9} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="18+"
        pages="416 pages"
        language="English"
        date="April 14, 2020"
        grade="8-9"
        publisher="Back Bay Books"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Back Bay Books"
        language="English"
        pages="416 pages"
        age="18+"
        weight="1.53 pounds"
        size="5.5 x 1.04 x 8.25 inches"
      />
    </div>
  )
}

export default NinthBook
