import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {


  let total  = 0;
  let totalShipping=0;
  let quantity = 0;
  for(const product of cart){
product.quantity=product.quantity||1;
    total = total+product.price *product.quantity;
    totalShipping=totalShipping+product.shipping;
quantity=quantity+product.quantity;

 
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