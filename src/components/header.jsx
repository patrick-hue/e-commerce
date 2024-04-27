import {Link} from 'react-router-dom'
import './header.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/context'
export default function Header() {
    const {cart}=useContext(CartContext)
  return (
    <div className="nav">
    <div className="nav-logo">
        <h1><span>K</span>M<span>T-SH</span>O<span>P</span></h1>
    </div>
    <div className="nav-menu">
        <Link  to="/">home</Link>
        <Link  to="/about">About</Link>
        <Link  to="#product">Products</Link>
    </div>
    <div className="cart">
    <input type='text' placeholder='Search product ...' formMethod='Get' />
        <Link to="/cart" className='cart-button'>
            <img src="/images/sell_stock_96px.png" alt="Shopping Cart" />
            <span className="cart-count">{cart.length}</span>
        </Link>
    </div>
</div>
  )
}
