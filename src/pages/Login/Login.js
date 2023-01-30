import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../App';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const location=useLocation();
    const from=location.state?.from?.pathname||'/';
    const [user,setUser]=useContext(UserContext)
    // sign in user with email password
    useEffect(()=>{
        if(user)
            navigate(from,{replace:true})
        },[user])
    function login() {
        console.log(email, password)
        if (!email) {
            setMsg('Please provide a your email address')
            return ''
        }
        if (!password) {
            setMsg('Please provide a your password')
            return ''
        }
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser({email:email})
                navigate(from,{replace:true})
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(error)
                setMsg('Invalid user and password')
            });
        
    }
    
    return (
        <div>
            <h1 className='text-center text-7xl text-blue-500 py-12'>Ecommerce</h1>
            <h1 className='text-center text-3xl text-blue-500 py-4'>Login Form</h1>
            <div className="form-control w-full max-w-xs m-auto py-4">
                <label className="label">
                    <span className="label-text">Enter Your Email</span>
                </label>
                <input type="email" placeholder="Type here" value={email} className="input input- input-primary w-full max-w-xs" onChange={event => setEmail(event.target.value)} required />
                <label className="label">
                    <span className="label-text">Enter Your Password</span>
                </label>
                <input type="password" placeholder="Type here" value={password}className="input input- input-primary w-full max-w-xs" onChange={event => setPassword(event.target.value)} required />
                <p className='text-start text-red-500'>{msg}</p>
                <div className='flex'>
                    <button className="btn btn-info w-28 m-5" onClick={login}>Login</button>
                    <Link to="/registration"><button className="btn btn-secondary w-28 m-5">Signup</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;