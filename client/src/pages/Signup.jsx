import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import '../App.css'

function Signup() {

const [formData, setFormData] = useState({ username: "", email: "", password: "", phone: "" });
const [passwordConfirm, setPasswordConfirm] = useState('')
const [validated, setValidated] = useState(false)

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log('name', name, 'value', value)

      
    };
const validatePassword = (event) => {
    event.preventDefault()
    setPasswordConfirm(event.target.value)
  
}


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submit button clicked", formData);
        if (formData.password === passwordConfirm) {
           setValidated(true)
        }
        try {
            const { data } = await addUser({
                variables: { ...formData }
            });
            console.log("Form Data:", data); // Optional: Handle the response data as needed

            // Reset form data after successful submission
            setFormData({ username: "", email: "", password: "", phone: "" });
            window.location.assign('/Store')
            // Optional: Redirect or perform further actions upon success
            // Auth.login(data.addUser.token); // Assuming your mutation returns a token for authentication
        } catch (e) {
            console.error("Issue adding user info to database", e);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    {/* <label  htmlFor="username">First Name:</label> */}
                    <input
                        className="input-field"
                        placeholder='Create a User Name'
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div>
                    {/* <label className="label" htmlFor="email">Email:</label> */}
                    <input
                        className="input-field"
                        placeholder='Enter Your Email'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {/* <label className="label" htmlFor="phone">Phone:</label> */}
                    <input
                        className="input-field"
                        placeholder='Phone Number'
                        type="phone"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {/* <label className="label" htmlFor="password">Password:</label> */}
                    <input
                        className="input-field"
                        placeholder='Create a Password'
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {/* <label className="label" htmlFor="password">Password:</label> */}
                    <input
                        className="input-field"
                        placeholder='Confirm your Password'
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={validatePassword}
                        required
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
                {error && <p>Error submitting form</p>}
            </form>
        </div>
    );
}

export default Signup;
