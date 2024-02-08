import React, { useState } from 'react';
import "./Login.css"
const Login = () => {
    const loginData = useState({
        username: '',
        email: '',
        password: '',
        gender: '',
        skills: '',
        birthday: '',
        preferredLocation: [],
    })
    return <div className='login-container'>
        <h1>Welcome to My Regsitraion</h1>
        <div className="login-form">
            <div className="input-container">
                <label htmlFor="username">User Name</label>
                <input name="username" type="text" />
            </div>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input name="password" type="password" />
            </div>
            <div className="input-container">
                <label htmlFor="selectLocation">Select Location</label>
                <select name="selectLocation">
                    <option value="">Select Preferred City</option>
                    <option value="pune"><input type="checkbox" />Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="bengluru">Bengluru</option>
                </select>
            </div>
        </div>
        <button className='register'>Register!!!</button>
    </div>
}

export default Login