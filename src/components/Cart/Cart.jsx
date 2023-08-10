import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {


  let total  = 0;
  let totalShipping=0;
  for(const product of cart){

    total = total+product?.price;
    totalShipping=totalShipping+product.shipping;
  }
  const tax = total*7/100;
const grandtotal= total+totalShipping+tax
  
    return (
        <div className='cart'>  
            <h4>order Summary </h4>
           <p>Selected item :{cart.length} </p>
           <p>Total Price:{total} </p>
           <p>Total Shipping:{totalShipping} </p>
           <p>tax:{tax.toFixed(2)} </p>
           <h6>Grand total:{grandtotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;