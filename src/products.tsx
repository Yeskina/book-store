/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/display-name */
import React from 'react'

import book1 from './components/images/big-images/silver-arrow.jpg'
import book2 from './components/images/big-images/sleep-donation.jpg'
import book3 from './components/images/big-images/51DZeZw7K0L.jpg'
import book4 from './components/images/big-images/51pYIEzOAGL.jpg'
import book5 from './components/images/big-images/61eqltFwZKL.jpg'
import book6 from './components/images/big-images/how-i-built-this.jpg'
import book7 from './components/images/big-images/dessert-person.jpg'
import book8 from './components/images/big-images/lakota-america.webp'
import book9 from './components/images/big-images/circe.jpg'
import book10 from './components/images/big-images/water-protectors.webp'
import book11 from './components/images/big-images/river-song.jpg'
import book12 from './components/images/big-images/micro-rpg.jpg'
import book13 from './components/images/big-images/year-monkey.jpg'
import book14 from './components/images/big-images/erosion.webp'
import book15 from './components/images/big-images/star-wars.jpg'
import { Product } from './components/interface'


const product: Product[] = [
  {
    id: 1,
    bookName: 'The Silver arrow',
    author: 'Lev Grossman',
    price: 18,
    image: book1,
    age: '8 - 12 years',
    pages: '288 pages',
    language: 'English',
    date: 'September 1, 2020',
    grade: '3-7',
    publisher: 'Little',
    weight: '12.8 ounces',
    size: '5.63 x 0.88 x 8 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            <i>
              Dear Uncle Herbert, You've never met me, but I'm your niece Kate, and since it is my
              birthday tomorrow and you are super-rich could you please send me a present?
            </i>
          </p>
          <p>
            Kate and her younger brother Tom lead dull, uninteresting lives. And if their dull,
            uninteresting parents are anything to go by, they don't have much to look forward to.
            Why can't Kate have thrilling adventures and save the world the way people do in books?
            Even her 11th birthday is shaping up to be mundane -- that is, until her mysterious and
            highly irresponsible Uncle Herbert, whom she's never even met before, surprises her with
            the most unexpected, exhilarating, inappropriate birthday present of all time: a
            colossal steam locomotive called the Silver Arrow.
          </p>
          <p>
            Kate and Tom's parents want to send it right back where it came from. But Kate and Tom
            have other ideas -- and so does the Silver Arrow -- and soon they're off to distant
            lands along magical rail lines in the company of an assortment of exotic animals who, it
            turns out, can talk. With only curiosity, excitement, their own resourcefulness and the
            thrill of the unknown to guide them, Kate and Tom are on the adventure of a lifetime . .
            . and who knows? They just might end up saving the world after all.
          </p>
          <p>
            This thrilling fantasy adventure will not only entertain young readers but inspire them
            to see the beautiful, exciting, and precious world around them with new eyes.
          </p>
        </div>
      )
    },
    

    biography: () => {
      return (
        <div>
          <b>Lev Grossman</b> is the author of five novels including the #1 <i>New York Times</i>
          bestselling Magicians trilogy, which has been published in thirty countries. A TV
          adaptation of the trilogy is now in its fifth season as the top-rated show on Syfy.
          Grossman is also an award-winning journalist who spent fifteen years as the book critic
          and lead technology writer at <i>Time</i> magazine, where he published more than twenty
          cover stories. In addition he has written for the <i>New York Times</i>, the{' '}
          <i>Wall Street Journal</i>,<i>Wired</i>, the <i>Believer</i>, the
          <i>Village Voice</i>, NPR, Salon, Slate, and Buzzfeed, among many others. He lives in New
          York City with his wife and three children.
        </div>
      )
    },
  },
  
  {
    id: 2,
    bookName: 'Sleeping Donation',
    author: 'Karen Russel',
    price: 11.99,
    image: book2,
    age: '18+',
    pages: '160 pages',
    language: 'English',
    date: 'September 29, 2020',
    grade: '5-7',
    publisher: 'Vintage',
    weight: '7.2 ounces',
    size: '5.17 x 0.51 x 7.99 inches',
    bookDesc: () => {
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
            Run by the wealthy and enigmatic Storch brothers, the Slumber Corps is at the forefront
            of the fight against this deadly new disease. But when Trish is confronted by "Baby A,"
            the first universal sleep donor, and the mysterious "Donor Y," whose horrific infectious
            nightmares are threatening to sweep through the precious sleep supply, her faith in the
            organization and in her own motives begins to falter.
          </p>
          <p>
            Fully illustrated with dreamy evocations of Russell's singular imagination and featuring
            a brand-new "Nightmare Appendix," Sleep Donation will keep readers up long into the
            night and long after haunt their dreams.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          KAREN RUSSELL has received a MacArthur Fellowship and a Guggenheim Fellowship, the "5
          Under 35" prize from the National Book Foundation, the New York Public Library Young Lions
          Fiction Award, and the Berlin Prize from the American Academy. She lives in Portland,
          Oregon, with her husband, son, and daughter.
        </div>
      )
    },
  },
  {
    id: 3,
    bookName: 'Greenlights',
    author: 'Matthew McConaughey',
    price: 14.99,
    image: book3,
    age: '16+',
    pages: '360 pages',
    language: 'English',
    date: 'October 20, 2020',
    grade: '8-9',
    publisher: 'Random House Audio',
    weight: '7.2 ounces',
    size: '5.17 x 0.51 x 7.99 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            I’ve been in this life for 50 years, been trying to work out its riddle for 42, and been
            keeping diaries of clues to that riddle for the last 35. Notes about successes and
            failures, joys and sorrows, things that made me marvel, and things that made me laugh
            out loud. How to be fair. How to have less stress. How to have fun. How to hurt people
            less. How to get hurt less. How to be a good man. How to have meaning in life. How to be
            more me.
          </p>
          <p>
            Recently, I worked up the courage to sit down with those diaries. I found stories I
            experienced, lessons I learned and forgot, poems, prayers, prescriptions, beliefs about
            what matters, some great photographs, and a whole bunch of bumper stickers. I found a
            reliable theme, an approach to living that gave me more satisfaction, at the time, and
            still: If you know how, and when, to deal with life’s challenges - how to get relative
            with the inevitable - you can enjoy a state of success I call “catching greenlights”. So
            I took a one-way ticket to the desert and wrote this book: an album, a record, a story
            of my life so far.
          </p>
          <p>
            This is 50 years of my sights and seens, felts and figured-outs, cools and shamefuls.
            Graces, truths, and beauties of brutality. Getting away withs, getting caughts, and
            getting wets while trying to dance between the raindrops. Hopefully, it’s medicine that
            tastes good, a couple of aspirin instead of the infirmary, a spaceship to Mars without
            needing your pilot’s license, going to church without having to be born again, and
            laughing through the tears. It’s a love letter. To life. It’s also a guide to catching
            more greenlights - and to realizing that the yellows and reds eventually turn green,
            too. Good luck.
          </p>
        </div>
      )
    },
  },
  {
    id: 4,
    bookName: 'Stephen Hawking: A Memoir of Friendship and Physics',
    author: 'Leonard Mlodinow',
    price: 12.99,
    image: book4,
    age: '12+',
    pages: '250 pages',
    language: 'English',
    date: 'September 08, 2020',
    grade: '8-9',
    publisher: 'Random House Audio',
    weight: '7.2 ounces',
    size: '5.17 x 0.51 x 7.99 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            One of the most influential physicists of our time, Stephen Hawking touched the lives of
            millions. Recalling his nearly two decades as Hawking's collaborator and friends,
            Leonard Mlodinow brings this complex man into focus in a unique and deeply personal
            portrayal. We meet Hawking the genius, who pours his mind into uncovering the mysteries
            of the universe - ultimately formulating a pathbreaking theory of black holes that
            reignites the discipline of cosmology and paves the way for physicists to investigate
            the origins of the universe in completely new ways. We meet Hawking the colleague, a man
            whose illness leaves him able to communicate at only six words per minute but who
            expends the effort to punctuate his conversations with humor. And we meet Hawking the
            friend, who can convey volumes with a frown, a smile, or simply a raised eyebrow.
          </p>
          <p>
            Mlodinow puts us in the room as Hawking indulges his passion for wine and curry; shares
            his feelings on love, death, and disability; and grapples with deep questions of
            philosophy and physics. Whether depicting Hawking's devotion to his work or
            demonstrating how he would make spur of the moment choices, such as punting on the River
            Cam (despite the risk the jaunt posed), or spinning tales of Hawking defiantly urinating
            in the hedges outside a restaurant that doesn't have a wheelchair accessible toilet,
            Mlodinow captures his indomitable spirit. This deeply affecting account of a friendship
            teaches us not just about the nature and practice of physics, but also about life and
            the human capacity to overcome daunting obstacles.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            Mlodinow was born in Chicago, Illinois, of parents who were both Holocaust survivors.
            His father, who spent more than a year in the Buchenwald concentration camp, had been a
            leader in the Jewish resistance in his hometown of Częstochowa, in Nazi Germany-occupied
            Poland. As a child, Mlodinow was interested in both mathematics and chemistry, and while
            in high school was tutored in organic chemistry by a professor from the University of
            Illinois. As recounted in his book Feynman's Rainbow, his interest turned to physics
            during a semester he took off from college to spend on a kibbutz in Israel, during which
            he had little to do at night besides reading The Feynman Lectures on Physics, which was
            one of the few English books he found in the kibbutz library.
          </p>
          <p>
            Mlodinow completed his doctorate at the University of California, Berkeley. It was in
            that PhD dissertation that he developed a new type of perturbation theory for
            nonrelativistic quantum mechanics, based upon solving the problem in infinite
            dimensions, and then correcting for the fact that we live in three. The method has
            become the basis of the 1/d expansion used by theoretical chemists. He has also done
            pioneering and innovative work in the quantum theory of nonlinear optics. The central
            problem of quantum nonlinear optics is how to quantize a dielectric that, as well as the
            usual homogeneities and anisotropy, can also have nonlinearities and dispersion, and
            earlier attempts in this direction, while incorporating the known linear theory, had not
            fully reproduced the nonlinear equations.
          </p>
          <p>
            In 1981, Mlodinow joined the faculty at Caltech. Later, he was named an Alexander von
            Humboldt Fellow and worked at the Max Planck Institute for Physics and Astrophysics in
            Munich, Germany. In 1986, Mlodinow left full-time academia to begin a writing career. In
            addition to his books, he wrote many episodes for a number of television series
            including Star Trek: The Next Generation and MacGyver, created computer games with
            director Steven Spielberg and actor Robin Williams, and wrote the screenplay for the
            2009 film Beyond the Horizon. He also continued to conduct research in theoretical
            physics, and again joined the faculty of Caltech in 2005, leaving in 2013. His latest
            work in physics concerns the arrow of time, quantum decoherence, and the relation
            between discrete quantum random walks and the relativistic equations of quantum theory.
          </p>
        </div>
      )
    },
  },
  {
    id: 5,
    bookName: 'Magic Lessons: A Prequel to Practical Magic',
    author: 'Alice Hoffman',
    price: 14.99,
    image: book5,
    age: '18+',
    pages: '230 pages',
    language: 'English',
    date: 'October 06, 2020',
    grade: '4-8',
    publisher: 'Simon & Schuster Audio',
    weight: '7.2 ounces',
    size: '5.17 x 0.51 x 7.99 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            In an unforgettable novel that traces a centuries-old curse to its source, beloved
            author Alice Hoffman unveils the story of Maria Owens, accused of witchcraft in Salem,
            and matriarch of a line of the amazing Owens women and men featured in Practical Magic
            and The Rules of Magic.
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
            Salem, Massachusetts. Here she invokes the curse that will haunt her family. And it’s
            here that she learns the rules of magic and the lesson that she will carry with her for
            the rest of her life. Love is the only thing that matters.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            Alice Hoffman (born March 16, 1952) is an American novelist and young-adult and
            children's writer, best known for her 1995 novel Practical Magic, which was adapted for
            a 1998 film of the same name. Many of her works fall into the genre of magic realism and
            contain elements of magic, irony, and non-standard romances and relationships.
          </p>
          <p>
            When Hoffman was twenty-one and studying at Stanford, her first short story, At The
            Drive-In, was published in Volume 3 of the literary magazine Fiction. Editor Ted
            Solotaroff contacted her, and asked whether she had a novel. At that point, she began
            writing her first novel, Property Of. It was published in 1977, by Farrar Straus and
            Giroux, now a division of Macmillan Publishers. A section of Property Of was published
            in Solotaroff's literary magazine, American Review. Hoffman's first job was at
            Doubleday, which later published two of her novels. She was the recipient of a New
            Jersey Notable Book Award for Ice Queen. She won a Hammett Prize for Turtle Moon. She
            wrote the screenplay for the 1983 film Independence Day, starring Kathleen Quinlan and
            Dianne Wiest.
          </p>
          <p>
            In September 2019 Hoffman released "The World That We Knew" based on a true story told
            to her by a fan at a book signing. The woman confided to Hoffman that during World War
            2, her Jewish parents had her live with non-Jewish people to escape the Nazis. These
            were known as "hidden children" and Hoffman thought about this woman and her unusual
            upbringing for years before deciding to travel to Europe and learn more. The third novel
            in her "Practical Magic" series, Magic Lessons, was released in October 2020. This
            prequel takes place in the 17th century and explores the life of Maria Owens, the family
            matriarch. For Scholastic Press, Hoffman has also written the young adult novels Indigo,
            Green Angel, and its sequel, Green Witch. With her son Wolfe Martin, she wrote the
            picture book Moondog. In 2015, Hoffman donated her archives to her alma mater, Adelphi
            University.
          </p>
        </div>
      )
    },
  },
  {
    id: 6,
    bookName:
      'How I Built This: The Unexpected Paths to Success from the World`s Most Inspiring Entrepreneurs',
    author: 'Guy Raz',
    price: 13.3,
    image: book6,
    age: '16+',
    pages: '526 pages',
    language: 'English',
    date: 'September 15, 2020',
    grade: '5-7',
    publisher: 'Audible Studios',
    weight: '12.8 ounces',
    size: '5.63 x 0.88 x 8 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            Based on the highly acclaimed NPR podcast How I Built This with Guy Raz, this book
            offers priceless insights and inspiration from the world's top entrepreneurs on how to
            start, launch, and build a successful venture.
          </p>
          <p>
            Great ideas often come from a simple spark: A soccer player on the New Zealand national
            team notices all the unused wool his country produces and figures out a way to turn them
            into shoes (Allbirds). A former Buddhist monk decides the very best way to spread his
            mindfulness teachings is by launching an app (Headspace). A sandwich cart vendor finds a
            way to reuse leftover pita bread and turns it into a multimillion-dollar business
            (Stacy’s Pita Chips).
          </p>
          <p>
            Award-winning journalist and NPR host Guy Raz has interviewed more than 200 highly
            successful entrepreneurs to uncover amazing true stories like these. In How I Built
            This, he shares tips for every entrepreneur's journey: from the early days of
            formulating your idea, to raising money and recruiting employees, to fending off
            competitors, to finally paying yourself a real salary. This is a must-listen for anyone
            who has ever dreamed of starting their own business or wondered how trailblazing
            entrepreneurs made their own dreams a reality.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          Guy Raz is an acclaimed radio and podcast personality and creator of the popular podcasts
          "How I Built This," and "TED Radio Hour," which have found a consistent home on the top
          charts. "How I Built This" is a podcast about the greatest innovators, entrepreneurs, and
          idealists, and the stories behind the move- ments they built. Guy is also the creator of
          NPR's first-ever podcast for kids, "Wow in the World" as well as Spotify's "The Rewind"
          and Luminary's "Wisdom From The Top." His shows are heard by more than 19 million people
          each month around the world. "How I Built This" and "TED Radio Hour" have been named top
          podcasts by Apple Podcasts, and Inc. Magazine has called "How I Built This" "the best
          podcast to take on the New Year."
        </div>
      )
    },
  },
  {
    id: 7,
    bookName: 'Dessert Person: Recipes and Guidance for Baking with Confidence',
    author: 'Claire Saffitz',
    price: 30.81,
    image: book7,
    age: '12+',
    pages: '368 pages',
    language: 'English',
    date: 'October 20, 2020',
    grade: '8-9',
    publisher: 'Clarkson Potter',
    weight: '3.36 pounds',
    size: '8.31 x 1.22 x 11.38 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            <i>
              “There are no ‘just cooks’ out there, only bakers who haven't yet been converted. I am
              a dessert person, and we are all dessert people.”—Claire Saffitz
            </i>
          </p>
          <p>
            Claire Saffitz is a baking hero for a new generation. In Dessert Person, fans will find
            Claire’s signature spin on sweet and savory recipes like Babkallah (a babka-Challah
            mashup), Apple and Concord Grape Crumble Pie, Strawberry-Cornmeal Layer Cake, Crispy
            Mushroom Galette, and Malted Forever Brownies. She outlines the problems and solutions
            for each recipe—like what to do if your pie dough for Sour Cherry Pie cracks (patch it
            with dough or a quiche flour paste!)—as well as practical do’s and don’ts, skill level,
            prep and bake time, step-by-step photography, and foundational know-how. With her
            trademark warmth and superpower ability to explain anything baking related, Claire is
            ready to make everyone a dessert person.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <b>Claire Saffitz</b> (born 1986) is an American pastry chef, food writer, and YouTube
          personality. Until mid-2020, she was a contributing editor at <i>Bon Appétit</i> magazine
          and starred in several series on the <i>Bon Appétit</i> YouTube channel. Her best-known
          series was <i>Gourmet Makes</i>, in which she created gourmet versions of popular snack
          foods by reverse engineering them. Since leaving the company, she has published a
          cookbook, <i>Dessert Person</i>, which became a <i>New York Times</i> Best Seller, and
          continues work as a video host on her own YouTube channel and as a freelance recipe
          developer.
        </div>
      )
    },
  },
  {
    id: 8,
    bookName:
      'Lakota America: A New History of Indigenous Power (The Lamar Series in Western History)',
    author: 'Pekka Hamalainen',
    price: 17.63,
    image: book8,
    age: '16+',
    pages: '544 pages',
    language: 'English',
    date: 'October 13, 2020',
    grade: '8-9',
    publisher: 'Yale University Press',
    weight: '1.53 pounds',
    size: '6.25 x 1.5 x 9 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            Red Cloud, Crazy Horse, and Sitting Bull are iconic figures in the American imagination,
            but in this groundbreaking book they emerge as something different: the architects of
            Lakota America, an expansive and enduring Indigenous regime that commanded human fates
            in the North American interior for generations. In this first complete account of the
            Lakota Indians Pekka Hämäläinen traces their rich and often surprising history from the
            early sixteenth to the early twenty‑first century. He explores the Lakotas’ roots as
            marginal hunter‑gatherers and reveals how they reinvented themselves twice: first as a
            river people who dominated the Missouri Valley, America’s great commercial artery, and
            then—in what was America’s first sweeping westward expansion—as a horse people who ruled
            supreme on the vast high plains.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            <b>Pekka Hämäläinen</b> is the Rhodes Professor of American History and Fellow of St.
            Catherine’s College at Oxford University. He has served as the principal investigator of
            a five‑year project on nomadic empires in world history, funded by the European Research
            Council. His previous book, The Comanche Empire, won the Bancroft Prize in 2009.
          </p>
          <p>
            Hämäläinen was born and raised in Helsinki, Finland. It was only in secondary school
            that an inspiring teacher made him realize that he enjoyed history, his core interest
            being Native American history. At university, Hämäläinen majored in history and trained
            to become a secondary history teacher. After finishing his M.A., he began work on his
            Ph.D.
          </p>
          <p>
            He graduated from University of Helsinki, with a Ph.D. in 2001. He taught at Texas A&M
            University from 2002 to 2004. His work has appeared in the American Historical Review,
            Journal of American History, William and Mary Quarterly, and the Western Historical
            Quarterly. He taught in the History Department at University of California, Santa
            Barbara, before he moved to Oxford University. In 2019, Hämäläinen published a book
            about the history of the Lakota people from the 17th-20th centuries.
          </p>
        </div>
      )
    },
  },
  {
    id: 9,
    bookName: 'Circe',
    author: 'Madeline Miller',
    price: 13.07,
    image: book9,
    age: '18+',
    pages: '416 pages',
    language: 'English',
    date: 'April 14, 2020',
    grade: '8-9',
    publisher: 'Back Bay Books',
    weight: '1.53 pounds',
    size: '5.5 x 1.04 x 8.25 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born.
            But Circe is a strange child -- not powerful, like her father, nor viciously alluring
            like her mother. Turning to the world of mortals for companionship, she discovers that
            she does possess power -- the power of witchcraft, which can transform rivals into
            monsters and menace the gods themselves.
          </p>
          <p>
            Threatened, Zeus banishes her to a deserted island, where she hones her occult craft,
            tames wild beasts and crosses paths with many of the most famous figures in all of
            mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous
            Medea, and, of course, wily Odysseus.
          </p>
          <p>
            But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the
            wrath of both men and gods, ultimately finding herself pitted against one of the most
            terrifying and vengeful of the Olympians. To protect what she loves most, Circe must
            summon all her strength and choose, once and for all, whether she belongs with the gods
            she is born from, or the mortals she has come to love.
          </p>
          <p>
            With unforgettably vivid characters, mesmerizing language, and page-turning suspense,
            Circe is a triumph of storytelling, an intoxicating epic of family rivalry, palace
            intrigue, love and loss, as well as a celebration of indomitable female strength in a
            man's world.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            Miller was born on July 24, 1978, in Boston and grew up in New York City and
            Philadelphia. After graduating from Brown University with a bachelor's and master's in
            Classics (2000 and 2001, respectively), Miller then went on to teach Latin, Greek, and
            Shakespeare to high school students. She also studied for a year at the University of
            Chicago's Committee on Social Thought toward a PhD and from 2009 to 2010 at the Yale
            School of Drama for an MFA in Dramaturgy and Dramatic Criticism. As of May 2012 Miller
            lived in Cambridge, Massachusetts teaching and writing.<i>The Song of Achilles</i> was
            awarded the Orange Prize for Fiction and has been translated into twenty-five languages.
          </p>
          <p>
            <i>Circe</i>, Miller's second novel, was released on April 10, 2018. The book is a
            modern reimagining told from the perspective of Circe, an enchantress in Greek mythology
            who is featured in Homer's Odyssey. Circe was ranked the second-greatest book of the
            2010s by Paste. An 8-part miniseries adaptation of the book has been greenlit for HBO
            Max. Rick Jaffa and Amanda Silver are set to write and produce the adaptation.
          </p>
        </div>
      )
    },
  },
  {
    id: 10,
    bookName: 'We Are Water Protectors',
    author: 'Carole Lindstrom',
    price: 16.19,
    image: book10,
    age: '3 - 6 years',
    pages: '40 pages',
    language: 'English',
    date: 'April 14, 2020',
    grade: 'Preschool - 1',
    publisher: 'Roaring Brook Press',
    weight: '10.6 ounces',
    size: '10.39 x 0.41 x 10.25 inches',
    bookDesc: () => {
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
            When a black snake threatens to destroy the Earth And poison her people’s water, one
            young water protector Takes a stand to defend Earth’s most sacred resource.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            Carole is Anishinabe/Metis and is tribally enrolled with the Turtle Mountain Band of
            Ojibwe. She was born and raised in Nebraska and currently makes her home in Maryland.
          </p>
          <p>
            Carole has been a voracious reader and library geek ever since she was growing up in
            Nebraska. On weekends you could usually find her at the library lost in the book stacks
            or holed up in her bedroom with a good book. It wasn't until she had her son, that she
            discovered her love of writing for children and began to work seriously on her writing.
            She is represented by the Andrea Brown Literary Agency.
          </p>
        </div>
      )
    },
  },
  {
    id: 11,
    bookName: 'One Long River of Song: Notes on Wonder',
    author: 'Brian Doyle',
    price: 17.99,
    image: book11,
    age: '18+',
    pages: '272 pages',
    language: 'English',
    date: 'December 8, 2020',
    grade: '5-7',
    publisher: 'Back Bay Books',
    weight: '7.2 ounces',
    size: '5.38 x 0.63 x 8.25 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            When Brian Doyle passed away at the age of sixty after a bout with brain cancer, he left
            behind a cult-like following of devoted readers who regard his writing as one of the
            best-kept secrets of the twenty-first century. Doyle writes with a delightful sense of
            wonder about the sanctity of everyday things, and about love and connection in all their
            forms: spiritual love, brotherly love, romantic love, and even the love of a nine-foot
            sturgeon.
          </p>
          <p>
            At a moment when the world can sometimes feel darker than ever, Doyle's writing, which
            constantly evokes the humor and even bliss that life affords, is a balm. His essays
            manage to find, again and again, exquisite beauty in the quotidian, whether it's the awe
            of a child the first time she hears a river, or a husband's whiskers that a grieving
            widow misses seeing in her sink every morning. Through Doyle's eyes, nothing is dull.
          </p>
          <p>
            David James Duncan sums up Doyle's sensibilities best in his introduction to the
            collection: "Brian Doyle lived the pleasure of bearing daily witness to quiet glories
            hidden in people, places and creatures of little or no size, renown, or commercial
            value, and he brought inimitably playful or soaring or aching or heartfelt language to
            his tellings." A life's work, One Long River of Song invites readers to experience joy
            and wonder in ordinary moments that become, under Doyle's rapturous and exuberant gaze,
            extraordinary.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <b>Brian Doyle</b> (1956-2017) was born in New York and attended the University of Notre
          Dame. He worked at U.S. <i>Catholic Magazine, Boston College Magazine</i> and, up until
          his death, was the editor of <i>Portland Magazine</i>. He wrote a number of novels and
          works of nonfiction, and his essays appeared in the
          <i>
            New York Times, Atlantic Monthly, Harper's Orion, American Scholar, America Magazine
          </i>
          , and many more. He won the American Academy of Arts and Letters Award in Literature, the
          2017 John Burroughs Medal for Distinguished Nature Writing, the Oregon Book Award, three
          Pushcart Prizes, among others, and had multiple essays included in Best{' '}
          <i>American Essays</i>.
        </div>
      )
    },
  },
  {
    id: 12,
    bookName: 'Games (The Ultimate RPG Guide Series)',
    author: 'James D’Amato',
    price: 14.99,
    image: book12,
    age: '12+',
    pages: '128 pages',
    language: 'English',
    date: 'December 8, 2020',
    grade: '7-8',
    publisher: 'Adams Media',
    weight: '7.2 ounces',
    size: '8.5 x 0.4 x 10 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            <b>
              Enjoy these 40 expertly crafted micro-RPGs that are fast, fun, easy to learn, and come
              in a variety of genres—from space exploration to jungle dungeon crawlers—everything
              you need to pick up and play today.
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
    },
    biography: () => {
      return (
        <div>
          James D’Amato is the author of <i>The Ultimate RPG Backstory Guide</i> and{' '}
          <i>The Ultimate RPG Gameplay Guide</i>, as well as the creator and game master of the{' '}
          <i>One Shot Podcast</i> and several spin off podcasts dedicated to RPG gameplay. He
          trained at Second City and iO in Chicago in the art of improvisational comedy: he now uses
          that education to introduce new people to role-playing, and incorporates improvisational
          storytelling techniques to create compelling and entertaining stories for RPG campaigns
          and one-shot adventures.
        </div>
      )
    },
  },
  {
    id: 13,
    bookName: 'Year of the Monkey',
    author: 'Patti Smith',
    price: 4.99,
    image: book13,
    age: '14+',
    pages: '224 pages',
    language: 'English',
    date: 'September 1, 2020',
    grade: '7-8',
    publisher: 'Vintage',
    weight: '7.2 ounces',
    size: '5.4 x 0.6 x 8 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            Following a run of new year’s concerts at San Francisco’s legendary Fillmore, Patti
            Smith finds herself tramping the coast of Santa Cruz, about to embark on a year of
            solitary wandering. Unfettered by logic or time, she draws us into her private
            wonderland, in which she debates intellectual grifters and spars with the likes of a
            postmodern Cheshire Cat. Then, in February 2016, a surreal lunar year begins, bringing
            unexpected turns, heightened mischief, and inescapable sorrow. For Smith—inveterately
            curious, always exploring, always writing—this becomes a year of reckoning with the
            changes in life’s gyre: with loss, aging, and a dramatic shift in the political
            landscape of America.
          </p>
          <p>
            Taking us from California to the Arizona desert, from a Kentucky farm to the hospital
            room of a valued mentor, Smith melds the western landscape with her own dreamscape in a
            haunting, poetic blend of fact and fiction. As a stranger tells her, “Anything is
            possible. After all, it’s the Year of the Monkey.” But as Smith heads toward a new
            decade in her own life, she offers this balm to the reader: her wisdom, wit, gimlet eye,
            and above all, a rugged hope for a better world.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            <b>Patricia Lee Smith</b> (born December 30, 1946) is an American singer-songwriter,
            musician, author, and poet who became an influential component of the New York City punk
            rock movement with her 1975 debut album <i>Horses</i>.
          </p>

          <p>
            Called the "punk poet laureate", Smith fused rock and poetry in her work. Her most
            widely known song is "Because the Night", which was co-written with Bruce Springsteen.
            It reached number 13 on the <i>Billboard</i> Hot 100 chart in 1978 and number five in
            the U.K. In 2005, Smith was named a Commander of the Ordre des Arts et des Lettres by
            the French Ministry of Culture. In 2007, she was inducted into the Rock and Roll Hall of
            Fame.
          </p>

          <p>
            On November 17, 2010, Smith won the National Book Award for her memoir <i>Just Kids</i>.
            The book fulfilled a promise she had made to her former long-time roommate and partner,
            Robert Mapplethorpe. She placed 47th in <i>Rolling Stone</i> magazine's list of 100
            Greatest Artists published in December 2010 and was also a recipient of the 2011 Polar
            Music Prize.
          </p>
        </div>
      )
    },
  },
  {
    id: 14,
    bookName: 'Erosion',
    author: 'Terry Tempest Williams',
    price: 15.99,
    image: book14,
    age: '18+',
    pages: '352 pages',
    language: 'English',
    date: 'October 13, 2020',
    grade: '7-8',
    publisher: 'Picador Paper',
    weight: '7.2 ounces',
    size: '5.44 x 1.04 x 8.28 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            Terry Tempest Williams's fierce, spirited, and magnificent essays are a howl in the
            desert. She sizes up the continuing assaults on America's public lands and the erosion
            of our commitment to the open space of democracy. She asks: "How do we find the strength
            to not look away from all that is breaking our hearts?"
          </p>
          <p>
            We know the elements of erosion: wind, water, and time. They have shaped the spectacular
            physical landscape of our nation. Here, Williams bravely and brilliantly explores the
            many forms of erosion we face: of democracy, science, compassion, and trust. She
            examines the dire cultural and environmental implications of the gutting of Bear Ears
            National Monument―sacred lands to Native Peoples of the American Southwest; of the
            undermining of the Endangered Species Act; of the relentless press by the fossil fuel
            industry that has led to a panorama in which "oil rigs light up the horizon." And she
            testifies that the climate crisis is not an abstraction, offering as evidence the
            drought outside her door and, at times, within herself.
          </p>
          <p>
            These essays are Williams's call to action, blazing a way forward through difficult and
            dispiriting times. We will find new territory―emotional, geographical, communal. The
            erosion of desert lands exposes the truth of change. What has been weathered, worn, and
            whittled away is as powerful as what remains. Our undoing is also our becoming.
          </p>
          <p>
            <i>Erosion</i> is a book for this moment, political and spiritual at once, written by
            one of our greatest naturalists, essayists, and defenders of the environment. She
            reminds us that beauty is its own form of resistance, and that water can crack stone.
          </p>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            <b>Terry Tempest Williams</b> is the award-winning author of{' '}
            <i>
              The Hour of Land: A Personal Topography of America’s National Parks; Refuge: An
              Unnatural History of Family and Place; Finding Beauty in a Broken World; and When
              Women Were Birds
            </i>
            , among other books. Her work is widely taught and anthologized around the world. A
            member of the American Academy of Arts and Letters, she is currently the
            Writer-in-Residence at the Harvard Divinity School and divides her time between
            Cambridge, Massachusetts and Castle Valley, Utah.
          </p>
        </div>
      )
    },
  },
  {
    id: 15,
    bookName: 'Star Wars Origami 2: 34 More Projects from a Galaxy Far, Far Away....',
    author: 'Chris Alexander',
    price: 14.99,
    image: book15,
    age: '8 years and up',
    pages: '384 pages',
    language: 'English',
    date: 'October 13, 2020',
    grade: '7-8',
    publisher: 'Workman',
    weight: '7.2 ounces',
    size: '8.5 x 1 x 8 inches',
    bookDesc: () => {
      return (
        <div>
          <p>
            <b>
              A paper-folding adventure in a galaxy far, far away! Make Darth Vader, Kylo Ren, BB-8,
              ships, droids, and more!
            </b>
          </p>
          <p>
            Combining the mythic power of Star Wars with the fun of origami, here is everything you
            need to create a collection of characters, creatures, Jedi starfighters, and those very
            special objects––like Kylo Ren and Rey’s lightsabers––imbued with a galaxy of meaning.
            Ingeniously designed by origamic master Chris Alexander, each of the 34 projects
            includes illustrated step-by-step instructions and a photograph of the finished model.
          </p>
          <div>
            <b>Includes:</b>
            <ul>
              <li>A primer on origami definitions, symbols, and how to make the basic folds</li>
              <li>
                72 sheets of specially printed folding paper, plus step-by-step folding directions
                for 34 projects to fold
              </li>
              <li>
                Everything you need to make lovable porgs, the unfathomably evil Supreme Leader
                Snoke, Lando Calrissian’s Millennium Falcon with its graceful lines, and so much
                more
              </li>
            </ul>
          </div>
        </div>
      )
    },
    biography: () => {
      return (
        <div>
          <p>
            <b>Chris Alexander</b> began doing origami at the age of four. Since then he’s created
            dozens of original designs, many of them <i>Star Wars</i> themed. He has a large Star
            Wars fan base and tours the country folding at conventions and museums. He lives in
            Lancaster, California.
          </p>
        </div>
      )
    },
  },

]
//  var object = {
//   someMethod: function() {}
// };

// object.someMethod.displayName = 'someMethod';


// product.map(el => el.bookDesc()).displayName = 'someMethod';



export default product
