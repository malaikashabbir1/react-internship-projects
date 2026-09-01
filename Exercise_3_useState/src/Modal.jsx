import React from 'react'
import './app.css'

const Modal = ({cart,setCart,price,setPrice,isOpen,setIsOpen, onClose}) => {

    if(!isOpen) {
        return null
    }
    
  return (
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
                            <button onClick={ () => { setCart( cart.map( (item,id) => {
                                if(idx === id ) {
                                    // not modifying the original object. You're creating a new object.
                                    return{
                                        ...item,
                                        quantity: item.quantity + 1
                                    }
                                }
                                return item
                            }) )
                            }}> + </button>
                            
                            <h5>{c.quantity}</h5>
                            <button onClick={ () => { setCart ( cart.map( (item,id) => {
                                    if(idx === id) {
                                        return {
                                            ...item, 
                                            quantity:  item.quantity > 0 ? item.quantity - 1 : 0 
                                        }
                                    }
                                    return item
                                }))
                            } }>-</button>
                        </div>

                        <h4>{c.title}</h4>
                        <h5>Rs.{c.price}</h5>

                        <button onClick = {() => {
                            setCart(cart.filter( (item,id) => id !== idx))
                            console.log("Deleted from cart")
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
                
                setPrice( cart.reduce( (total,item) => {
                    return  total + item.price * item.quantity
                    },0)
            )}}>Make Payment</button>
           
            <h5>Total Payment</h5>
            <h6>Rs. {price}</h6>
        </div>

        <button onClick={ () => {
            onClose()

        }}> Close the Cart </button>
    </div>
  )
}

export default Modal