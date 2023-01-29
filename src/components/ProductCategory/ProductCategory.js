import React from 'react';
import shirt from '../../assests/Media/glasses-category-img-2.jpg'
import children from '../../assests/Media/retail-black-friday-small-banner-4-opt.jpg'
import glass from '../../assests/Media/glasses-category-img-1.jpg'
import shoe from '../../assests/Media/retail-black-friday-small-banner-1-opt.jpg'
import headphone from '../../assests/Media/retail-black-friday-small-banner-2-opt.jpg'
import bag from '../../assests/Media/baner-flat-fashion-7.jpg'
const ProductCategory = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={shirt} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shirts
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={children} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        children
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={glass} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Glasses
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={shoe} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Shoes
                        
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={headphone} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        headphones
                        
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={bag} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Bags
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">View All</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;