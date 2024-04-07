import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useLazyQuery, useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import AuthService from '../utils/auth';
// import other needed components and styles

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loggedIn, setIsLoggedIn] = useState (false)
  const [isAdmin, setIsAdmin] = useState (false)
  const [getUser, { loading, data, error }] = useLazyQuery(QUERY_SINGLE_USER, {
    fetchPolicy: "no-cache" // Use this policy to prevent using cached result
  });
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await getUser({ variables: { username: formData.username } });
  };

  const handleLogout = async (event) =>{
    event.preventDefault()
    AuthService.logout()
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

 

  useEffect(() => {
    // Check if data is available and there's no error
    if (data && !loading && !error) {
      console.log("Queried user data:", data.user);
      // Check if the user data is present
      if (data.user) {
        // Construct the object with the necessary user information
        const loginDetails = {
          user_name: data.user.username,
          isadmin: data.user.admin
        };
  
        // Call AuthService.login with the constructed object
        AuthService.login(data.user.username, data.user.admin);
      }
    }
  }, [data, loading, error]);
  

  useEffect(()=>{
    const loggedIn = AuthService.loggedIn();
    setIsLoggedIn(loggedIn)
  },[data])
 
  useEffect(()=>{
    const isAdmin = AuthService.isAdmin();
    setIsAdmin(isAdmin)
  },[data])

return (
  <div>
    <h1>{loggedIn ? `Welcome ${AuthService.getToken()}...` : "Login"}</h1>
    <form className="login-form" onSubmit={loggedIn ? handleLogout : handleSubmit}>
    
    {!loggedIn && (
        <>
          <div>
            <input 
              className="input-field" 
              type="text" 
              id="username" 
              name="username" 
              placeholder='Enter Your Username'
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

    {isAdmin && (
      <p  type="button">
        <hr />
      <Link className="clients" to ="/Users">View Clients</Link>
      </p>
      )}

    </form>
    </div>

);
}

