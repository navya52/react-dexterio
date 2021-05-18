import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/movie.mp4' autoPlay loop muted />
            <h1><span> </span></h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Register
                </Button>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Portfolio
                </Button>
            </div>
            
            
        </div>
    )
}

export default HeroSection
