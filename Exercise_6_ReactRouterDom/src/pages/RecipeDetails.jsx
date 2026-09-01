import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../app.css'

const RecipeDetails = () => {

    //it is used to extract the ID of the URL
    //Dynamic part of URL ko le ga or yhn pai dega
    const {id} = useParams()

    const [singleRecipeData, setsingleRecipeData] = useState({})

    async function fetchRecipeData() {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
        setsingleRecipeData(response.data)
    }

    useEffect( () => {
        fetchRecipeData()

    },[id] )


  return (
    <div className="recipe-details">

        <img
            className="recipe-image"
            src={singleRecipeData.image}
            alt="photo"
        />  

        <h2 className="recipe-title">
            {singleRecipeData.name}
        </h2>

        <h3 className="recipe-cuisine">
            Cuisine: {singleRecipeData.cuisine}
        </h3>

        <h4 className="recipe-difficulty">
            Difficulty Level: {singleRecipeData.difficulty}
        </h4>

        <h5 className="recipe-meal">
            Meal Type: {singleRecipeData.mealType}
        </h5>

        <div className="recipe-section">
            <h4>Ingredients:</h4>

            <ul className="ingredients-list">
            {
                //"If ingredients exists, run .map(). If it doesn't exist yet, just don't run it."
                singleRecipeData.ingredients?.map((ingredient, idx) => {
                    return (
                        <li key={idx}>{ingredient}</li>
                    )
                })
            }
            </ul>
        </div>

        <div className="recipe-section">
            <h4>Instructions:</h4>
            <p className="instructions">
                {singleRecipeData.instructions}
            </p>
        </div>

        </div>
    )
}

export default RecipeDetails