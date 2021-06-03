import React, {useState} from 'react';
import { auth } from '../firebase';
import {withRouter} from 'react-router-dom';
import './Signin.css';
import { useDispatch } from 'react-redux';

const Signin = (props) => {

    const dispatch = useDispatch();

    const[emailAndPassword, setEmailandPassword] = useState({
        email: '', 
        password: '',
    });

    const signin = (e) =>  {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailAndPassword.email, emailAndPassword.password)
        .then(() => {
            props.history.push('/rent')
            dispatchUser();
        })
        .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        setEmailandPassword({
        ...emailAndPassword,    
        [e.target.name] : e.target.value})
        // console.log(e.target.value);
        // console.log(emailAndPassword);
    }

    const handleSubmit = (e) => (
        e.preventDefault()
    )
    const dispatchUser = () => {
        dispatch({
            type: 'NEW_USER',
            payload: auth.currentUser.displayName
        })
    }
    
    return (
        <div className="signin">
            <div className="header">Log In</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            id='emaillogin' 
                            className="email"
                            value= {emailAndPassword.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            id='passwordlogin'  
                            className="password"
                            value={emailAndPassword.password}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
                <div className="footer">
                    <button 
                        type='submit'  
                        onClick={signin}
                    >
                        Sign In 
                    </button>
                    

                </div>

        </div>
    )
}

export default withRouter(Signin);
