import CartListItem from '../cart-list-item/cart-list-item'
import '../cart-list-item/cart-list-item.scss'

const CartList = ({ cartList, DeletePurchasedBook }) => {

  const sum = () => {
    return cartList.reduce((acc, current) => {   
      return acc + current.price
    }, 0)
  }
  return (
    <div>
     {cartList.length > 0 && <div className="cart">
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
            <td colSpan="5" className="text-right">
             <h5>Total:</h5>
            </td>
            <td>
              <h5 className="font-sans-semibold px-4 text-lg text-right">{sum()}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>}
    </div>
  )
}

export default CartList
