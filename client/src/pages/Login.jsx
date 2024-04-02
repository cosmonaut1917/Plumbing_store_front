import '../App.css'
import {useState} from 'react';


export default function Login() {
// Define state for each input field
const [name, setName] = useState('');
const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');
const [phone, setPhone] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("submit button")
    setName('');
    setEmail('');
    setMessage('');
  }
 

return (
  <div>
    <h1>Login</h1>
    <form id="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} // Set the input's value to state
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input 
          type="phone" 
          id="phone" 
          name="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
//test