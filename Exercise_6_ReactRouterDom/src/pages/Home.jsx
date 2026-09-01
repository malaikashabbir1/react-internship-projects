import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
 <div className="home">
  <div className="home-content">
    <h2>Welcome to The Recipe House</h2>

    <p>
      Discover delicious recipes from around the world
      and bring amazing flavors to your kitchen.
    </p>

    <h2>Explore Our Recipes</h2>

    <p>
      From quick and easy meals to traditional dishes,
      find the perfect recipe for every occasion.
    </p>

    <Link to='/recipeCatalogue'>
      <button>
        Recipes
      </button>
    </Link>
    
  </div>
</div>
  )
}

export default Home