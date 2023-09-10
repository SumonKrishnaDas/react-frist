import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart,handleClearCart,children}) => {


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
           <p>Selected item :{quantity} </p>
           <p>Total Price:${total} </p>
           <p>Total Shipping:${totalShipping} </p>
           <p>tax:{tax.toFixed(2)} </p>
           <h6>Grand total:{grandtotal.toFixed(2)} </h6>
           <button  onClick={ handleClearCart}  className='btn-clear' >Clear Cart
            <FontAwesomeIcon icon={faTrashAlt}/>
            
             </button>
             {children}
        </div>
    );
};

export default Cart;