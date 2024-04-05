import '../App.css'
import {useState} from 'react';
import Signup from './Signup';
import {Link} from "react-router-dom"

export default function Login() {
const [formData, setFormData]=useState({username:"",email:"", password:""})
const handleInputChange =(event)=>{
  const {name,value}=event.target
  console.log(name, value)
setFormData({...formData,[name]:value})

}
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData)
    console.log("submit button")
    setFormData({ username: "", email: "", password: ""});
  }
 

return (
  <div>
    <h1>Login</h1>
    <form className="login-form" onSubmit={handleSubmit}>
    <div>
        {/* <label className="label" htmlFor="email"></label> */}
        <input 
          className="input-field" 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Enter Your Email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div>
        {/* <label className="label" htmlFor="password"  ></label> */}
        <input 
          className="input-field" 
          type="password" 
          id="password" 
          name="password" 
          placeholder='Enter Your Password'
          value={formData.password} // Set the input's value to state
          onChange={handleInputChange} // Update state on change
          required
        />
      </div>

      <div className='submit-create'>
      
      <button type="submit">Login</button>
      
      <p  type="button">
      <Link className="signup" to ="/Signup">Create account.</Link>
      </p>
      </div>

    </form>
    </div>

);
}

