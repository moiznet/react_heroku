import React from 'react'
import { Link } from 'react-router-dom'
const Links = () => (

  <div>
    <h1>Noticias</h1>
    <ul>
    <li>  <Link to='/noticia'>  <h2> Noticia 1 </h2></Link> </li>
    <li> <Link to='/noticia'>  <h2> Noticia 2 </h2></Link> </li>
    </ul>
  </div>
)

export default Links




