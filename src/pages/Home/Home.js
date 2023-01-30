import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import Footer from '../../components/Footer/Footer';
import ProductCategory from '../../components/ProductCategory/ProductCategory';
import Products from '../../components/Products/Products';
import Service from '../../components/Service/Service';
import Slider from '../../components/Slider/Slider';
import Testimonial from '../../components/Testimonial/Testimonial';

const Home = () => {
    const [cart,setCart]=useContext(CartContext)
    return (
        <div>
            
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Slider></Slider>
                    <br></br>
                    <Service></Service>
                    <br></br>
                    <ProductCategory></ProductCategory>
                    <br></br>
                    <Products></Products>
                    <br></br>
                    <Testimonial></Testimonial>
                    <br></br>
                    <Footer></Footer>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <h1>Shopping cart <span className="indicator-item badge badge-primary">{cart.length}</span> </h1>
                    {cart.map(item=>{
                        return (
                        <li key={item._id}>
                            <div className='flex'>
                                <div className="avatar">
                                    <div className="w-20 rounded">
                                        <img src={item.productImage} alt="product image" />
                                    </div>
                                </div>
                                <div>
                                    <p className='text-blue-800'>{item.productName}</p>
                                    <div className='flex justify-between text-xs'>
                                        <p className='border border-blue-500 px-2'>Quantity: {item.quantity}</p>
                                        <p className='border border-blue-500 px-2'>BDT {item.productPrice}</p>
                                    </div>
                                </div>
                            </div>

                        </li>
                        )
                    })}
                    <Link to='/viewCart'><button className='btn btn-primary absolute inset-x-0 bottom-20'>View Cart</button></Link>
                    {/* <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li> */}
                    </ul>
                </div>
            </div>
           
           
        </div>
    );
};

export default Home;