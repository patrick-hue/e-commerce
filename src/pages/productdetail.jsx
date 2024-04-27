import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Datastore } from '../assets/data';
import { CartContext } from '../CartContext/context';

export default function ProductDetails() {
    const { product_id } = useParams();
    const { cart, removeFromCart, addToCart } = useContext(CartContext);
    
    const IsProductCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    const Product = Datastore.find(product => product.id == product_id);
    // console.log(!product);
    return (
        <>
            {
                Product? (
                    <div className="productdetail">
                <div className="productdetail-card">
                    <img src={Product.image} alt={Product.title} />
                    <h3>{Product.title}</h3>
                    <p>Price: ${Product.price}</p>
                </div>
                <div className="productdetail-card">
                    <h3>Description</h3>
                    <p className='description'>{Product.description}</p>
                    {IsProductCart(Product.id) ?
                        <button onClick={() => removeFromCart(Product.id)}>Remove</button> :
                        <button onClick={() => addToCart(Product)}>
                            Add to Cart
                        </button>
                    }
                </div>
            </div>
                ) : (
                    <div className="product-details">
                        <h1>Product Not Found</h1>
                        <Link to="/">Go Back</Link>
                    </div>
                )
            }
        </>
    );
}
