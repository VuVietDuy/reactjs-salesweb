import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <div className="form">
                <label htmlFor="name">Full name</label>
                <input name="name" placeholder="Enter full name..." type="text"></input>
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email"></input>
                <label htmlFor="message">Message</label>
                <textarea
                    rows="6"
                    placeholder="Enter message"
                    name="message"
                ></textarea>
                <button type="submit">Send Message</button>
            </div>
        </div>

    </div>
  )
}

export default Contact