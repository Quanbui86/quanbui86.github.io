import React from 'react';
import {Link, NavLink} from 'react-router-dom'
export default function HomePage(){
    return (
        <>
            <h1>Home Page</h1>
            <Link to='register'>Go to register</Link>
            <Link to='login'>Go to Login</Link>
        </>
    )
}