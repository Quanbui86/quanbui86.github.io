import React from 'react';
import { Link } from 'react-router-dom';
export default function Register(){
    return (
        <>
            <h1>Register form</h1>
            <Link to='/login'>Login page</Link>
            <button>Register</button>
        </>
    )
}