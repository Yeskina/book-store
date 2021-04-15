import CartListItem from '../cart-list-item/cart-list-item'

const CartList = ({ cartList, DeletePurchasedBook }) => {
  return (
    <ul className="cart-list">
      {cartList.map((cart) => {
        const { id } = cart

        return (
          <li key={id}>
            <CartListItem cart={cart} DeletePurchasedBook={DeletePurchasedBook} />
          </li>
        )
      })}
    </ul>
  )
}

export default CartList
