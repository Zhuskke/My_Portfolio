import React from 'react'
import { Route, Routes } from 'react-router'
import PortfolioScreen from './screens/PortfolioScreen'
import Type from './screens/Type'

function App() {
  return (
    <Routes>
     <Route path='/' element={<PortfolioScreen/>}/>
     {/* <Route path='/' element={<Type/>}/> */}
    </Routes>
  )
}

export default App
