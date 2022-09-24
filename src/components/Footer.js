import React from 'react'
import '../styles/Footer.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <i class="fa-brands fa-instagram svg"></i>
        <i class="fa-brands fa-twitter svg"></i>
        <i class="fa-brands fa-square-facebook svg"></i>
        <i class="fa-brands fa-linkedin svg"></i>
            <p>  &copy; 2022 vuvietduy1234@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer