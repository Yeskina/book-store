import book1 from '../big-images/lakota-america.webp'

import DescriptionLine from '../short-description-line/short-description-line'
import CartContainer from '../cart-window/cart-window'
import BookDescription from '../book-description/book-description'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const EighthBook = ({ AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          Red Cloud, Crazy Horse, and Sitting Bull are iconic figures in the American imagination,
          but in this groundbreaking book they emerge as something different: the architects of
          Lakota America, an expansive and enduring Indigenous regime that commanded human fates in
          the North American interior for generations. In this first complete account of the Lakota
          Indians Pekka Hämäläinen traces their rich and often surprising history from the early
          sixteenth to the early twenty‑first century. He explores the Lakotas’ roots as marginal
          hunter‑gatherers and reveals how they reinvented themselves twice: first as a river people
          who dominated the Missouri Valley, America’s great commercial artery, and then—in what was
          America’s first sweeping westward expansion—as a horse people who ruled supreme on the
          vast high plains.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          <b>Pekka Hämäläinen</b> is the Rhodes Professor of American History and Fellow of St.
          Catherine’s College at Oxford University. He has served as the principal investigator of a
          five‑year project on nomadic empires in world history, funded by the European Research
          Council. His previous book, The Comanche Empire, won the Bancroft Prize in 2009.
        </p>
        <p>
          Hämäläinen was born and raised in Helsinki, Finland. It was only in secondary school that
          an inspiring teacher made him realize that he enjoyed history, his core interest being
          Native American history. At university, Hämäläinen majored in history and trained to
          become a secondary history teacher. After finishing his M.A., he began work on his Ph.D.
        </p>
        <p>
          He graduated from University of Helsinki, with a Ph.D. in 2001. He taught at Texas A&M
          University from 2002 to 2004. His work has appeared in the American Historical Review,
          Journal of American History, William and Mary Quarterly, and the Western Historical
          Quarterly. He taught in the History Department at University of California, Santa Barbara,
          before he moved to Oxford University. In 2019, Hämäläinen published a book about the
          history of the Lakota people from the 17th-20th centuries.
        </p>
      </div>
    )
  }
  return (
    <div className="main-container">
      <div className="container">
        <div className="book-container">
          <img src={book1} alt="lakota-america-book"></img>
          <BookDescription
            bookName="Lakota America: A New History of Indigenous Power (The Lamar Series in Western History)"
            author="Pekka Hamalainen"
            bookDescription={bookDescription()}
            authorLink={'https://en.wikipedia.org/wiki/Pekka_H%C3%A4m%C3%A4l%C3%A4inen_(historian)'}
          />
        </div>
        <CartContainer price="$17,63" bookId={8} AddBookInCart={AddBookInCart} />
      </div>
      <DescriptionLine
        age="16+"
        pages="544 pages"
        language="English"
        date="October 13, 2020"
        grade="8-9"
        publisher="Yale University Press"
      />
      <Author author={author()} />
      <BookDetails
        publisher="Yale University Press"
        language="English"
        pages="544 pages"
        age="16+"
        weight="1.53 pounds"
        size="6.25 x 1.5 x 9 inches"
      />
    </div>
  )
}

export default EighthBook
