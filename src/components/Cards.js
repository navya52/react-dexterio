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
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high q"
                       
                        label='Residential Projects'
                        path='/services'
                        /><CardItem 
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high q"
                       
                        label='Residential Projects'
                        path='/services'
                        />
                       
                       <CardItem 
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high"
                        label='Business Projects'
                        path='/services'
                        /> 
                          </ul>
                          <ul className="cards__items">
                        <CardItem 
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high"
                        label='Business Projects'
                        path='/services'
                        />  
                        <CardItem 
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high"
                        label='Business Projects'
                        path='/services'
                        />  
                        <CardItem 
                        src="https://momento360.com/e/u/f8b197868cb6455992ea73e52b31337a?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-mode=mp"
                        text="Choose high"
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
