import React from 'react'

import { Link } from 'react-router-dom'
 
function CardItem(props) {
    return (
        <>


{/* 
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" 
                    data-category={props.label}>
                        <img src={props.src} alt="Picture" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                       <h3 className="cards__item__info">{props.label}
                           </h3> <h5 className="cards__item__info">
                            {props.text}<br/><br/>
                          <p style={{color:"blueviolet", textAlign:"left"}}>Tell me more  <i className="fas fa-arrow-right"></i></p>  
                        </h5>

                    </div>
                </Link>



 */}

            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" 
                    data-category={props.label}></figure>
                       <iframe  src={props.src} ></iframe>
                   
                       <div className="cards__item__info">
                       <h3 className="cards__item__info">{props.label}
                           </h3> <h5 className="cards__item__info">
                            {props.text}<br/><br/>
                          <p style={{color:"blueviolet", textAlign:"left"}}>Tell me more  <i className="fas fa-arrow-right"></i></p>  
                        </h5>

                    </div>
                </Link>

            </li>
        </>
    )
}
export default CardItem