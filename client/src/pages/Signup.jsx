import '../App.css'
import {useState} from 'react';
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
function Signup() {
// Define state for each input field
const [formData, setFormData]=useState({username:"",email:"", password:"", phone: ""})

 // Handles updating part of the state related to the input fields
 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
};  

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit button", formData)
    setFormData({ username: "", email: "", password: "",  phone: ""});
  }
 

return (
  <div>
    <h1>Signup</h1>
    <form id="signup-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name:</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleChange}
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
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input 
          type="phone" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>



      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}

export default Signup