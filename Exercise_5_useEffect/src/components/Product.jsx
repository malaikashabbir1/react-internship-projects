import React, { useEffect, useState } from 'react'
import ProductDetails from './ProductDetails'
import axios from 'axios' 
import '../App.css'

const Product = () => {

    const [productData, setProductData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let timeOutId;

    async function fetchData () {

        try{
            const response = await axios.get("https://dummyjson.com/products")
            timeOutId = setTimeout ( () => {
                //loading state to become false and now products will show on the screen
                setLoading(false)
                setProductData(response.data.products)
                
            },1000)
            console.log(response)
        }
        catch (error) {
            setError("Failed to fetch products, Try Again!")
        } 
        //finally is needed to show the error state and if I remove it, loading will not work properly.
        finally {
            setLoading(false)
        }
       
    } 

    useEffect ( () => {
        console.log("USE_EFFECT FUNCTION STARTED")
        fetchData()
        console.log("Data has fetched")

        return () => {
            clearTimeout(timeOutId)
            console.log("CLEANUP FUNCTION")
        }
    }, [])
   



  return (
    <div className='main_div'>
    
        { loading  ? 
            (<h1>Loading...</h1>):
            error ? 
                (<h1>{error}</h1>) :
            (   
                productData.map( (product,idx) => {
                    return (
                        <ProductDetails 
                            key={idx}
                            idx={idx}
                            data={product}
                        />
                    )
                }
            ))
        }
    </div>
  )
}

export default Product 