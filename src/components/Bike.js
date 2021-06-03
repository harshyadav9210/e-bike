import React from 'react';
import { Link } from 'react-router-dom';
import './Bike.css';

const Bike = ({imageUrl, pincode, battery, location, id}) => {
    return (
        <div className='bike-container'>
            <Link to={'/checkout/'+ id}>
                <div className="bike-image">
                    <img src={imageUrl} alt="Bike"/>  
                </div>
            </Link>
                <div className="bike-details">
                    <h3>{`Location: ${location}`}</h3>
                    <h3>{`Pincode: ${pincode}`}</h3>
                    <h3>{`Battery: ${battery}%`}</h3>
                </div>
        </div>
    )
}

export default Bike
