import React from 'react'
import Card from './Card.js'
import Cardtwo from './Cardtwo.js'
import Cardthree from './Cardthree.js'
const Home = () => {
    return (
        <div className="home mx-5 mt-3">
            <div className="home-title">
                <h4>Welcome back, Andrew!</h4>
                <p>Have a look at the Quick progress bar!</p>
                <div className="home-cards">
                    <Card />
                    <Cardtwo/>
                    <Cardthree/>           
                </div>
            </div>
        </div>
    )
}

export default Home