import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/sleep-donation.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'
import product from '../../products'

import './all-books.scss'

const SecondBook = ({ AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          Trish Edgewater is the Slumber Corps' top recruiter. On the phone, at a specially
          organized Sleep Drive, even in a supermarket parking lot: Trish can get even the most
          reluctant healthy dreamer to donate sleep to an insomniac in crisis--one of hundreds of
          thousands of people who have totally lost the ability to sleep. Trish cries, she shakes,
          she shows potential donors a picture of her deceased sister, Dori: one of the first
          victims of the lethal insomnia plague that has swept the globe.
        </p>
        <p>
          Run by the wealthy and enigmatic Storch brothers, the Slumber Corps is at the forefront of
          the fight against this deadly new disease. But when Trish is confronted by "Baby A," the
          first universal sleep donor, and the mysterious "Donor Y," whose horrific infectious
          nightmares are threatening to sweep through the precious sleep supply, her faith in the
          organization and in her own motives begins to falter.
        </p>
        <p>
          Fully illustrated with dreamy evocations of Russell's singular imagination and featuring a
          brand-new "Nightmare Appendix," Sleep Donation will keep readers up long into the night
          and long after haunt their dreams.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        KAREN RUSSELL has received a MacArthur Fellowship and a Guggenheim Fellowship, the "5 Under
        35" prize from the National Book Foundation, the New York Public Library Young Lions Fiction
        Award, and the Berlin Prize from the American Academy. She lives in Portland, Oregon, with
        her husband, son, and daughter.
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
              bookName="Sleeping Donation"
              author="Karen Russell"
              bookDescription={bookDescription()}
              authorLink={'https://en.wikipedia.org/wiki/Karen_Russell'}
            />
          </div>
          <CartContainer price="$11,99" bookId={2} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="160 pages"
          language="English"
          date="September 29, 2020"
          grade="5-7"
          publisher="Vintage"
        />
        <Author author={author()} />
        <BookDetails
          publisher="Vintage"
          language="English"
          pages="160 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default SecondBook
