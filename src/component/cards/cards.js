import React from 'react'
import CardItem from '../card-item'
import './cards.css'
import ImgNine from '../../assets/images/img-9.jpg'
import ImgTwo from '../../assets/images/img-2.jpg'
import ImgThree from '../../assets/images/img-3.jpg'
import ImgFour from '../../assets/images/img-4.jpg'
import ImgEight from '../../assets/images/img-8.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={ImgNine}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem 
                            src={ImgTwo}
                            text="Travel through the Islands of Bali in a Private Croise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={ImgThree}
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem 
                            src={ImgFour}
                            text="Experience Football on Top of the Himilayan Mountains"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem 
                            src={ImgEight}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            label="Adventure"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
