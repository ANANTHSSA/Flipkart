import React from 'react'
import '../../Sass/Sass.scss'
import Card1 from './images/card1.png'
import Card2 from './images/card2.png'
import Card3 from './images/card3.png'
import Card4 from './images/card4.png'
import Card5 from './images/card5.png'
import Card6 from './images/card6.png'
import Card7 from './images/card7.png'
import Card8 from './images/card8.png'
import Card9 from './images/card9.png'
import Card10 from './images/card10.png'
import Nav from '../../Nav/Nav' 

const ChooseCard = () => {
  return (
    <>
    <Nav/>
      <div className='choosecard'>
        <div className='container'>
            <div className='row'>
                <ul className='nav'>
                    <li><a href='#'> <img src={Card1}/><h5>Grocery</h5></a></li>
                    <li><a href='#'><img src={Card2}/><h5>Mobiles</h5></a></li>
                    <li><a href='#'><img src={Card3}/><h5>Fasion</h5></a></li>
                    <li><a href='#'><img src={Card4}/><h5>Electronics</h5></a></li>
                    <li><a href='#'><img src={Card5}/><h5>Home</h5></a></li>
                    <li><a href='#'><img src={Card6}/><h5>Appliances</h5></a></li>
                    <li><a href='#'><img src={Card7}/><h5>Travel</h5></a></li>
                    <li><a href='#'><img src={Card8}/><h5>Top Offers</h5></a></li>
                    <li><a href='#'><img src={Card9}/><h5>Beauty,Toys&More</h5></a></li>
                    <li><a href='#'><img src={Card10}/><h5>TwoWeelers</h5></a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChooseCard

