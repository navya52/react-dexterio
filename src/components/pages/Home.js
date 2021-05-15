import React from 'react'
import'../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer';

function Home () {
    return(
        <>
        <HeroSection />
        <Cards />
        <img src="./images/x.jpg" style={{maxWidth:"100%"}} />
        <img src="./images/y.jpg" style={{maxWidth:"100%"}} />
        <img src="./images/z.jpg" style={{maxWidth:"100%"}} />
        <Footer />
        </>
    )
   
}

export default Home;