import CartListItem from '../cart-list-item/cart-list-item'
import '../cart-list-item/cart-list-item.scss'

const CartList = ({ cartList, DeletePurchasedBook }) => {
  console.warn(cartList)
  return (
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
            <td colSpan="4" className="text-right">
              <h5>Total:</h5>
            </td>
            <td>
              {cartList.map((cart) => {
                const { price } = cart
                const arr = []
                console.warn(price)
                return <h5 className="font-sans-semibold px-4 text-lg text-right">{price}</h5>
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartList
