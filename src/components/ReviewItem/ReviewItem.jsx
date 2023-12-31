import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handelRemoveFromCart}) => {

const {id,img,price,name,quantity} = product


    return (
        <div className='review-item'>
          

<img className='img' src={img} alt=""/>

<div className='review-details' >

<p className='product-title'>{name}</p>
<p>Price:<span className='orange-text'>${price} </span> </p>

<p>  </p>
<p>order quantity:<span className='orange-text' > {quantity}</span> </p>


</div>

<button onClick={ ()=> handelRemoveFromCart(id)} className='btn-delete' >
    
 <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/> 
    
    </button>

        </div>
    );
};

export default ReviewItem;