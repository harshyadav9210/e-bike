import React, {useState} from 'react'
import { auth, provider } from '../firebase';
import {useSelector, useDispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const[emailAndPassword, setEmailandPassword] = useState({
        email: '', 
        password: '',
    });

    const signup = (e) =>  {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailAndPassword.email, emailAndPassword.password)
        .then(() => {
            const currentUser = auth.currentUser;
            currentUser.updateProfile({
                displayName: user.name
            }).then()
               .catch(err => console.log(err))
               props.history.push('/rent')
        })
        .catch((err) => console.log(err))
    }

    const signUpWithGoogle = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:"NEW_USER",
                payload:result.user.displayName
            })
            props.history.push('/rent')
        })
        .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setEmailandPassword({
        ...emailAndPassword,    
        [e.target.name] : e.target.value})
        // console.log(e.target.value);
        // console.log(emailAndPassword);
    }

    const handleNameChange = (e) => {
        dispatch({
            type: 'NEW_USER',
            payload: e.target.value
        })
    }
    const handleSubmit = (e) => (
        e.preventDefault()
    )
    
    return (
        <div className="signup">
            <div className="header">Register</div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className ='label' htmlFor="name">Name</label>
                        <input 
                            type="text"
                            name ='name' 
                            id= 'name' 
                            className="name"
                            onChange={handleNameChange}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name='email' 
                            id='email' 
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
                            id='password'  
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
                        onClick={signup}
                    >
                        Sign up
                    </button>
                    <button 
                        type='submit' 
                        onClick={signUpWithGoogle}
                    >
                        Sign up with Google
                    </button>

                </div>

        </div>
    )
}

export default withRouter(Signup);
