import React from 'react'
import Card from './Card'
import Card2 from './Card2'
import Product from './Product'
import Baby from './Array_prop'
import Array2 from './Array2'
import Child from './Child'
import './app.css'

const App = () => {

  const baby = [ "Hoorain", 2.5 , "Ireland" ] 
  const names= ["Zaroon", "Shehriyar", "Rahim", "Azlan"]

  const users = [
  {
    name: "Ali",
    age: 22,
    degree: "BS Software Engineering",
    university: "UAF",
    city: "Faisalabad"
  },
  {
    name: "Sara",
    age: 24,
    degree: "BS Computer Science",
    university: "FAST-NUCES",
    city: "Lahore"
  },
  {
    name: "Hamza",
    age: 23,
    degree: "BS Information Technology",
    university: "University of Punjab",
    city: "Lahore"
  },
  {
    name: "Ayesha",
    age: 21,
    degree: "BS Data Science",
    university: "COMSATS University",
    city: "Islamabad"
  },
  {
    name: "Usman",
    age: 25,
    degree: "BS Computer Science",
    university: "UMT",
    city: "Lahore"
  }
];

  const products = [
  {
    productName: "Laptop",
    price: 85000,
    category: "Electronics",
    inStock: true
  },
  {
    productName: "Backpack",
    price: 3500,
    category: "Accessories",
    inStock: false
  }
];

  const babies = ["Arzish", "Arfa", "Danish", "Shaheer", "Mirha"];
  const info =["Shaheer", 9.5, "KFC", "Rawalpindi" ]


  function  sayHello( ) {
    alert("HEY GUYS!!!");
  }

  function add(a,b) {
    console.log(a+b);
  }
  

  return (
    
    <>
    <div className='main_div'>

      { users.map( (user,idx) => {
        return (
          <Card
            key= {idx}
            name = {user.name}
            age = {user.age}
            degree = {user.degree}
            university = {user.university}
            city = {user.city}  
          />
          )
        }) 
      }
    </div>


      <br />
      <br />
      <br />

      <h1>Objects PROPS DESTRUCTURING</h1>

      <br />
      <br />
      <br />

    <div className='main_div'>
       { users.map( (user,idx) => {
        return (

          <Card2
            //key={idx}  → React: "This is item 0"
            key = {idx}

            //idx={idx}  → Card2: "Here is the index 0"
            idx = {idx}

            data = {user}
          />
        )
        }) 
      }
    </div>
    
      <br />
      <br />
      <br />
      
    {/* ____________PRODUCT PROP ____________ */}
    <div className='main_div'>
      
     { products.map( (product,idx) => {
        return (
          <Product
            key = {idx}
            idx ={idx}
            product_data = {product}
            />
          )
        })
      }

    </div>

      <br />
      <br />
      <br />

      <h1>Array PROPS DESTRUCTURING</h1>

      <br />
      <br />
      <br />
    <div>
      <Baby
        data = {baby}
        data2 = {names}
      />
    </div>


      <div>
        <Array2
          list = {babies}
          Shaheer = {info}/>
      </div>

      <br /> <br />  <br />

      <h1> USAGE OF PASSING FUNCTIONS AS PROPS </h1>
      <br /> <br /> <br />

      <div>
        <button onClick = {sayHello}>
          SUBMIT BUTTON
        </button>
      </div>

      <div>
        <Child
          handleClick = {sayHello}
          addition ={add}
        />
      </div>

    
    </>
  )
}

export default App