import React from 'react';
import './Slider.css';
import sliderImage from '../../assests/Media/Blazer.png'
const Slider = () => {
    return (
        <div>
            <div className="slider">
                <div className='mx-auto w-4/5 flex justify-between'>
                    <div className='left-side w-1/2 h-96 pt-10'>
                        <p className='left-para1 text-left text-sm font-serif pt-2 text-violet-900 font-bold'>TOP SALE ON THIS WEEK</p>
                        
                        <p className='left-para2 text-6xl text-left font-serif pt-2 leading-snug'>Explore Amazing Fashionable Blazers This Shadi Season</p>
                        <div className='flex'>
                            <button className="btn btn-primary mx-2 rounded-full bg-violet-900 text-white px-12">Shop Now</button>
                            <button className="btn btn-primary bg-pink-600 text-white rounded-full px-12">Learn more</button>
                        </div>
                    </div>
                    <div className='right-side w-1/2 h-96 overflow-hidden ml-24'>
                        <img src={sliderImage} alt="slider image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;