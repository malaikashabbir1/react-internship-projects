import React, { useState } from 'react'

import CartContext from './CartContext'

const CartContextProvider = ({children}) => {

    const products = [
  {
    title: "Headphones",
    price: 4500,
    picture: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    quantity: 1
  },
  {
    title: "Smart Watch",
    price: 6500,
    picture: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    quantity: 1
  },
  {
    title: "Running Shoes",
    price: 8000,
    picture: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    quantity: 1
  },
  {
    title: "Backpack",
    price: 3500,
    picture: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    quantity: 1
  },
  {
    title: "Sunglasses",
    price: 2500,
    picture: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    quantity: 1
  }
];

    const [cart, setCart] = useState([])

    function addToCart(product) {
        // some() asks: "Does any item in cart have the same title as this product?"
        if (!cart.some( (item) => item.title === product.title)) {
                setCart([...cart, product]);
                console.log("Cart is Added.",cart)
            }
    }

    function increaseQuatity (idx)  { 
        setCart( cart.map( (item,id) => {
            if(idx === id ) {
             // not modifying the original object. You're creating a new object.
                return{
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
            return item
        }) )
    }


    function decreaseQuantity (idx) { setCart ( cart.map( (item,id) => {
        if(idx === id) {
            return {
                ...item, 
                quantity:  item.quantity > 0 ? item.quantity - 1 : 0 
            }
        }
            return item
        }))
    }

    function deleteCart (idx) {
        setCart(cart.filter( (item,id) => id !== idx))
        console.log("Deleted from cart")
    }

    return (
        <CartContext.Provider value={{products,cart,setCart,addToCart, increaseQuatity, decreaseQuantity, deleteCart}}>
            <div>
                {children}
            </div>
        </CartContext.Provider>
    )
}

export default CartContextProvider