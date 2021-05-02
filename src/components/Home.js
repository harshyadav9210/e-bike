import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
  
    return (
        <div className='home-container'>
            <div className="home-img">
                <img src="images/homebike.jpg" alt=""/>
            </div>
            <div className="home-info">
                <h3>Welcome to the world of E Bikes</h3>
                <Link to='/signup'>
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;


