import book1 from '../big-images/dessert-person.jpg'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const SeventhBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          <i>
            “There are no ‘just cooks’ out there, only bakers who haven't yet been converted. I am a
            dessert person, and we are all dessert people.”—Claire Saffitz
          </i>
        </p>
        <p>
          Claire Saffitz is a baking hero for a new generation. In Dessert Person, fans will find
          Claire’s signature spin on sweet and savory recipes like Babkallah (a babka-Challah
          mashup), Apple and Concord Grape Crumble Pie, Strawberry-Cornmeal Layer Cake, Crispy
          Mushroom Galette, and Malted Forever Brownies. She outlines the problems and solutions for
          each recipe—like what to do if your pie dough for Sour Cherry Pie cracks (patch it with
          dough or a quiche flour paste!)—as well as practical do’s and don’ts, skill level, prep
          and bake time, step-by-step photography, and foundational know-how. With her trademark
          warmth and superpower ability to explain anything baking related, Claire is ready to make
          everyone a dessert person.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <b>Claire Saffitz</b> (born 1986) is an American pastry chef, food writer, and YouTube
        personality. Until mid-2020, she was a contributing editor at <i>Bon Appétit</i> magazine
        and starred in several series on the <i>Bon Appétit</i> YouTube channel. Her best-known
        series was <i>Gourmet Makes</i>, in which she created gourmet versions of popular snack
        foods by reverse engineering them. Since leaving the company, she has published a cookbook,{' '}
        <i>Dessert Person</i>, which became a <i>New York Times</i> Best Seller, and continues work
        as a video host on her own YouTube channel and as a freelance recipe developer.
      </div>
    )
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="dessert-person-book"></img>
          <BookDescription
            bookName="Dessert Person: Recipes and Guidance for Baking with Confidence"
            author="Claire Saffitz"
            bookDescription={bookDescription()}
            authorLink={'https://en.wikipedia.org/wiki/Claire_Saffitz'}
          />
        </div>
        <CartContainer price="$30,81" />
      </div>
      <DescriptionLine
        age="12+"
        pages="368 pages"
        language="English"
        date="October 20, 2020"
        grade="8-9"
        publisher="Clarkson Potter"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Clarkson Potter"
        language="English"
        pages="368 pages"
        age="12+"
        weight="3.36 pounds"
        size="8.31 x 1.22 x 11.38 inches"
      />
    </div>
  )
}

export default SeventhBook
