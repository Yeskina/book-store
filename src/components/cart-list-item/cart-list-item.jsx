import React, { useState } from 'react'

const CartListItem = ({ cart, DeletePurchasedBook }) => {
  const { bookName, author, price, id, image } = cart
  const [count, setCount] = useState(1)

  return (
    <div className="cart-list-item">
      <div className="cart-list-item__header">
        <h4>{author}</h4>
        <h4 className="cart-list-item__name">{bookName}</h4>
      </div>
      <div>
        <button className="button-cart" onClick={() => setCount(count + 1)}>
          +
        </button>
        <span className="cart-list-item__count">{count}</span>
        <button className="button-cart" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <span className="cart-list-item__total-price">{price}</span>
<img src={image}></img>
      <button className="cart-list-item__delete" onClick={() => DeletePurchasedBook(id)}>
        Удалить
      </button>
    </div>
  )
}

export default CartListItem
