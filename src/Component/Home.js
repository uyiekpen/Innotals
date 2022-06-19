import React from 'react'
import Blog from './Blog'
import Body from './Body'
import Contact from './Contact'
import Footer from './Footer'
import OurWhy from './OurWhy'
import SignUpComp from './SignUpComp'
import Slider from './Slider'
import Values from './Values'

const Home = () => {
  return (
    <div>
      <Body/>
      <Values/>
      <OurWhy/>
      <Blog/>
      <SignUpComp/>
      <Footer/>
    </div>
  )
}

export default Home
