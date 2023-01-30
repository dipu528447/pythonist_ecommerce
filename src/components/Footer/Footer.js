import React from 'react';

const Footer = () => {
    return (
        <div className='mx-auto w-4/5'>
            <footer className="footer p-10 bg-light text-black-500 shadow-xl">
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">MyAccount</a>
                    <a className="link link-hover">Orders</a>
                    <a className="link link-hover">Download</a>
                    <a className="link link-hover">Shop</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;