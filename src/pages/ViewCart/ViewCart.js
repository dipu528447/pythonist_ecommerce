import React, { useContext, useEffect, useState } from 'react';
import { CartContext, UserContext } from '../../App';
import toast from 'react-hot-toast';
import Testimonial from '../../components/Testimonial/Testimonial';
import { Link } from 'react-router-dom';

const ViewCart = () => {
    const [cart,setCart]=useContext(CartContext)
    const [user,setUser]=useContext(UserContext);
    const [total,setTotal]=useState(0);
    useEffect(()=>{
        var sum=0
        for(var i=0;i<cart.length;i++){
            sum+=parseInt(cart[i].productPrice)*parseInt(cart[i].quantity)
            
        }
        setTotal(sum)
    },[cart])
    function removeToCart(item){
        console.log(item.productId)
        fetch(`http://localhost:5000/removeToCart/${item.productId}`, {
            method: 'DELETE', 
            headers:{
                'content-type': 'application/json', 
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(cart)
            setCart(cart.filter(prod=>prod.productId!==item.productId))
            alert('Deleted Sucessfully')
        })

    }
    
    return (
        <div className='w-4/5 mx-auto'>
            <div className='flex mt-10 '>
                <div className="overflow-x-auto w-2/3">
                    <table className="table w-full">                        
                        <thead>
                        <tr>
                            <th>
                            Serial
                            </th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <th>
                                                <label>
                                                    {index+1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={item.productImage} alt="product Image" />
                                                        </div>
                                                    </div>
                                                    <div className="font-bold">{item.productName}</div>
                                                </div>
                                            </td>
                                            
                                            <td className='flex py-5'><button className='btn btn-xs'>+</button><div className="font-bold px-2">{item.quantity}</div><button className='btn btn-xs'>-</button></td>
                                            <td>
                                                <div className="font-bold">{item.productPrice}</div>
                                            </td>
                                            <td>
                                                <button className='btn btn-red-500' onClick={()=>removeToCart(item)}>Delete</button>
                                            </td>
                                        </tr>
                                        
                                    )
                                })
                            }
                        </tbody>
                        
                    </table>
                </div>
                <div className='w-1/3 ml-10'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            
                            <p className='text-xl text-left'>Cart Totals</p>
                            <p className='text-blue-500'>total : {total}</p>
                            <p className='text-blue-500'>vat : 0</p>
                            <p className='text-blue-500'>total : {total}</p>
                        </div>
                    </div>
                    <Link to='/dashboard'><button className='btn btn-primary mt-10'>Checkout</button></Link>
                </div>

            </div>
            
        </div>
    );
};

export default ViewCart;