import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/year-monkey.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const ThirteenthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          Following a run of new year’s concerts at San Francisco’s legendary Fillmore, Patti Smith
          finds herself tramping the coast of Santa Cruz, about to embark on a year of solitary
          wandering. Unfettered by logic or time, she draws us into her private wonderland, in which
          she debates intellectual grifters and spars with the likes of a postmodern Cheshire Cat.
          Then, in February 2016, a surreal lunar year begins, bringing unexpected turns, heightened
          mischief, and inescapable sorrow. For Smith—inveterately curious, always exploring, always
          writing—this becomes a year of reckoning with the changes in life’s gyre: with loss,
          aging, and a dramatic shift in the political landscape of America.
        </p>
        <p>
          Taking us from California to the Arizona desert, from a Kentucky farm to the hospital room
          of a valued mentor, Smith melds the western landscape with her own dreamscape in a
          haunting, poetic blend of fact and fiction. As a stranger tells her, “Anything is
          possible. After all, it’s the Year of the Monkey.” But as Smith heads toward a new decade
          in her own life, she offers this balm to the reader: her wisdom, wit, gimlet eye, and
          above all, a rugged hope for a better world.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
         <b>Patricia Lee Smith</b> (born December 30, 1946) is an American singer-songwriter, musician,
          author, and poet who became an influential component of the New York City punk rock
          movement with her 1975 debut album <i>Horses</i>.
        </p>

        <p>
          Called the "punk poet laureate", Smith fused rock and poetry in her work. Her most widely
          known song is "Because the Night", which was co-written with Bruce Springsteen. It reached
          number 13 on the <i>Billboard</i> Hot 100 chart in 1978 and number five in the U.K. In 2005,
          Smith was named a Commander of the Ordre des Arts et des Lettres by the French Ministry of
          Culture. In 2007, she was inducted into the Rock and Roll Hall of Fame.
        </p>

        <p>
          On November 17, 2010, Smith won the National Book Award for her memoir <i>Just Kids</i>. The book
          fulfilled a promise she had made to her former long-time roommate and partner, Robert
          Mapplethorpe. She placed 47th in <i>Rolling Stone</i> magazine's list of 100 Greatest Artists
          published in December 2010 and was also a recipient of the 2011 Polar Music Prize.
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="games-book"></img>
            <BookDescription
              bookName="Games (The Ultimate RPG Guide Series)"
              author="Patti Smith"
              bookDescription={bookDescription()}
              authorLink={'https://en.wikipedia.org/wiki/Patti_Smith'}
            />
          </div>
          <CartContainer price="$4,99" />
        </div>
        <DescriptionLine
          age="14+"
          pages="224 pages"
          language="English"
          date="September 1, 2020"
          grade="7-8"
          publisher="Vintage"
        />
        <Author author={author()} />
        <BookDetails
          publisher="Vintage"
          language="English"
          pages="224 pages"
          age="14+"
          weight="7.2 ounces"
          size="5.4 x 0.6 x 8 inches"
        />
      </div>
    </div>
  )
}

export default ThirteenthBook
