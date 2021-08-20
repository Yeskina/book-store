import React from 'react'
import './cart-window.scss'

import cart from '../images/icons/shopping-cart.png'
import buy from '../images/icons/play-button.png'
import icon5 from '../images/icons/truck.png'
import icon6 from '../images/icons/credit-card.png'

interface CartContainerInfo {
  price: number
  bookId: number
  AddBookInCart: (bookId: number) => void
}

const CartContainer: React.FC<CartContainerInfo> = ({ price, bookId, AddBookInCart }) => {
  return (
    <div className="cart-container">
      <div className="price">
        Price:<div className="value">${price}</div>
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
        <button onClick={() => AddBookInCart(bookId)} className="cart">
          <img className="image-cart" src={cart} alt="cart"></img> Add to Cart
        </button>

        <button className="buy">
          <a href="https://yeskina.github.io/credit-card/" target="blank">
            <img className="image-buy" src={buy} alt="play-button"></img>
            <div>Buy Now</div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default CartContainer
