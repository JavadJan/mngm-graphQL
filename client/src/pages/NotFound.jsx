import React from 'react'
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <FaExclamationTriangle className='text-danger mb-4 text-12' />
            <h1 className='p-3'>404</h1>
            <h3 >this page not found!</h3>
            <Link className='btn btn-danger' to='/'>Go Back</Link>
        </div>
    )
}
