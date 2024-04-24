import { HeroContent } from '@/components/Body/HeroContent'
import { Infobanner } from '@/components/Body/Infobanner'
import { Navbar } from '@/components/navbar/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroContent/>
        <Infobanner/>
    </div>

  )
}

export default Home