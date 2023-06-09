import React, { Component } from 'react'
import { BsFillBellFill } from "react-icons/bs";


export default class Header extends Component {


    render() {
        return (
            <div className='navbar mb-4 bg-light p-3 fs-6'>
                <a href="/" className='text-decoration-none fs-5 pl-4 font-italic '>LOGO</a>
                <button className='btn '>
                    <BsFillBellFill className='text-danger-emphasis'/>
                </button>
            </div>
        )
    }
}
