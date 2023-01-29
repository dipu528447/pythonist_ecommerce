import React from 'react';
import freeShiping from '../../assests/Media/van.png'
import customerService from '../../assests/Media/customer-service.png'
import discount from '../../assests/Media/money.png'
import './Service.css'
const Service = () => {
    return (
        <div className='mx-auto w-4/5'>
            <div className="flex  flex-col w-full lg:flex-row ">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mx-2">
                    <div className='flex px-10'>
                        <img className='serviceImage' src={freeShiping} alt="free shiping"/>
                        <div className='mx-5 text-left'>
                            <p className='text-xl'>Free Shipping</p>
                            <p>on all orders above 100 Riyal</p>
                        </div>
                    </div>
                </div> 
                
                
                
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mx-2">
                    
                    <div className='flex px-10'>
                        <img src={customerService} className='serviceImage' alt="free shiping"/>
                        <div className='mx-5 text-left'>
                            <p className='text-xl'>Free Shipping</p>
                            <p>on all orders above 100 Riyal</p>
                        </div>
                    </div>
                </div> 

                

                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mx-2">
                    
                    <div className='flex px-10'>
                        <img src={discount} alt="free shiping" className='serviceImage'/>
                        <div className='mx-5 text-left'>
                            <p className='text-xl'>Free Shipping</p>
                            <p>on all orders above 100 Riyal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;