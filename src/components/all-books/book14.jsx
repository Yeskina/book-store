import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/erosion.webp'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const FourteenthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          Terry Tempest Williams's fierce, spirited, and magnificent essays are a howl in the
          desert. She sizes up the continuing assaults on America's public lands and the erosion of
          our commitment to the open space of democracy. She asks: "How do we find the strength to
          not look away from all that is breaking our hearts?"
        </p>
        <p>
          We know the elements of erosion: wind, water, and time. They have shaped the spectacular
          physical landscape of our nation. Here, Williams bravely and brilliantly explores the many
          forms of erosion we face: of democracy, science, compassion, and trust. She examines the
          dire cultural and environmental implications of the gutting of Bear Ears National
          Monument―sacred lands to Native Peoples of the American Southwest; of the undermining of
          the Endangered Species Act; of the relentless press by the fossil fuel industry that has
          led to a panorama in which "oil rigs light up the horizon." And she testifies that the
          climate crisis is not an abstraction, offering as evidence the drought outside her door
          and, at times, within herself.
        </p>
        <p>
          These essays are Williams's call to action, blazing a way forward through difficult and
          dispiriting times. We will find new territory―emotional, geographical, communal. The
          erosion of desert lands exposes the truth of change. What has been weathered, worn, and
          whittled away is as powerful as what remains. Our undoing is also our becoming.
        </p>
        <p>
          <i>Erosion</i> is a book for this moment, political and spiritual at once, written by one
          of our greatest naturalists, essayists, and defenders of the environment. She reminds us
          that beauty is its own form of resistance, and that water can crack stone.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          <b>Terry Tempest Williams</b> is the award-winning author of{' '}
          <i>
            The Hour of Land: A Personal Topography of America’s National Parks; Refuge: An
            Unnatural History of Family and Place; Finding Beauty in a Broken World; and When Women
            Were Birds
          </i>
          , among other books. Her work is widely taught and anthologized around the world. A member
          of the American Academy of Arts and Letters, she is currently the Writer-in-Residence at
          the Harvard Divinity School and divides her time between Cambridge, Massachusetts and
          Castle Valley, Utah.
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
              bookName="Erosion"
              author="Terry Tempest Williams"
              bookDescription={bookDescription()}
              authorLink={'https://en.wikipedia.org/wiki/Terry_Tempest_Williams'}
            />
          </div>
          <CartContainer price="$15,99" />
        </div>
        <DescriptionLine
          age="18+"
          pages="352 pages"
          language="English"
          date="October 13, 2020"
          grade="7-8"
          publisher="Picador Paper"
        />
        <Author author={author()} />
        <BookDetails
          publisher="Picador Paper"
          language="English"
          pages="352 pages"
          age="18+"
          weight="7.2 ounces"
          size="5.44 x 1.04 x 8.28 inches"
        />
      </div>
    </div>
  )
}

export default FourteenthBook
