import React from 'react';
import BikeMap from '../components/Bike-map';
import BikeMenu from '../components/Bike-menu';
import './rent-page.css';


const RentPage = () => { 
    return (
        <div className='rent-page'>
            <h2 className='heading'>Available E bikes</h2>
            <div className="rent-page-map">
                <BikeMap/>
            </div>
            <div className="rent-page-menu">
                <BikeMenu/>
            </div>
        </div>
    )
}

export default RentPage;
