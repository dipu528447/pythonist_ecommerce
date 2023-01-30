import React, { useContext, useState } from 'react';
import { CartContext } from '../../App';

const Checkout = () => {
    const [email, setEmail] = useState('');
    const [cart,setCart]=useContext(CartContext)
    function orderConfirm(){
        alert('Checkout Successfully')
    }
    return (
        <div>
            <h1> Thanks for shopping...see you later.</h1>
            <div className="form-control w-full max-w-xs m-auto py-4">
                <input type="email" placeholder="Type here" value={email} className="input input- input-primary w-full max-w-xs" onChange={event => setEmail(event.target.value)} required />
                <button className="btn btn-info w-52 mx-auto my-5" onClick={orderConfirm}>Confirm Checkout</button>
            </div>
            
        </div>
    );
};

export default Checkout;