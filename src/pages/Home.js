import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
//Components
import GameDetail from '../components/GameDetail'
import Game from '../components/Game'
//Styling and Animation
import styled from 'styled-components'
import { motion } from "framer-motion"
import { useLocation } from 'react-router-dom'
// import { fadeIn } from '../animations'
const Home = () => {
  //get the current location
  //   const location = useLocation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])
  // acess state
  const { popular, newGames, upcoming } = useSelector(state => state.games)

  // console.log(popular)
  return (
    <div>
    <h1>hit</h1>
    <h1>hit</h1>
      {/* <GameList></GameList> */}
    </div>
  )
}
// const GameList = styled(motion.div)`
//   padding: 0rem 5rem;
//   h2 {
//     padding: 5rem 0rem;
//   }
// `
export default Home
