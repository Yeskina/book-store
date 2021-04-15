import './cart-window.scss'
import { Link } from 'react-router-dom'

import cart from '../icons/shopping-cart.png'
import buy from '../icons/play-button.png'
import icon5 from '../icons/truck.png'
import icon6 from '../icons/credit-card.png'

const CartContainer = ({ price, books, AddBookInCart }) => {
  const booksId = books.map((el) => el.id === 1)
  console.warn(booksId)
  return (
    <div className="cart-container">
      <div className="price">
        Price:<div className="value">{price}</div>
      </div>
      <div className="in-stock">In Stock.</div>
      <b>Arrives in 2-5 days</b>
      <div className="truck">
        <img className="cart-icons" src={icon5} alt="truck"></img>Shipping methods:
      </div>
      <ul>
        <li>GLS delivery</li>
        <li>Self-pickup</li>
        <li>Courier</li>
      </ul>
      <div>
        <img className="cart-icons" src={icon6} alt="card"></img>Payment methods:
      </div>
      <ul>
        <li>Credit Card</li>
        <li>Google Pay</li>
        <li>Apple Pay</li>
      </ul>
      <div className="buttons-container">
        <button onClick={() => AddBookInCart(booksId)} className="cart">
          <img className="image-cart" src={cart} alt="cart"></img> Add to Cart
        </button>

        <button className="buy">
          <img className="image-buy" src={buy} alt="play-button"></img>Buy Now
        </button>
      </div>
    </div>
  )
}

export default CartContainer
