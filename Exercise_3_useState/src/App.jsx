import React, { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import './app.css'

const App = () => {

 const [counter, setCounter] = useState(0)
 const [todo, setTodo] = useState([])
 const [input, setInput] = useState("")
 const [completed, setCompleted] = useState([])
 const [inComplete, setInComplete] = useState([])


  return (
    <div>

    
        <ShoppingCart/>

        <br /><br /><br />
        <br /><br /><br />

      <h1>COUNTER</h1>
      <h2>{counter}</h2>

      <button onClick={ () => {
        setCounter((counter) => { return (counter+1)});
      }}> INCREAMENT</button>

       <button onClick={ () => {
        setCounter( (counter) => { return (counter-1)});
      }}> Decreament </button>


       <button onClick={ () => {
         setCounter(0);
      }}> RESET </button>



      {/* input → current value you just typed
          submittedInput → state that React will update after the function finishes */}

      <h1>TODO APP</h1>
      <form onSubmit={ (e) => { e.preventDefault() }} >

        {/* //______________ INPUT _______________ */}
        <input type="text" placeholder='Write your Task'  onChange={ (e) => {
          setInput(e.target.value) }} value={input}/>

        {/* //______________ ADD BUTTON _______________ */}
        <button 
        onClick={ () => {

          // ADDING TODO ARRAY AND INCOMPLETE ARRAY
          setTodo([...todo,input])
          setInComplete([...inComplete,input])
          console.log("Task has been added",todo)
          setInput("");
        }}
        >Add Task</button>

      </form>

 

        { todo.map( (t,idx) => {
          return(
            <div key={idx}>
              <p>
              <input
                type="checkbox"
                //CHECK THE VALUE, IS IT PRESENT IN THE COMPLETED ARRAY
                checked={completed.includes(t)}

                onChange={(e) => {

                      if(completed.includes(todo[idx]) === false ) {
                        if(e.target.checked === true) {
                          setCompleted([...completed, todo[idx]])
                          // adding in one and deleting from the other 
                          //HERE WE COMPARING 2 VALUES 
                          setInComplete(inComplete.filter( (item) => item !== t))
                        }
                      }
                        
                      else {
                          if(e.target.checked === false) {
                            setInComplete([...inComplete, todo[idx]])
                            //HERE WE COMPARING 2 VALUES 
                            //1 is the item of the completed array's value and other one is the value of todoList 
                            // adding in one and deleting from the other 
                            setCompleted(completed.filter( (item) => item !== t))
                          }
                        }
                      }  
                    }
              />

              <b>{idx+1}: </b> {t}

                <button onClick={ () => {

                  //Deletion is taken place through indexing
                  setTodo(todo.filter( (item,index) => index !== idx))

                  // _______DELETION FROM both Arrays __________
                  //Item is the completedArray's value and t is the value of the todo
                  setInComplete(inComplete.filter( (item) => item !== t))
                  setCompleted(completed.filter( (item) => item !== t))
                  console.log("Task has been Deleted", todo)
                  }}>Delete Task</button> 

              
               
              </p>

            </div>
          )
        })}

        <div>
          <p>INCOMPLETE: {inComplete}</p>
          <p>COMPLETED: {completed}</p>
        </div>


    </div>

  )
}

export default App