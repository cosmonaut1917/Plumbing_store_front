import '../App.css'
import {useState} from 'react';
import Signup from './Signup';
import {Link} from "react-router-dom"
import AuthService from '../utils/auth'

export default function Login() {
const [formData, setFormData]=useState({username:"",email:"", password:""})
const handleInputChange =(event)=>{
  const {name,value}=event.target
  console.log(name, value)
setFormData({...formData,[name]:value})

}
const handleSubmit = async(event) =>{
    event.preventDefault();

    try {
      const response = await AuthService.login(formData.username); // loginUser is a function that sends credentials to the server
      console.log(response)
    } catch (error) {
      console.error('Login error:', error);
    }

    console.log(formData)
    console.log("submit button")
    setFormData({ username: "", email: "", password: ""});
}

const loggedIn = AuthService.loggedIn()
if (loggedIn){

} 
return (
  <div>
    <h1>{loggedIn ? `Welcome ${AuthService.getToken()}...` : "Login"}</h1>
    <form className="login-form" onSubmit={handleSubmit}>
    
    {!loggedIn && (
        <>
          <div>
            <input 
              className="input-field" 
              type="text" 
              id="username" 
              name="username" 
              placeholder='Enter Your Email'
              value={formData.username} // Adjusted from formData.user to formData.username
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <input 
              className="input-field" 
              type="password" 
              id="password" 
              name="password" 
              placeholder='Enter Your Password'
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </>
      )}

      <div className='submit-create'>
      
      
      <button type="submit">{loggedIn ? `Logout` : "Login"}</button>
      
      {!loggedIn && (
      <p  type="button">
      <Link className="signup" to ="/Signup">Create account.</Link>
      </p>
      )}

      
      </div>

    </form>
    </div>

);
}

