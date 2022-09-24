import React,{useState} from 'react'
import Logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)
  const toggleNavber = () => {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo}></img>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <button onClick={toggleNavber}>
          <i class="fa-solid fa-bars bar"></i>
        </button>
      </div>

    </div>
  )
}

export default Navbar