import React from 'react';
import { Link } from 'react-router-dom';
import './rent-page.css';

const RentPage = () => {
    const handleClick = () => {

    }
    return (
        <div className='rent-page'>
            <h2>You can rent an E-Bike here</h2>
            <div className="bike-group">
                <Link to='/checkout'>
                    <div className="bike">
                        <img src="https://ep1.pinkbike.org/p4pb15939662/p4pb15939662.jpg" alt=""/>
                        <button onclick={handleClick} className='button'>RENT</button>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className="bike">
                        <img src="https://i.pinimg.com/originals/78/07/36/7807367a7437afbc58270d9654734738.jpg" alt=""/>
                        <button onclick={handleClick} className='button'>RENT</button>
                    </div>
                </Link>
                <Link to='/checkout'>
                <div className="bike">
                    <img src="https://ep1.pinkbike.org/p4pb14237895/p4pb14237895.jpg" alt=""/>
                    <button onclick={handleClick} className='button'>RENT</button>
                </div>
                </Link>
                <Link to='/checkout'>
                    <div className="bike">
                        <img src="https://ep1.pinkbike.org/p5pb16246321/p5pb16246321.jpg" alt=""/>
                        <button onclick={handleClick} className='button'>RENT</button>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className="bike">
                        <img src="https://ac299a4b87076a66ac1c-ba8981882613ab522a836b37c94562dc.ssl.cf3.rackcdn.com/content/uploads/2018/01/Bike-2.jpg" alt=""/>
                        <button onclick={handleClick} className='button'>RENT</button>
                    </div>
                </Link>
                <Link to='/checkout'>
                    <div className="bike">
                        <img src="http://i.nextmedia.com.au/insidesport/2014-06-felt-1-nine1.jpg" alt=""/>
                        <button onclick={handleClick} className='button'>RENT</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default RentPage;
