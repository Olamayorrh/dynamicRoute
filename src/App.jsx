import { useState,useEffect } from 'react'

import './App.css'
import ProductList from './Components/ProductList/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Display from './Components/Display/Display'

function App() {


  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route path='/' element={<ProductList  />} />
        <Route path='/product/:productid' element={<Display />} />
        </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
