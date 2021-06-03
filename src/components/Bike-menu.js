import React ,{ useEffect, useState} from 'react';
import './Bike-menu.css';
import {db} from '../firebase';
import Bike from './Bike';


function GetBikes(){

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
       const unsubscribe =  db.collection("bikes").onSnapshot(snapShot => {
            snapShot.docs.forEach( doc => {
                setBikes(prevState => {
                    return([...prevState, {id:doc.id, ...doc.data()}])})
                })
            }
        )

        return () => unsubscribe();

    }, [])

    return bikes;
     
}


const BikeMenu = () => {

    const bikes = GetBikes();

    return (
        <div className='bike-menu'>
            {
                bikes.map(bike =>(
                    
                        <Bike 
                            key ={bike.id} 
                            imageUrl={bike.imageUrl} 
                            location={bike.location}
                            pincode={bike.pincode} 
                            battery={bike.battery} 
                            id={bike.id}
                        />
                    
                ))
            }
        </div>
    )
}

export default BikeMenu;
