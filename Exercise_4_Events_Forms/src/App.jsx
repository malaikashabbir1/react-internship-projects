import React, { useState } from 'react'
import Registration from './components/Registration'


const App = () => {

  const [email, setEmail] = useState("")
  const [passworrd, setPassworrd] = useState("")

  function handleEmail (e) {
    console.log("Email: ", e.target.value)
  }

  function handlePassword (e) {
    console.log("Password: ", e.target.value)
  }

  function submit () {
    console.log("Form is submitted.") 
  }

  return (
    <div>
      <form onSubmit={submit}>
        
        <h1>Login Form</h1>
        <label> Email
          <input type="email" placeholder='Enter Email' value={email} 
            onChange={(e) => {
              handleEmail(e)
              setEmail(e.target.value)}}/>
        </label>

        <label> Password
          <input type="password" placeholder='Enter Password' value={passworrd} 
            onChange={(e) => {
              handlePassword(e)
              setPassworrd(e.target.value)}}/>
        </label>

        <button onClick={ () => {
            setEmail("");
            setPassworrd("");
          }} type='submit' > 
            SUBMIT 
        </button>

      </form>


      <br/> <br/><br/><br/>
      <h1>Registration Form</h1>
      <Registration/>
    </div>
  )
}

export default App