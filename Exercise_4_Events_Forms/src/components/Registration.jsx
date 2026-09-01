import React, { useState } from 'react'


const Registration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [country, setCountry] = useState("")
    const [error, setError] = useState({    })
    

    // prev gets the latest error object, while ...prev keeps the other errors.
    //functional state updates help you preserve the different errors while you're updating the error object.
    // here it helps to show 3 errors if they are present in the form.
    //prev → gets the existing error state
    //...prev → keeps the existing errors
    //nameError: "..." → adds/updates one error

    function handleSubmit (e) {
        e.preventDefault();
        console.log("Form is submitted.")

        const finalErrors = {
            nameError: !name ? "Name is required" : "",
            passwordError: password.length<3 ? "Password must have 3 letters" : "",
            confirmPasswordError: confirmPassword !== password ? "Password must be same" : ""
        }

        setError(finalErrors)





















        // if(!name) {
        //     setError( (prev) => (
        //         {...prev, nameError: "Name is required"}
        //     ))
        // }else {
        //     setError(prev => ({
        //     ...prev,
        //     nameError: ""
        // }));
        // }

        // if(confirmPassword !== password ) {
        //     setError( (prev) => (
        //         {...prev, confirmPasswordError: "Password must be same"}
        //     ))
        // } else {
        //     setError(prev => ({
        //     ...prev,
        //     confirmPasswordError: ""
        // }));
        // }

        // if(password.length < 3) {

        //     setError( (prev) => (
        //         {...prev, passwordError: "Password must have 3 letters."}
        //     ))
        // }else {
        //     setError(prev => ({
        //     ...prev,
        //     passwordError: ""
        // }));
        // }

    }

  return (

    <form onSubmit={handleSubmit}>
        <div>

        <label> Name
          <input type="text" placeholder='Enter Name' value={name}  
            onChange={ (e) => {
                setName(e.target.value)
            }}/>
            {error.nameError && <p>{error.nameError}</p>}
        </label>

        <br/>

        
        <label> Email
          <input type="email" placeholder='Enter Email' value={email}  required 
            onChange={ (e) => {
                setEmail(e.target.value);
            }}/>
        </label>
        <br/>

        
        <label> Password
          <input type="password" placeholder='Enter Password' value={password}  required 
            onChange={ (e) => {
                setPassword(e.target.value);
            }}/>
            {error.passwordError && <p>{error.passwordError}</p>}
        </label>
        <br/>

        
        <label> Confirm Password
          <input type="password" placeholder='Enter Confirm Password' value={confirmPassword}  required 
            onChange={ (e) => {
                setConfirmPassword(e.target.value);
            }}/>
            {error.confirmPasswordError && <p>{error.confirmPasswordError}</p>}
            
        </label>
        <br/>

        <label> Select your Country
            <select  value={country} 
                onChange={(e) => {
                    setCountry(e.target.value)
                }} >
                <option value=""> Select</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Ireland">Ireland</option>
                <option value="Switerzland">Switerzland</option>

            </select>
        </label>

        <button type="submit">Submit</button>


    </div>

    </form>
  )
}

export default Registration