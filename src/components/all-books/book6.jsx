import book1 from '../big-images/how-i-built-this.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const SixthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          Based on the highly acclaimed NPR podcast How I Built This with Guy Raz, this book offers
          priceless insights and inspiration from the world's top entrepreneurs on how to start,
          launch, and build a successful venture.
        </p>
        <p>
          Great ideas often come from a simple spark: A soccer player on the New Zealand national
          team notices all the unused wool his country produces and figures out a way to turn them
          into shoes (Allbirds). A former Buddhist monk decides the very best way to spread his
          mindfulness teachings is by launching an app (Headspace). A sandwich cart vendor finds a
          way to reuse leftover pita bread and turns it into a multimillion-dollar business (Stacy’s
          Pita Chips).
        </p>
        <p>
          Award-winning journalist and NPR host Guy Raz has interviewed more than 200 highly
          successful entrepreneurs to uncover amazing true stories like these. In How I Built This,
          he shares tips for every entrepreneur's journey: from the early days of formulating your
          idea, to raising money and recruiting employees, to fending off competitors, to finally
          paying yourself a real salary. This is a must-listen for anyone who has ever dreamed of
          starting their own business or wondered how trailblazing entrepreneurs made their own
          dreams a reality.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        Guy Raz is an acclaimed radio and podcast personality and creator of the popular podcasts
        "How I Built This," and "TED Radio Hour," which have found a consistent home on the top
        charts. "How I Built This" is a podcast about the greatest innovators, entrepreneurs, and
        idealists, and the stories behind the move- ments they built. Guy is also the creator of
        NPR's first-ever podcast for kids, "Wow in the World" as well as Spotify's "The Rewind" and
        Luminary's "Wisdom From The Top." His shows are heard by more than 19 million people each
        month around the world. "How I Built This" and "TED Radio Hour" have been named top podcasts
        by Apple Podcasts, and Inc. Magazine has called "How I Built This" "the best podcast to take
        on the New Year."
      </div>
    )
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="how-i-built-this-book"></img>
          <BookDescription
            bookName="How I Built This: The Unexpected Paths to Success from the World's Most Inspiring Entrepreneurs"
            author="Guy Raz"
            bookDescription={bookDescription()}
            authorLink={'https://en.wikipedia.org/wiki/Guy_Raz'}
          />
        </div>
        <CartContainer price="$13,30" />
      </div>
      <DescriptionLine
        age="16+"
        pages="526 pages"
        language="English"
        date="September 15, 2020"
        grade="5-7"
        publisher="Audible Studios"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Audible Studios"
        language="English"
        pages="526 pages"
        age="8 - 12 years"
        weight="12.8 ounces"
        size="5.63 x 0.88 x 8 inches"
      />
    </div>
  )
}

export default SixthBook
