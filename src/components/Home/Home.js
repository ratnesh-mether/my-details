import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <>
        <h1>Questions</h1>
        <ol>
            <li><Link to="/question-1">Create a Form that accepts user details and shows as cards (CRUD)</Link></li>
            <li><Link to="/question-2">Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages.</Link></li>
            <li><Link to="/question-3">Create a searchable input which shows a dropdown, show selected values in pill shape inside input.</Link></li>
        </ol>

    </>
}

export default Home