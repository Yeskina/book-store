import './App.scss'
import React, { useState, useEffect } from 'react'
import product from '../../products'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import FirstBook from '../all-books/book1'
import SecondBook from '../all-books/book2'
import ThirdBook from '../all-books/book3'
import FourthBook from '../all-books/book4'
import FifthBook from '../all-books/book5'
import SixthBook from '../all-books/book6'
import SeventhBook from '../all-books/book7'
import EighthBook from '../all-books/book8'
import NinthBook from '../all-books/book9'
import TenthBook from '../all-books/book10'
import EleventhBook from '../all-books/book11'
import TwelfthBook from '../all-books/book12'
import ThirteenthBook from '../all-books/book13'
import FourteenthBook from '../all-books/book14'
import FifteenthBook from '../all-books/book15'
import Quotes from '../quotes/quotes.jsx'

import book1 from '../images/the-silver-arrow.jpg'
import book2 from '../images/sleep-donation.jpg'
import book3 from '../images/9780593139134.jpg'
import book4 from '../images/9781524748685.jpg'
import book5 from '../images/9781982108847.jpg'
import book6 from '../images/howIBuiltThis.jpg'
import book7 from '../images/DessertPerson.jpg'
import book8 from '../images/Lakota.jpg'
import book9 from '../images/Circe.jpg'
import book10 from '../images/waterProtectors.jpg'
import book11 from '../images/longRiverOfSoul.jpg'
import book12 from '../images/microRPG.jpg'
import book13 from '../images/YearMonkey.jpg'
import book14 from '../images/erosin.jpg'
import book15 from '../images/origami2.jpg'
import Chat from '../chat/chat.jsx'
import mainQuote from '../big-images/quote.jpg'
import CartList from '../cart-list/cart-list.jsx'

export const UpdateCartList = (cartList, newBook, index) => {
  if (newBook.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)]
  }

  if (index === -1) {
    return [...cartList, newBook]
  }
  return [...cartList.slice(0, index), newBook, ...cartList.slice(index + 1)]
}

export const UpdateBook = (getBook, bookInCart, quantity) => {
  if (bookInCart) {
    return {
      ...bookInCart,
      totalPrice: bookInCart.totalPrice + quantity * getBook.price,
      count: bookInCart.count + quantity,
    }
  }

  return {
    id: getBook.id,
    bookName: getBook.bookName,
    price: getBook.price,
    count: 1,
    author: getBook.author,
    image: getBook.image,
  }
}

