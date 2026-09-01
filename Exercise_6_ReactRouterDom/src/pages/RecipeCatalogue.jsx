import React, { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard  from '../components/RecipeCard'
import { Link } from 'react-router-dom'
import '../app.css'

const RecipeCatalogue = () => {

    const [recipeData , setRecipeData] = useState([])

    async function fetchData() {
        const response = await axios.get("https://dummyjson.com/recipes?")
        console.log("RECIPES: ",response)
        setRecipeData(response.data.recipes)
    }


    useEffect(() => {
        fetchData();
    },[])




  return (
    <div className='main_div'>
            {
                recipeData.map( (recipe,idx) => {
                    return (    

                    //wrapping in the Link Tag, for making it clickable and for making it navigavtable 
                    <Link to={`/recipeCatalogue/${recipe.id}`}>
                        <RecipeCard
                            key={idx}
                            idx={idx}
                            data = {recipe} />
                    </Link>
                    )
                })
            }
    </div>
  )
}

export default RecipeCatalogue