import React from 'react'
import {Link } from 'react-router-dom'
import BanerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BanerImage})`}}>
        <div className="headerContainer" >
            <h1>Duy's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
                <button>ODER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home