import React from 'react'
import SignUp from '../pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Topics from '../pages/Topics'
import TopicDetail from '../pages/TopicDetail'

const AppRoute = () => {
  return (
    <>
   <Routes>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/landingpage' element={<LandingPage/>}/>
     <Route path='/topics' element={<Topics/>}/>
     <Route path='/topics/:topicId' element={<TopicDetail/>}/>


   </Routes>
    </>
  )
}

export default AppRoute