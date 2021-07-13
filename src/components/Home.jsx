import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className ='landing-text' >
                <div id='landing-text'>Welcome to D Barbershop</div>
                <Link to="/appointments" className="btn btn-info btn-lg" role="button">Make an Appointment Today!</Link>
                
            </div>
        )
    }
}
