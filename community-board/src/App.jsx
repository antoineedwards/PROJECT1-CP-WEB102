import { useState } from 'react'
import React from 'react'
import GameList from"./components/gameList"
import Board from './components/board'
import Footer from './components/footer'
import './App.css'

function App() {
  return (
    <>
      <Board/>
      <GameList/>
      <Footer/>
    </>
  )
}

export default App
