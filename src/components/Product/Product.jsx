import React from 'react';
import './Product.css' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { addToDb } from '../../utilities/fakedb';

const Product = (props) => {
   

    const{img,name,seller,ratings,price} = props.product;
    const handleAddToCart = props.handleAddToCart;




    return (
        <div className='product' >

           
<img src={img} alt=""/>
<div className='product-info'  > 

<h6 className='product-name'> {name} </h6>
<p> Price:${price}</p>
<p>Manufacturer:{seller}</p>
<p>Rating :{ratings}Star </p>


</div>
<button onClick={ ()=> handleAddToCart(props.product)} className='btn-cart'> Add to cart 
<FontAwesomeIcon icon={faCoffee} />
 </button>

        </div>
    );
};

export default Product;