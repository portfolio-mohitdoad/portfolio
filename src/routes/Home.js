import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Stay from '../components/Stay'
import ClintCard from '../components/ClintCard'
import Details from '../components/Details'
import Services from '../components/Services'
import Experiences from '../components/Experiences'
import User from '../components/User'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <Details/>
      <Services/>
      <Experiences/>
      <User/>
      <ClintCard/>
      {/* <Stay/> */}
      <Footer/>
    </div>
  )
}

export default Home
