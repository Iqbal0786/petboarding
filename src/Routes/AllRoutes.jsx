import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateEntity from '../components/CreateEntity'
import EntityPage from '../components/EntityPage'
import Home from '../components/Home'

export default function AllRoutes() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/listing/:id' element={<EntityPage/>}/>
     <Route path='/listing/create' element={<CreateEntity/>}/>
    </Routes>
    </>
  )
}
