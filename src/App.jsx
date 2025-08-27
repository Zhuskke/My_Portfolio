import React from 'react'
import { Route, Routes } from 'react-router'
import PortfolioScreen from './screens/PortfolioScreen'

function App() {
  return (
    <Routes>
     <Route path='/' element={<PortfolioScreen/>}/>
    </Routes>
  )
}

export default App
