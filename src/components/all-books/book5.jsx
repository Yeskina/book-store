import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/61eqltFwZKL.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const FifthBook = ({ AddBookInCart }) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          In an unforgettable novel that traces a centuries-old curse to its source, beloved author
          Alice Hoffman unveils the story of Maria Owens, accused of witchcraft in Salem, and
          matriarch of a line of the amazing Owens women and men featured in Practical Magic and The
          Rules of Magic.
        </p>
        <p>
          Where does the story of the Owens bloodline begin? With Maria Owens, in the 1600s, when
          she’s abandoned in a snowy field in rural England as a baby. Under the care of Hannah
          Owens, Maria learns about the “Nameless Arts”. Hannah recognizes that Maria has a gift,
          and she teaches the girl all she knows. It is here that she learns her first important
          lesson: Always love someone who will love you back.
        </p>
        <p>
          When Maria is abandoned by the man who has declared his love for her, she follows him to
          Salem, Massachusetts. Here she invokes the curse that will haunt her family. And it’s here
          that she learns the rules of magic and the lesson that she will carry with her for the
          rest of her life. Love is the only thing that matters.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
        Alice Hoffman (born March 16, 1952) is an American novelist and young-adult and children's
        writer, best known for her 1995 novel Practical Magic, which was adapted for a 1998 film of
        the same name. Many of her works fall into the genre of magic realism and contain elements
        of magic, irony, and non-standard romances and relationships.
        </p>
        <p>When Hoffman was twenty-one and
        studying at Stanford, her first short story, At The Drive-In, was published in Volume 3 of
        the literary magazine Fiction. Editor Ted Solotaroff contacted her, and asked whether she
        had a novel. At that point, she began writing her first novel, Property Of. It was published
        in 1977, by Farrar Straus and Giroux, now a division of Macmillan Publishers. A section of
        Property Of was published in Solotaroff's literary magazine, American Review. Hoffman's
        first job was at Doubleday, which later published two of her novels. She was the recipient
        of a New Jersey Notable Book Award for Ice Queen. She won a Hammett Prize for Turtle
        Moon. She wrote the screenplay for the 1983 film Independence Day, starring Kathleen
        Quinlan and Dianne Wiest.
        </p>
        <p>
         In September 2019 Hoffman released "The World That We Knew" based
        on a true story told to her by a fan at a book signing. The woman confided to Hoffman that
        during World War 2, her Jewish parents had her live with non-Jewish people to escape the
        Nazis. These were known as "hidden children" and Hoffman thought about this woman and her
        unusual upbringing for years before deciding to travel to Europe and learn more. The
        third novel in her "Practical Magic" series, Magic Lessons, was released in October 2020.
        This prequel takes place in the 17th century and explores the life of Maria Owens, the
        family matriarch. For Scholastic Press, Hoffman has also written the young adult
        novels Indigo, Green Angel, and its sequel, Green Witch. With her son Wolfe Martin, she
        wrote the picture book Moondog. In 2015, Hoffman donated her archives to her alma mater,
        Adelphi University.
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="magic-lessons"></img>
            <BookDescription
              bookName="Magic Lessons: A Prequel to Practical Magic"
              author="Alice Hoffman"
              bookDescription={bookDescription()}
              authorLink={'https://en.wikipedia.org/wiki/Alice_Hoffman'}

            />
          </div>
          <CartContainer price="$14,99" bookId={5} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="18+"
          pages="230 pages"
          language="English"
          date="October 06, 2020"
          grade="4-8"
          publisher="	Simon & Schuster Audio"

        />
        <Author author={author()} />
        <BookDetails
          publisher="	Simon & Schuster Audio"
          language="English"
          pages="230 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default FifthBook
