import React from 'react'

import { useState } from 'react'
import './cart-list-item.scss'

interface CartListItemInfo {
  DeletePurchasedBook: (id: number) => void
  cart: {bookName: string, author: string, price: number, id: number, image: string}
}

const CartListItem: React.FC<CartListItemInfo> = ({ cart, DeletePurchasedBook }) => {
  const { bookName, author, price, id, image } = cart
  const [count, setCount] = useState(1)
  const addCountHandler = () => setCount(count + 1)
  const removeCountHandler = () => (count === 1 ? count : setCount(count - 1))

  return (
     <div className="cart">
      <table className="cart-list-items">
        <thead>
          <tr className="headers">
            <th className="cart-item-description-header" colSpan={3}>
              Item
            </th>
            <th className="cart-item-quantity-header">Qty</th>
            <th className="cart-item-price-header">Price</th>
            <th className="cart-item-delete-header"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="align-top">
            <td>
              <img src={image} alt="book-cover"></img>
            </td>
            <td colSpan={2} className="cart-list-item__name">
              <h3>{bookName}</h3>
              <div>{author}</div>
            </td>
            <td className="quantity">
              <button className="button-cart" onClick={removeCountHandler}>
                -
              </button>
              <span className="cart-list-item__count">{count}</span>
              <button className="button-cart" onClick={addCountHandler}>
                +
              </button>
            </td>
            <td className="price">
              <span className="cart-list-item__total-price">${price}</span>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cart-list-item__delete"
                onClick={() => DeletePurchasedBook(id)}
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartListItem
