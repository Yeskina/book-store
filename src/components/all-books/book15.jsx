import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/star-wars.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const FifteenthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          <b>
            A paper-folding adventure in a galaxy far, far away! Make Darth Vader, Kylo Ren, BB-8,
            ships, droids, and more!
          </b>
        </p>
        <p>
          Combining the mythic power of Star Wars with the fun of origami, here is everything you
          need to create a collection of characters, creatures, Jedi starfighters, and those very
          special objects––like Kylo Ren and Rey’s lightsabers––imbued with a galaxy of meaning.
          Ingeniously designed by origamic master Chris Alexander, each of the 34 projects includes
          illustrated step-by-step instructions and a photograph of the finished model.
        </p>
        <p>
          <b>Includes:</b>
          <ul>
            <li>A primer on origami definitions, symbols, and how to make the basic folds</li>
            <li>
              72 sheets of specially printed folding paper, plus step-by-step folding directions for
              34 projects to fold
            </li>
            <li>
              Everything you need to make lovable porgs, the unfathomably evil Supreme Leader Snoke,
              Lando Calrissian’s Millennium Falcon with its graceful lines, and so much more
            </li>
          </ul>
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          <b>Chris Alexander</b> began doing origami at the age of four. Since then he’s created dozens of
          original designs, many of them <i>Star Wars</i> themed. He has a large Star Wars fan base and
          tours the country folding at conventions and museums. He lives in Lancaster, California.
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="star-wars-origami-book"></img>
            <BookDescription
              bookName="Star Wars Origami 2: 34 More Projects from a Galaxy Far, Far Away. . . . "
              author="Chris Alexander"
              bookDescription={bookDescription()}
              authorLink={
                'https://en.wikipedia.org/wiki/Christopher_Alexander#:~:text=Alexander%20is%20known%20for%20many,Design%2C%20and%20The%20Oregon%20Experiment.'
              }
            />
          </div>
          <CartContainer price="$14,99" />
        </div>
        <DescriptionLine
          age="8 years and up"
          pages="384 pages"
          language="English"
          date="October 13, 2020"
          grade="7-8"
          publisher="Workman"
        />
        <Author author={author()} />
        <BookDetails
          publisher="Workman Publishing Company"
          language="English"
          pages="384 pages"
          age="8 years and up"
          weight="7.2 ounces"
          size="8.5 x 1 x 8 inches"
        />
      </div>
    </div>
  )
}

export default FifteenthBook
