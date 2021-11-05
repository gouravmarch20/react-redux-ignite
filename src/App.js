import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from './actions/gamesAction'
import dotenv from 'dotenv'
dotenv.config()
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames)
  }, [])
  return (
    <div>
      <h1>ignite</h1>
    </div>
  )
}

export default App
