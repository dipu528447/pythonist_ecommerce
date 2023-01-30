import React, { useContext, useEffect, useState } from 'react';
import { CartContext, UserContext } from '../../App';
import toast from 'react-hot-toast'

const Products = () => {
    const [cart,setCart]=useContext(CartContext);
    const [productItems,setProductItems]=useState([]);
    const [user,setUser]=useContext(UserContext);
    useEffect(() => {
        fetch(`https://serverside-gamma.vercel.app/products`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setProductItems(data)
            
        })
    }, []);
    function isExist(id){
        let found;
        found=cart.find(item=>item.productId===id)
        // console.log(found)
        return found==undefined?true:false
    }
    function addToCart(product){
        
        if(isExist(product._id)){
            const NewOrder={
                productName:product.productName,
                productImage:product.productImage,
                productDetails:product.productDetails,
                productId:product._id,
                productPrice:product.productPrice,
                email:user?.email?user.email:"",
                quantity:"1"
            }
            console.log(product)
            fetch('https://serverside-gamma.vercel.app/addOrder', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json', 
                },
                body: JSON.stringify({...NewOrder})
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result);
                alert('Added successfully')
                setCart([
                    ...cart,{...NewOrder}
                ])
                
            })
        }
        else{
            alert('Already Added to cart')
        }
    }
    
    return (
        <div>
            <div className='px-10 my-10'>
                <p className='left-para1 text-sm font-serif pt-2 text-violet-900 font-bold text-center'>TOP SALE ON THIS WEEK</p>
                <p className='text-4xl text-pink-600 font-serif text-center'>Featured Products</p>
                <p className='leading-normal text-center mx-auto w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='mx-auto w-4/5'>
                <div className='grid grid-cols-1 grid-cols-4'>
                    {productItems.map(item=>{
                        return(
                            <div className="card card-compact w-72 bg-base-100 shadow-xl" key={item._id}>
                                <figure><img src={item.productImage} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.productName}</h2>
                                    <p className='text-left'>Price: {item.productPrice}</p>
                                    <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={()=>addToCart(item)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        
        </div>
    );
};

export default Products;