const App = () => {
  const [cartList, setCartList] = useState([])

useEffect(()=>{
  const data = localStorage.getItem('book')
  if(data){
    setCartList(JSON.parse(data))
   }
  },[])

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(cartList))
  }, [cartList])

  const AddBookInCart = (id) => {
    const getBook = product.find((book) => book.id === id)
    const getBookIndex = cartList.findIndex((book) => book.id === id)
    const bookInCart = cartList[getBookIndex]

    const newBook = UpdateBook(getBook, bookInCart, 1)
    const newArray = UpdateCartList(cartList, newBook, getBookIndex)
   setCartList(newArray)

  }

  const DeletePurchasedBook = (id) => {
    const getBook = product.map((bookName) => bookName.id === id)
    const getBookIndex = cartList.findIndex((book) => book.id === id)
    const bookInCart = cartList[getBookIndex]

    const newBook = UpdateBook(getBook, bookInCart, -bookInCart.count)
    const newArray = UpdateCartList(cartList, newBook, getBookIndex)

    setCartList(newArray)
  }
  const Home = () => {
    let [showChat, setShowChat] = useState(true)

    const Subscription = () => {
      return window.alert('You are subscribed now!')
    }
    return (
      <div className="main-container">
        <h1 className="shop-name">BookWorm</h1>
        <img className="main-quote" alt="main-quote" src={mainQuote}></img>
        <h1 className="books-name">PICKS OF THE SEASON</h1>
        <div className="books-container">
          <div className="book-img-container">
            <a href="/first-book">
              <img className="season-books" src={book1} alt="The Silver Arrow"></img>
            </a>
            <b>The Silver Arrow</b>
            <div>by Lev Grossman</div>
          </div>
          <div className="book-img-container">
            <a href="/second-book">
              <img className="season-books" src={book2} alt="Sleep Donation"></img>
            </a>
            <b>Sleep Donation</b>
            <div>by Karen Russell</div>
          </div>
          <div className="book-img-container">
            <a href="/third-book">
              <img className="season-book3" src={book3} alt="Greenlights"></img>
            </a>
            <b>Greenlights</b>
            <div>by Matthew</div>
            <div>McConaughey</div>
          </div>
          <div className="book-img-container">
            <a href="/fourth-book">
              <img className="season-books" src={book4} alt="Stephen Hawking"></img>
            </a>
            <b>Stephen Hawking</b>
            <div style={{ textAlign: 'center' }}>by Leonard Mlodinow</div>
          </div>
          <div className="book-img-container">
            <a href="/fifth-book">
              <img className="season-books" src={book5} alt="Magic Lessons"></img>
            </a>
            <b>Magic Lessons</b>
            <div>by Alice Hoffman</div>
          </div>
        </div>
        <h1 className="books-name">FEATURED BESTSELLERS</h1>
        <div className="books-container">
          <div className="book-img-container">
            <a href="/sixth-book">
              <img className="season-books" src={book6} alt="How I Built This"></img>
            </a>
            <b>How I Built This</b>
            <div>by Guy Raz</div>
          </div>
          <div className="book-img-container">
            <a href="/seventh-book">
              <img className="season-books" src={book7} alt="Dessert Person"></img>
            </a>
            <b>Dessert Person</b>
            <div>by Claire Saffitz</div>
          </div>
          <div className="book-img-container">
            <a href="/eighth-book">
              <img className="season-books" src={book8} alt="Lakota America"></img>
            </a>
            <b>Lakota America</b>
            <div style={{ textAlign: 'center' }}>by Pekka Hamalainen</div>
          </div>
          <div className="book-img-container">
            <a href="/ninth-book">
              <img className="season-books" src={book9} alt="Circe"></img>
            </a>
            <b>Circe</b>
            <div>by Madeline Miller</div>
          </div>
          <div className="book-img-container">
            <a href="/tenth-book">
              <img className="season-book5" src={book10} alt="We Are Water"></img>
            </a>
            <b>We Are Water</b>
            <b>Protectors</b>
            <div>by Carole Lindstrom</div>
            <div>and Michaela Goade</div>
          </div>
        </div>
        <h1 className="books-name">GREAT BOOKS UNDER $15 AND $25</h1>
        <div className="books-container">
          <div className="book-img-container">
            <a href="/eleventh-book">
              <img className="season-books" src={book11} alt="One Long River of"></img>
            </a>
            <b>One Long River of</b>
            <b>Song</b>
            <div>by Brian Doyle</div>
          </div>
          <div className="book-img-container">
            <a href="/twelfth-book">
              <img className="season-book3" src={book12} alt="The Ultimate"></img>
            </a>
            <b>The Ultimate</b>
            <b>Micro-RPG Book</b>
            <div>by James D'Amato</div>
          </div>
          <div className="book-img-container">
            <a href="/thirteenth-book">
              <img className="season-books" src={book13} alt="Year of the"></img>
            </a>
            <b>Year of the</b>
            <b>Monkey</b>
            <div>by Patti Smith</div>
          </div>
          <div className="book-img-container">
            <a href="/fourteenth-book">
              <img className="season-books" src={book14} alt="Erosion"></img>
            </a>
            <b>Erosion</b>
            <div>by Terry Tempest</div>
            <div>William</div>
          </div>
          <div className="book-img-container">
            <a href="/fifteenth-book">
              <img className="season-book5" src={book15} alt="Star Wars Origami"></img>
            </a>
            <b>Star Wars Origami</b>
            <b>2</b>
            <div>by Chris Alexander</div>
          </div>
        </div>
        <div className="footer">
          <h3>BookWorm</h3>
          <div>
            Subscription to news
            <br></br>
            and discounts
          </div>
          <div>
            <input type="text" placeholder="Enter your email" size="40"></input>
            <button onClick={Subscription}>SUBSCRIBE</button>
          </div>
        </div>
        <Chat showChat={showChat} className="chat" setShowChat={setShowChat} />
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav className="header">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/cart">
              <CartList cartList={cartList} DeletePurchasedBook={DeletePurchasedBook} />
            </Route>
            <Route path="/quotes">
              <Quotes />
            </Route>
            <Route path="/first-book">
              <FirstBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/second-book">
              <SecondBook AddBookInCart={AddBookInCart}/>
            </Route>
            <Route path="/third-book">
              <ThirdBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/fourth-book">
              <FourthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/fifth-book">
              <FifthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/sixth-book">
              <SixthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/seventh-book">
              <SeventhBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/eighth-book">
              <EighthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/ninth-book">
              <NinthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/tenth-book">
              <TenthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/eleventh-book">
              <EleventhBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/twelfth-book">
              <TwelfthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/thirteenth-book">
              <ThirteenthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/fourteenth-book">
              <FourteenthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/fifteenth-book">
              <FifteenthBook AddBookInCart={AddBookInCart} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
