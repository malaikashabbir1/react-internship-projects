import React, { useContext, useState } from 'react'
import ProductCart from './ProductCart';
import '../app.css'
import CartContext from '../context/CartContext';



const ShoppingCart = () => {

    const {products,cart,addToCart,increaseQuatity,decreaseQuantity, deleteCart} = useContext(CartContext)
    const [amount, setAmount] = useState(0)
    console.log("CartLenght: ", cart.length);

  return (
    <div>
    <div  className='main_div'>
        {products.map( (product, idx,children) => {
            return (
                
                <ProductCart
                    key={idx}
                    idx={idx}
                    data={product}
                > 
                <button onClick={() => {addToCart(product)}}>ADD TO CART</button>

                </ProductCart>
            )

            
        })} 
    </div>
    
     <div>
        <h1>CART ITEMS: </h1>
        <div className='main_div'>
        {cart.map( (c,idx) => {
            return (
                <div key={idx} >
                    <div>
                        <img src= {c.picture} alt="photo" className='cart_img'></img>

                        <div className='main_div'>

                            {/* updating one object inside an array immutably. */}
                            <button onClick={ () => { increaseQuatity(idx)  } }> + </button>
                            
                            <h5>{c.quantity}</h5>
                            <button onClick={ () => { decreaseQuantity(idx) }  }>-</button>
                        </div>

                        <h4>{c.title}</h4>
                        <h5>Rs.{c.price}</h5>

                        <button onClick = {() => {
                            deleteCart(idx)
                        }}> Delete from Cart</button>
                    </div>
                    
                    
                </div>
                
            )

           

        })}
        </div>

        <div>
            <button onClick={ () => {
                // reduce() → calculates a single value
                //ou need to give reduce() an initial value of 0:
                
                setAmount( cart.reduce( (total,item) => {
                    return  total + item.price * item.quantity
                    },0)
            )}}>Make Payment</button>
           
            <h5>Total Payment</h5>
            <h6>Rs. {amount}</h6>
        </div>
    </div>

    
        
    </div>

  )
}

export default ShoppingCart