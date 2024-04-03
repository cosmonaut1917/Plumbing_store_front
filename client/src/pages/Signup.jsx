import '../App.css'
import {useState} from 'react';
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
function Signup() {
// Define state for each input field
const [formData, setFormData]=useState({username:"",email:"", password:""})

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit button")
    setName('');
    setEmail('');
    setMessage('');
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
          value={formData.username} // Set the input's value to state
          onChange={(e) => setName(e.target.value)} // Update state on change
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label htmlFor="phone">Phone:</label>
        <input 
          type="phone" 
          id="phone" 
          name="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div> */}



      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
);
}
//test
export default Signup