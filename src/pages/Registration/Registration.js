import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { app } from '../../firebase';
import { toast } from 'react-hot-toast';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const handleSubmit = async () => {
        
        try{
            
        }
        catch(err){
            console.log(err)
        }
        
        
    }
    
    // create user with email password
    function createUser() {
        const auth=getAuth(app)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                handleSubmit();
                console.log(user);
                alert('Registration Completed')
                
            })
            .catch((error) => {

                const errorMessage = error.message;
                alert(errorMessage);
        });
    }


    return (
        <div>
            <h1 className='text-center text-7xl text-blue-500 py-12'>Ecommerce</h1>
            <h1 className='text-center text-3xl text-blue-500 py-4'>Registration Form</h1>
            <div className="form-control w-full max-w-xs m-auto py-4">
                
                <label className="label">
                    <span className="label-text">Enter Your Email address</span>
                </label>
                <input type="email" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setEmail(event.target.value)} />
                
                
                <label className="label">
                    <span className="label-text">Enter Your Password</span>
                </label>
                
                <input type="password" placeholder="Type here" className="input input- input-primary w-full max-w-xs" onChange={event => setPassword(event.target.value)} />
                
                <div className='flex'>
                    <button className="btn btn-info w-1/2 m-auto my-5" onClick={createUser}>Sign in</button>
                </div>
                <Link to='/login'><p className='text-info'>Already have an account?</p></Link>
            </div>
        </div>
    );
};

export default Registration;