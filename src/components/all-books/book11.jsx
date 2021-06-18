import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/river-song.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const EleventhBook = ({ AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          When Brian Doyle passed away at the age of sixty after a bout with brain cancer, he left
          behind a cult-like following of devoted readers who regard his writing as one of the
          best-kept secrets of the twenty-first century. Doyle writes with a delightful sense of
          wonder about the sanctity of everyday things, and about love and connection in all their
          forms: spiritual love, brotherly love, romantic love, and even the love of a nine-foot
          sturgeon.
        </p>
        <p>
          At a moment when the world can sometimes feel darker than ever, Doyle's writing, which
          constantly evokes the humor and even bliss that life affords, is a balm. His essays manage
          to find, again and again, exquisite beauty in the quotidian, whether it's the awe of a
          child the first time she hears a river, or a husband's whiskers that a grieving widow
          misses seeing in her sink every morning. Through Doyle's eyes, nothing is dull.
        </p>
        <p>
          David James Duncan sums up Doyle's sensibilities best in his introduction to the
          collection: "Brian Doyle lived the pleasure of bearing daily witness to quiet glories
          hidden in people, places and creatures of little or no size, renown, or commercial value,
          and he brought inimitably playful or soaring or aching or heartfelt language to his
          tellings." A life's work, One Long River of Song invites readers to experience joy and
          wonder in ordinary moments that become, under Doyle's rapturous and exuberant gaze,
          extraordinary.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <b>Brian Doyle</b> (1956-2017) was born in New York and attended the University of Notre
        Dame. He worked at U.S. <i>Catholic Magazine, Boston College Magazine</i> and, up until his
        death, was the editor of <i>Portland Magazine</i>. He wrote a number of novels and works of
        nonfiction, and his essays appeared in the
        <i>New York Times, Atlantic Monthly, Harper's Orion, American Scholar, America Magazine</i>,
        and many more. He won the American Academy of Arts and Letters Award in Literature, the 2017
        John Burroughs Medal for Distinguished Nature Writing, the Oregon Book Award, three Pushcart
        Prizes, among others, and had multiple essays included in Best <i>American Essays</i>.
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="one-long-river-of-song-book"></img>
            <BookDescription
              bookName="One Long River of Song: Notes on Wonder"
              author="Brian Doyle"
              bookDescription={bookDescription()}
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
        <Author author={author()} />
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
