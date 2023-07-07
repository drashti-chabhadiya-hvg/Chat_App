import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Register } from './Pages/Register'
import { Login } from './Pages/Login'
import { Chat } from './Pages/Chat'
import { SetAvatar } from './Pages/SetAvatar'

export const App = () => {
  return (
   < BrowserRouter>
   <Routes>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/setavatar' element={<SetAvatar/>}/>
    <Route exact path='/' element={<Chat/>}/>
   </Routes>
   </BrowserRouter>
  )
}
