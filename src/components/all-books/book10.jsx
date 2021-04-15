import book1 from '../big-images/water-protectors.webp'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const TenthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          <b>
            Inspired by the many Indigenous-led movements across North America, We Are Water
            Protectors issues an urgent rallying cry to safeguard the Earth’s water from harm and
            corruption―a bold and lyrical picture book written by Carole Lindstrom and vibrantly
            illustrated by Michaela Goade.
          </b>
        </p>
        <p>
          <i>Water is the first medicine. It affects and connects us all . . . </i>
        </p>
        <p>
          When a black snake threatens to destroy the Earth And poison her people’s water, one young
          water protector Takes a stand to defend Earth’s most sacred resource.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          Carole is Anishinabe/Metis and is tribally enrolled with the Turtle Mountain Band of
          Ojibwe. She was born and raised in Nebraska and currently makes her home in Maryland.
        </p>
        <p>
          Carole has been a voracious reader and library geek ever since she was growing up in
          Nebraska. On weekends you could usually find her at the library lost in the book stacks or
          holed up in her bedroom with a good book. It wasn't until she had her son, that she
          discovered her love of writing for children and began to work seriously on her writing.
          She is represented by the Andrea Brown Literary Agency.
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
            bookName="We Are Water Protectors "
            author="Carole Lindstrom"
            bookDescription={bookDescription()}
            authorLink={'http://www.carolelindstrom.com/'}
          />
        </div>
        <CartContainer price="$16,19" />
      </div>
      <DescriptionLine
        age="3 - 6 years"
        pages="40 pages"
        language="English"
        date="April 14, 2020"
        grade="Preschool - 1"
        publisher="Roaring Brook Press"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Roaring Brook Press"
        language="English"
        pages="40 pages"
        age="3 - 6 years"
        weight="10.6 ounces"
        size="10.39 x 0.41 x 10.25 inches"
      />
    </div>
  )
}

export default TenthBook
