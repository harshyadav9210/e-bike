import React, { useState } from 'react';
import './checkout-page.css';

const CheckoutPage = () => {
    
    const [stime, setStime] = useState("");

    const [etime, setEtime] = useState("");
    const [price, setPrice] = useState("");

    const handleClick = () => {
        setStime(
            "8:50 pm"
        )
    }

    const handleClick2 = () => {
        setEtime(
            "8:52 pm"
        )
        setPrice (
            "₹50"
        )
    }
    return (
        <div className='checkout-page'>
            <h1>You can Start your ride</h1>
            <button onClick ={handleClick}>Start Ride</button><hr/>
            {`current time is ${stime}`} <hr/>
            <button onClick ={handleClick2}>Start Ride</button><hr/>
            {`ride ending time is ${etime}`} <hr/>
            {`Bill Amount is: ${price}`}

        </div>
    )
}

export default CheckoutPage;
