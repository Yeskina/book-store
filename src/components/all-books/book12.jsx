import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/micro-rpg.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const TwelfthBook = ( { AddBookInCart}) => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          <b>
            Enjoy these 40 expertly crafted micro-RPGs that are fast, fun, easy to learn, and come
            in a variety of genres—from space exploration to jungle dungeon crawlers—everything you
            need to pick up and play today.
          </b>
        </p>
        <p>
          Get gaming fast with <i>The Ultimate Micro-RPG Book</i> including brand-new micro-RPGs
          created by experts across the gaming world. From space exploration to jungle dungeon
          crawlers this book has everything you need to pick up and play today.
        </p>
        <p>
          With these quick-start games, you can create your own adventures, alone or with friends,
          without any prep, and with minimal set up and pieces. Whether you’re new to RPGs or
          working towards your level 20 mage, this collection is a great way to try out different
          games and systems, and test your roleplay skills on different character types and
          situations.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        James D’Amato is the author of <i>The Ultimate RPG Backstory Guide</i> and <i>The Ultimate RPG
        Gameplay Guide</i>, as well as the creator and game master of the <i>One Shot Podcast</i> and several
        spin off podcasts dedicated to RPG gameplay. He trained at Second City and iO in Chicago in
        the art of improvisational comedy: he now uses that education to introduce new people to
        role-playing, and incorporates improvisational storytelling techniques to create compelling
        and entertaining stories for RPG campaigns and one-shot adventures.
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
              author="James D’Amato"
              bookDescription={bookDescription()}
              authorLink={'https://www.simonandschuster.com/authors/James-D-Amato/144640563'}
            />
          </div>
          <CartContainer price="$14,99" bookId={12} AddBookInCart={AddBookInCart} />
        </div>
        <DescriptionLine
          age="12+"
          pages="128 pages"
          language="English"
          date="December 8, 2020"
          grade="7-8"
          publisher="Adams Media"
        />
        <Author author={author()} />
        <BookDetails
          publisher="Adams Media"
          language="English"
          pages="128 pages"
          age="12+"
          weight="7.2 ounces"
          size="8.5 x 0.4 x 10 inches"
        />
      </div>
    </div>
  )
}

export default TwelfthBook
