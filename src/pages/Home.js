import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/gamesAction'
//Components
import GameDetail from '../components/GameDetail'
import Game from '../components/Game'
//Styling and Animation
import styled from 'styled-components'
// import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
// import { useLocation } from 'react-router-dom'
// import { fadeIn } from '../animations'
const Home = () => {
  //get the current location
  //   const location = useLocation()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
//   const { popular } = useSelector(
//     state => state.games
//   )
  return <div></div>
}

export default Home
