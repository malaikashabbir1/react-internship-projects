import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <h2>The Recipe House</h2>
            <div>

                <Link to='/'>Home</Link>
                <Link to= '/recipeCatalogue'> RecipeCatalogue </Link>
                <Link to='/about'> About </Link>
                <Link to= '/contact'> Contact </Link>
                
                
            </div>
        </div>
    </div>
  )
}

export default Navbar