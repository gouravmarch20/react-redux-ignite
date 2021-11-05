import React, { useEffect } from 'react'
import dotenv from 'dotenv'
//Components and pages
import Home from './pages/Home'
import Nav from './components/Nav'
//Styles
import GlobalStyles from './components/GlobalStyles'
//Router
import { Route } from 'react-router-dom'
dotenv.config()
const App = () => {
  return (
    <div>
      {/* <Route path={['/game/:id', '/']}> */}
        <Home />
        <h3>kk kio</h3>
      {/* </Route> */}
    </div>
  )
}

export default App
