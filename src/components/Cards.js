import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            
            <h1>
                Prefab Interiors
            </h1>
          
            <p>
                Prefabricated sets to your custom needs delivered upon order
            </p>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem 
                        src="./images/1.jpeg"
                        text="Choose high quality, modular solutions like kitchens, wardrobes, TV units, and more."
                       
                        label='Residential Projects'
                        path='/services'
                        />
                       
                        <CardItem 
                        src="./images/11.jpeg"
                        text="Choose high quality, modular solutions like kitchens, wardrobes, TV units, and more."
                        label='Business Projects'
                        path='/services'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards
