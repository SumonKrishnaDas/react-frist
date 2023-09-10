import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart,setCart]= useState(savedCart);

    const handelRemoveFromCart = (id)=>{

        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);


    }

 const handleClearCart =()=>{

    setCart([]);
    deleteShoppingCart();
 }





    return (

        <div className='shop-container'>
            <div className='review-container'> 
            
            {

cart.map( product => <ReviewItem key={product.id} product={product} handelRemoveFromCart={handelRemoveFromCart}

    >  </ReviewItem>)



}
            
             </div>



            

            <div className='cart-container' > 

                <Cart cart={cart}   handleClearCart={handleClearCart} > 

                <Link  className='review-link' to="/checkout"><button className='proceed-btn'>Proceed Checkout </button>    </Link>
             
                </Cart>


            </div>
        </div>
    );
};

export default Order;