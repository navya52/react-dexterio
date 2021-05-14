import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/movie.mp4' autoPlay loop muted />
      
           <div className="logo"><img src='./images/logo.png' /></div> 
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Register
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    Book a demo <i className='far fa-play-cirlce'></i>
                </Button>
            </div>
            
            
        </div>
    )
}

export default HeroSection
