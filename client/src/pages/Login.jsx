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
    <form id="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="username" 
          value={formData.username} // Set the input's value to state
          onChange={handleInputChange} // Update state on change
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
 



      <div>
        <button type="submit">Submit</button>
      </div>
      <button  type="button">
      <Link to ="/Signup">Create account.</Link>
      </button>
    </form>
  </div>
);
}

