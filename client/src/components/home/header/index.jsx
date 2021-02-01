import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'
import logo from './logo192.png'

const Header = () => {
    return(
        <div className='header-container'>
            <div><img className='logo' src={logo} alt="logo"/></div>
            <div className='navbar'>
                <Link className='nav-item' to='/about'>
                    Product
                </Link>
                <Link className='nav-item' to='/about'>
                    Pricing
                </Link>
                <Link className='nav-item' to='/about'>
                    Customer
                </Link>
                <Link className='nav-item' to='/about'>
                    About
                </Link>
            </div>
            <div>
                <Link className='nav-item nav-btn' to='/about'>
                    Login
                </Link>
                <Link className='nav-item nav-btn' to='/about'>
                    Signup
                </Link>
            </div>
        </div>
    )
}

export default Header