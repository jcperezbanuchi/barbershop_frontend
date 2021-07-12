import React, { Component } from 'react'
import './ourservice.css'
export default class OurServices extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-6">
                 <h2 className="our-services">Services</h2>
                    <p>A hair cut is just a hair cut, right? Wrong! At D' Barbershop, a hair cut is ritual, a nostalgic experience harkening back to a simpler day when men gathered at the corner barbershop to discuss everything from business, to sports, to current events. Our barbers provide both traditional, short hair cuts, as well as contemporary and trendy styles.</p>
                    <ul>
                        <li>Quality Mens Haircuts and Hairstyles</li>
                        <li>Discount for Boys (8th grade and below)</li>
                        <li>Fire, Military, Police and Senior Discounts</li>
                        <li>Hot Lather Straight-Razor Shaves</li>
                        <li>Mens Facials and Facial Massages</li>
                        <li>Beard and Moustache Trims</li>
                    </ul>  
                </div>
            </div>
        )
    }
}
