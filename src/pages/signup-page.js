import React, {useState} from 'react';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import './signup-page.css'


const SignupPage = () => {

    const [newUser, setNewUser] = useState(true);
    const handleClick = () =>  {
        setNewUser(!newUser)
    }
    return(
        <div className="signup-page">
            { 
            newUser 
            ? 
            <>
            <div className="signup">
                <Signup/>
            </div>
            <div className='option'>
                <h3>Already have an account?<button onClick={handleClick}>Click Here</button></h3>
            </div>
            </>
            :
            <>
            <div className="signin">
                <Signin/>
            </div>
            <div className="option">
                <h3>Need a new account?<button onClick={handleClick}>Click Here</button></h3>
            </div>
            </>
            }
        </div>
    )    
}

export default SignupPage;