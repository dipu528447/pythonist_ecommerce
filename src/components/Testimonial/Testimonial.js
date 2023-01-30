import React from 'react';
import testimonial1 from '../../assests/Media/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg'
const Testimonial = () => {
    return (
        <div className='mx-auto w-4/5'>
            <div className='flex mt-10'>
                <div className='px-10 my-10 w-1/2'>
                    <p className='left-para1 text-sm font-serif pt-2 text-violet-900 font-bold text-left'>Testimonial</p>
                    <br/>
                    <p className='text-5xl text-pink-600 font-serif text-left'>What Our Clients Say</p>
                    <br/>
                    <p className='leading-normal text-left w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className='py-10 w-1/2'>
                    <p className='text-8xl'>4.8</p>      
                    <div className="rating rating-lg rating-half">
                        <input type="radio" name="rating-10" className="rating-hidden" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                    </div>
                    <div>
                        <p className='text-2xl'>Avarage Customer Rating</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">John Kim</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <figure><img src={testimonial1} alt="client image" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">john Kim!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <figure><img src={testimonial1} alt="client image" /></figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">John Kim!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <figure><img src={testimonial1} alt="client image" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;