import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import RecipeCatalogue from './pages/RecipeCatalogue'
import RecipeDetails from './pages/RecipeDetails'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>

      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/recipeCatalogue' element={<RecipeCatalogue/>}/>
        
        {/* DYNAMIC ROUTE FOR RECIPE DETAILS */}
        <Route path='/recipeCatalogue/:id' element={<RecipeDetails/>}/>
      </Routes>



    </div>
  )
}

export default App