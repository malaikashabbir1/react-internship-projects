import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import { ShoppingCart } from "lucide-react";

const Navbar = () => {

    const {cart} = useContext(CartContext);

    //it takes multiple cart items and reduces them to one value (the total quantity).
    const totalCartItems = cart.reduce( (total, item) => {
        return total +  item.quantity
    },0);

  return (
    <div className='nav'>
        <h1>Cartify</h1>
        <div className="cart-icon">
            <ShoppingCart size={24} />
            <span>{totalCartItems}</span>
        </div>
       

        
    </div>
  )
}

export default Navbar