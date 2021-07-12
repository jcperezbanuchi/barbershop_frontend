import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './MainNavigation.css'


export default class MainNavigation extends Component {
    render() {
        return (
            <header className="main-navigation">
                <div className="main-navigation__logo">
                    <h1>BarberShop</h1>

                </div>
                <nav className='main-navigation__items'>
                    <ul>
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li><NavLink to='/appointments'>Make An Appointment</NavLink></li>
                        <li><NavLink to='/ourservices'>Our Services</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>


                    </ul>
                </nav>
                
            </header>
        )
    }
}
