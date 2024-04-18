import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Contact from './Contact'
import Footer from './components/Footer'
import FeatureProducts from './components/FeatureProducts'
 

function Home() {
  let data="SHOPPING STORE"
  return (
    <div>
       <HeroSection title={data}/>
       <Services/>
       <FeatureProducts/>
       <Trusted/>
       <Contact/>
    </div>
  )
}

export default Home