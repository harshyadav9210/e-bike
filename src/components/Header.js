import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type:'USER_LOGOUT'
        })
    }
    return (
            <div className='header-container'>
                <div className='logo-wrap'>
                    <img src="images/ebike.png" alt="logo"/>
                    <Link to='/'>
                        <span>E Bike</span>
                    </Link>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <Link to ='/'>Rent</Link>
                        </li>
                        <li>
                            <Link to ='/'>About</Link>
                        </li>
                        <li>
                            <Link to ='/'>Contact</Link>
                        </li>
                        <li>
                            {user.name ? <Link to ='/' onClick={handleClick }>Logout</Link> : <Link to ='/signup'>Signup</Link>}
                        </li>
                    </ul>
                </div>
                
            </div>
    )
}

export default Header
