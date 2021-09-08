import CartListItem from '../cart-list-item/cart-list-item'
import React from 'react'

import '../cart-list-item/cart-list-item.scss'
import { CartListInfo } from '../interface'
import { Link } from 'react-router-dom'

const CartList: React.FC<CartListInfo> = ({ cartList, DeletePurchasedBook }) => {
  console.warn(DeletePurchasedBook)

  const sum = () => {
    return cartList.reduce((acc: number, current: { price: number }) => {
      return acc + current.price
    }, 0)
  }
  return (
    <div>
      {cartList.length > 0 && (
        <div className="cart">
          <h1>ShoppingCart</h1>
          {cartList.map((cart) => {
            const { id } = cart
            return (
              <div key={id}>
                <CartListItem cart={cart} DeletePurchasedBook={DeletePurchasedBook} />
              </div>
            )
          })}
          <table>
            <tbody>
              <tr className="cart-total">
                <td colSpan={5} className="text-right">
                  <h5>Total:</h5>
                </td>
                <td>
                  <h5 className="font-sans-semibold px-4 text-lg text-right sum">${sum()}</h5>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="buttons-container">
          <button>
            <Link to="/">
              CONTINUE SHOPPING
            </Link>
            </button>
            <button>
              <a href="https://yeskina.github.io/credit-card/" target="blank">
                BUY
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartList
