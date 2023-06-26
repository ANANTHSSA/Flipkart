import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initialState, stateReducer } from './Reducer'
import { stateContext } from '../src/stateContext'
import Component from './Component/Component'
import Fav from '../src/Favpage/Fav'
import Details from './CardDetails/Details'
import Addcard from './Addcard/Card'
import Headphones from './Products/Headphones'
import Buy from './BuyNow/Buy'
import Printers from './Products/Printer'
import Shaver from './Products/Shaver'
import Powerbank from './Products/Powerbank'
import Bookmeterials from './Products/Booksmeterials'


const Router = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log(state);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Component />}></Route>
          <Route path='/headphone' element={<Headphones />}></Route>
          <Route path='/printer' element={<Printers />}></Route>
          <Route path='/shaver' element={<Shaver />}></Route>
          <Route path='/powerbank' element={<Powerbank />}></Route>
          <Route path='/bookmeterials' element={<Bookmeterials />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
          <Route path='/details' element={<Details />}></Route>
          <Route path='/addcard' element={<Addcard />}></Route>
          <Route path='/buynow' element={<Buy />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
          {/* <Route path='/Login' element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Router
