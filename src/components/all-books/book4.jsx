import BookDescription from '../book-description/book-description'
import CartContainer from '../cart-window/cart-window'
import book1 from '../big-images/51pYIEzOAGL.jpg'
import DescriptionLine from '../short-description-line/short-description-line'
import Author from '../author/author'
import BookDetails from '../book-details/book-details'

import './all-books.scss'

const FourthBook = () => {
  const bookDescription = () => {
    return (
      <div>
        <p>
          One of the most influential physicists of our time, Stephen Hawking touched the lives of
          millions. Recalling his nearly two decades as Hawking's collaborator and friends, Leonard
          Mlodinow brings this complex man into focus in a unique and deeply personal portrayal. We
          meet Hawking the genius, who pours his mind into uncovering the mysteries of the universe
          - ultimately formulating a pathbreaking theory of black holes that reignites the
          discipline of cosmology and paves the way for physicists to investigate the origins of the
          universe in completely new ways. We meet Hawking the colleague, a man whose illness leaves
          him able to communicate at only six words per minute but who expends the effort to
          punctuate his conversations with humor. And we meet Hawking the friend, who can convey
          volumes with a frown, a smile, or simply a raised eyebrow.
        </p>
        <p>
          Mlodinow puts us in the room as Hawking indulges his passion for wine and curry; shares
          his feelings on love, death, and disability; and grapples with deep questions of
          philosophy and physics. Whether depicting Hawking's devotion to his work or demonstrating
          how he would make spur of the moment choices, such as punting on the River Cam (despite
          the risk the jaunt posed), or spinning tales of Hawking defiantly urinating in the hedges
          outside a restaurant that doesn't have a wheelchair accessible toilet, Mlodinow captures
          his indomitable spirit. This deeply affecting account of a friendship teaches us not just
          about the nature and practice of physics, but also about life and the human capacity to
          overcome daunting obstacles.
        </p>
      </div>
    )
  }

  const author = () => {
    return (
      <div>
        <p>
          {' '}
          Mlodinow was born in Chicago, Illinois, of parents who were both Holocaust survivors. His
          father, who spent more than a year in the Buchenwald concentration camp, had been a leader
          in the Jewish resistance in his hometown of Częstochowa, in Nazi Germany-occupied Poland.
          As a child, Mlodinow was interested in both mathematics and chemistry, and while in high
          school was tutored in organic chemistry by a professor from the University of Illinois. As
          recounted in his book Feynman's Rainbow, his interest turned to physics during a semester
          he took off from college to spend on a kibbutz in Israel, during which he had little to do
          at night besides reading The Feynman Lectures on Physics, which was one of the few English
          books he found in the kibbutz library.
        </p>
        <p>
          {' '}
          Mlodinow completed his doctorate at the University of California, Berkeley. It was in that
          PhD dissertation that he developed a new type of perturbation theory for nonrelativistic
          quantum mechanics, based upon solving the problem in infinite dimensions, and then
          correcting for the fact that we live in three. The method has become the basis of the 1/d
          expansion used by theoretical chemists. He has also done pioneering and innovative work in
          the quantum theory of nonlinear optics. The central problem of quantum nonlinear optics is
          how to quantize a dielectric that, as well as the usual homogeneities and anisotropy, can
          also have nonlinearities and dispersion, and earlier attempts in this direction, while
          incorporating the known linear theory, had not fully reproduced the nonlinear equations.
        </p>
        <p>
          {' '}
          In 1981, Mlodinow joined the faculty at Caltech. Later, he was named an Alexander von
          Humboldt Fellow and worked at the Max Planck Institute for Physics and Astrophysics in
          Munich, Germany. In 1986, Mlodinow left full-time academia to begin a writing career. In
          addition to his books, he wrote many episodes for a number of television series including
          Star Trek: The Next Generation and MacGyver, created computer games with director Steven
          Spielberg and actor Robin Williams, and wrote the screenplay for the 2009 film Beyond the
          Horizon. He also continued to conduct research in theoretical physics, and again joined
          the faculty of Caltech in 2005, leaving in 2013. His latest work in physics concerns the
          arrow of time, quantum decoherence, and the relation between discrete quantum random walks
          and the relativistic equations of quantum theory.
        </p>
      </div>
    )
  }
  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="book-container">
            <img src={book1} alt="stephen-hawking-book"></img>
            <BookDescription
              bookName="Stephen Hawking: A Memoir of Friendship and Physics"
              author="Leonard Mlodinow"
              bookDescription={bookDescription()}
              authorLink={'https://en.wikipedia.org/wiki/Leonard_Mlodinow'}
            />
          </div>
          <CartContainer price="$12,99" />
        </div>
        <DescriptionLine
          age="12+"
          pages="250 pages"
          language="English"
          date="September 08, 2020"
          grade="8-9"
          publisher="Random House Audio"
        />
        <Author author={author()} />

        <BookDetails
          publisher="Random House Audio"
          language="English"
          pages="250 pages"
          age="12+"
          weight="7.2 ounces"
          size="5.17 x 0.51 x 7.99 inches"
        />
      </div>
    </div>
  )
}

export default FourthBook
