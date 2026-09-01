import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import Card from './Card'
import '../App.css'


const SearchEngine = () => {


    const [searchText, setSearchText] = useState("")
    const [apiData, setApiData] = useState([])

    async function  fetchData () {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchText}`)
        setApiData(response.data.products)

        //cannot loop over the apiData becuase it doesn't update immediately
        // response.data.products.map( (product) => {
        //     console.log(product.title)
        // })   
    }

   

    useEffect ( () => {
        if (searchText.length > 0) {
        fetchData()
    }
    }, [searchText])

  return (
    <div>
        <label>  Search 
            <input type='text' value={searchText} placeholder='Type here' 
                onChange={ (e) => {
                    setSearchText(e.target.value)
                }}
            />
        </label>

        {/* 
            condition ? 
            IF TRUE
            :
                secondCondition ?
                IF TRUE
                :
                IF FALSE 
        */}

        <div>  
            {searchText.length === 0 ? 
                (<h3>Search for a Product</h3 >) : 
                 apiData.length === 0 ?
                ( <h3>No Search Matches</h3> ) :
                // if there are products then mapping over them 
                ( apiData.map( (product,idx) => {

                    return <div key={idx} className="main_div"> 
                            <Card data={product}/>
                        </div>
                    })
                )
        }

        </div>
    </div>
  )

}
export default SearchEngine