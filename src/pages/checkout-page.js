import React, { useState, useEffect } from 'react';
import {useParams, withRouter} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import { db } from '../firebase';
import './checkout-page.css';

const CheckoutPage = (props) => {

    const dispatch = useDispatch();
    const time = useSelector(state => state.time);

    const [bikeDetail, setBikeDetail] = useState({});
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [showTime, setShowTime] = useState({start:false, end:false});
    const [amount, setAmount] = useState(1);
    const [showAmount, setShowAmount] = useState(false);
    const {id} = useParams();
    
    useEffect(() => {
        db.collection('bikes').doc(id).get().then((doc) => {
            if(doc.exists){
                setBikeDetail(doc.data());
            }else{
                console.log("NO such data in firebase");
            }
        })
        .catch((err) => console.log(err));
    },[id])

    useEffect(() => {
        if(time.end.hours !== 0 && time.end.minutes !==0){
            handleAmount();
        }
    }, [time])
    
    

    let curDate;

    const handleStartClick = (e) => {
        curDate = new Date();
        setStartTime(curDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
        dispatch({
            type:'ADD_START_TIME',
            payload:{      
                hours: curDate.getHours(),
                minutes: curDate.getMinutes()    
            }
        })
        
        setShowTime({...showTime, start:true});

    }

    const handleEndClick = () => {
        if(!showTime.start){
            alert("Please start a ride first");
        } else{
            curDate = new Date();
            setEndTime(curDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
            dispatch({
                type:'ADD_END_TIME',
                payload:{      
                    hours: curDate.getHours(),
                    minutes: curDate.getMinutes()    
                }
            })
            setShowTime({...showTime, end:true});
            setShowAmount(true);
            
            
        }
    }
    const handleAmount = () => {
        if(time.end.hours > time.start.hours){
            setAmount(prevState => (prevState + (time.end.hours - time.start.hours)));
        }
        if(time.end.minutes < time.start.minutes){
            setAmount(prevState => prevState - 1);
        }

        
        
    }

    const handleClose = () => {
        alert("Amount has been deducted from your wallet.");
        props.history.push('/rent');
    };

    return (
        <div className='checkout-page'>
            <div className="checkout-bike">
                <div className="checkout-image">
                    <img src={bikeDetail.imageUrl} alt="" />
                </div>
                <div className="checkout-details">
                    <h2>{`In ${bikeDetail.location}`}</h2>
                    <h2>{`Battery remaining: ${bikeDetail.battery}%`}</h2>
                </div>
            </div>
           <div className="checkout-options">
                <div className="start-button">
                    <button onClick={handleStartClick}>
                        Start Ride
                    </button>
                    <br/>
                    {
                        showTime.start 
                        ?
                        (
                            <span>
                                {`Ride Started at ${startTime}`}
                            </span>
                        )
                        :
                        ""
                    }
                </div>
                <div className="end-button">
                    <button onClick={handleEndClick}>
                        End Ride
                    </button>
                <br/>
                    {
                        showTime.end 
                        ?
                        (
                            <span>
                                {`Ride Ended at ${endTime}`}
                            </span>
                        )
                        :
                        ""
                    }
                </div>
                
           </div>
           <div className='amount'>
               {
                   showAmount ?
                   (   
                        <>  
                        {
                            
                        }
                            
                            <h3>{`Your Billing Amount is ₹${amount*10}`}</h3>
                            <p onClick={handleClose}>Click to pay</p>
                            
                        </>
                   )
                   :
                   ""
               }
           </div>
                
                

        </div>
    )
}

export default withRouter(CheckoutPage);
