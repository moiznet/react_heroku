import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Links from '../views/Links'
import noticia from '../views/noticia'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/links' component={Links}/>
      <Route path='/noticia' component={noticia}/>
 
    </Switch>
  </main>
)

export default Main
