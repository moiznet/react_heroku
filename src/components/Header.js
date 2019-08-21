import React from 'react'
import { Link } from 'react-router-dom'
import FacebookLogin1 from './comp_facebook_login.js';


window.user= ""; 
const Header = () => (


  <header>
  <FacebookLogin1/>
    <nav>
      <ul>
        <li><Link to='/'> {window.user} Home</Link></li>
        <li><Link to='/links'>links</Link></li>
        
      </ul>
    </nav> 
    
  </header> 

)

export default Header