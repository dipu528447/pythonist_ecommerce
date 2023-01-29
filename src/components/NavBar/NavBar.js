import React, { useContext } from 'react';
import logo from '../../assests/Media/logo New.png'
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [cart,setCart]=useContext(CartContext);
    return (
        <div>
            <div className="navbar bg-base-100 mx-auto w-4/5">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><a>Blog</a></li>
                        <li tabIndex={0}>
                        <a className="justify-between">
                            Shop
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Jackets</a></li>
                            <li><a>Books</a></li>
                        </ul>
                        </li>
                        <li><a>Track Order</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    <img src={logo} alt="Company Logo"/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><a>Blog</a></li>
                    <li tabIndex={0}>
                        <a>
                        Shop
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2">
                        <li><a>Jackets</a></li>
                        <li><a>Books</a></li>
                        </ul>
                    </li>
                    <li><a>Track Order</a></li>
                    <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className='mx-2 text-2xl'><BsSearch/></label>
                    <label className='mx-2 text-2xl'><BsHeart/></label>
                    <label className='mx-2 text-2xl'><CiUser/></label>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">{cart.length}</span> 
                        <label htmlFor="my-drawer-4" className='mx-2 text-2xl drawer-button'><BsCart/></label>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;