import './App.scss'
import React, { useState, useEffect } from 'react'
import product from '../../products'

import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from 'react-router-dom'
import Book from '../book/book'

import Quotes from '../quotes/quotes'

import book1 from '../images/images/the-silver-arrow.jpg'
import book2 from '../images/images/sleep-donation.jpg'
import book3 from '../images/images/9780593139134.jpg'
import book4 from '../images/images/9781524748685.jpg'
import book5 from '../images/images/9781982108847.jpg'
import book6 from '../images/images/howIBuiltThis.jpg'
import book7 from '../images/images/DessertPerson.jpg'
import book8 from '../images/images/Lakota.jpg'
import book9 from '../images/images/Circe.jpg'
import book10 from '../images/images/waterProtectors.jpg'
import book11 from '../images/images/longRiverOfSoul.jpg'
import book12 from '../images/images/microRPG.jpg'
import book13 from '../images/images/YearMonkey.jpg'
import book14 from '../images/images/erosin.jpg'
import book15 from '../images/images/origami2.jpg'
import Chat from '../chat/chat'
import mainQuote from '../images/big-images/quote.jpg'
import CartList from '../cart-list/cart-list'
import { CartListInfoApp, Product } from '../interface'

export const UpdateCartList = (
  cartList: Array<{
    id: number
    price: number
    count: number
    bookName: string
    author: string
    image: string
  }>,
  newBook: CartListInfoApp,
  index: number
) => {
  if (newBook.count === 0) {
    return [...cartList.slice(0, index), ...cartList.slice(index + 1)]
  }

  if (index === -1) {
    return [...cartList, newBook]
  }
  return [...cartList.slice(0, index), newBook, ...cartList.slice(index + 1)]
}

// getBook: Product | boolean[] | undefined
// bookInCart.totalPrice!
// bookInCart: CartListInfoApp| undefined,

export const UpdateBook = (
  getBook: Product | any,
  bookInCart: CartListInfoApp,
  quantity: number
) => {
  if (bookInCart) {
    return {
      ...bookInCart,
      totalPrice: bookInCart.totalPrice ?? +quantity * (getBook?.price || 1),
      count: bookInCart.count + quantity,
    }
  }

  return {
    id: getBook?.id,
    bookName: getBook?.bookName,
    price: getBook?.price,
    count: 1,
    author: getBook?.author,
    image: getBook?.image,
  }
}

const App = (): JSX.Element => {
  const [cartList, setCartList] = useState<Array<CartListInfoApp> | []>([])

  useEffect(() => {
    const data = localStorage.getItem('book')
    if (data) {
      setCartList(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(cartList))
  }, [cartList])

  const BookInCart = () => {
    return window.alert('The book was added to the cart')
  }

  const AddBookInCart = (id: number | undefined) => {
    const getBook = product.find((book) => book.id === id)
    const getBookIndex = cartList.findIndex((book) => book.id === id)
    const bookInCart = cartList[getBookIndex]

    const newBook = UpdateBook(getBook, bookInCart, 1)

    const newArray = UpdateCartList(cartList, newBook, getBookIndex)
    setCartList(newArray)
    BookInCart()
  }

  const DeletePurchasedBook = (id: number) => {
    const getBook = product.map((bookName) => bookName.id === id)
    const getBookIndex = cartList.findIndex((book) => book.id === id)
    const bookInCart = cartList[getBookIndex]

    const newBook = UpdateBook(getBook, bookInCart, -bookInCart.count)
    const newArray = UpdateCartList(cartList, newBook, getBookIndex)

    setCartList(newArray)
  }
  const Home = () => {
    const [showChat, setShowChat] = useState(true)
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
            <Link to="/book/1">
              <img className="season-books" src={book1} alt="The Silver Arrow"></img>
            </Link>
            <b>The Silver Arrow</b>
            <div>by Lev Grossman</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/2">
              <img className="season-books" src={book2} alt="Sleep Donation"></img>
            </Link>
            <b>Sleep Donation</b>
            <div>by Karen Russell</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/3">
              <img className="season-book3" src={book3} alt="Greenlights"></img>
            </Link>
            <b>Greenlights</b>
            <div>by Matthew</div>
            <div>McConaughey</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/4">
              <img className="season-books" src={book4} alt="Stephen Hawking"></img>
            </Link>
            <b>Stephen Hawking</b>
            <div style={{ textAlign: 'center' }}>by Leonard Mlodinow</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/5">
              <img className="season-books" src={book5} alt="Magic Lessons"></img>
            </Link>
            <b>Magic Lessons</b>
            <div>by Alice Hoffman</div>
          </div>
        </div>
        <h1 className="books-name">FEATURED BESTSELLERS</h1>
        <div className="books-container">
          <div className="book-img-container">
            <Link to="/book/6">
              <img className="season-books" src={book6} alt="How I Built This"></img>
            </Link>
            <b>How I Built This</b>
            <div>by Guy Raz</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/7">
              <img className="season-books" src={book7} alt="Dessert Person"></img>
            </Link>
            <b>Dessert Person</b>
            <div>by Claire Saffitz</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/8">
              <img className="season-books" src={book8} alt="Lakota America"></img>
            </Link>
            <b>Lakota America</b>
            <div style={{ textAlign: 'center' }}>by Pekka Hamalainen</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/9">
              <img className="season-books" src={book9} alt="Circe"></img>
            </Link>
            <b>Circe</b>
            <div>by Madeline Miller</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/10">
              <img className="season-book5" src={book10} alt="We Are Water"></img>
            </Link>
            <b>We Are Water</b>
            <b>Protectors</b>
            <div>by Carole Lindstrom</div>
            <div>and Michaela Goade</div>
          </div>
        </div>
        <h1 className="books-name">GREAT BOOKS UNDER $15 AND $25</h1>
        <div className="books-container">
          <div className="book-img-container">
            <Link to="/book/11">
              <img className="season-books" src={book11} alt="One Long River of"></img>
            </Link>
            <b>One Long River of</b>
            <b>Song</b>
            <div>by Brian Doyle</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/12">
              <img className="season-book3" src={book12} alt="The Ultimate"></img>
            </Link>
            <b>The Ultimate</b>
            <b>Micro-RPG Book</b>
            <div>by James D`Amato</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/13">
              <img className="season-books" src={book13} alt="Year of the"></img>
            </Link>
            <b>Year of the</b>
            <b>Monkey</b>
            <div>by Patti Smith</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/14">
              <img className="season-books" src={book14} alt="Erosion"></img>
            </Link>
            <b>Erosion</b>
            <div>by Terry Tempest</div>
            <div>William</div>
          </div>
          <div className="book-img-container">
            <Link to="/book/15">
              <img className="season-book5" src={book15} alt="Star Wars Origami"></img>
            </Link>
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
            <input type="text" placeholder="Enter your email" size={40} required></input>
            <button onClick={Subscription}>SUBSCRIBE</button>
          </div>
        </div>
        <Chat showChat={showChat} setShowChat={setShowChat} />
      </div>
    )
  }

  return (
    <div className="App">
      <HashRouter>
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
            <Route exact path="/cart">
              <CartList cartList={cartList} DeletePurchasedBook={DeletePurchasedBook} />
            </Route>
            <Route exact path="/quotes">
              <Quotes />
            </Route>
            <Route exact path="/book/:id">
              <Book AddBookInCart={AddBookInCart} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}

export default App
