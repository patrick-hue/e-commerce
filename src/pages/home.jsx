// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Datastore } from "../assets/data";
import { CartContext } from "../CartContext/context";
import { useContext } from "react";

export default function Home() {
    const { addToCart, removeFromCart, cart } = useContext(CartContext);

    const IsProductCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    return (
        <>
            <div className="hero">
                <div className="hero-words">
                    <h1>Welcome to <span>K</span>M <span>T SH</span>O<span>P</span></h1>
                    <p>Here is easy to shop and quick delivery
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam natus excepturi repudiandae
                    </p>
                    <button type="button">Shopping Now</button>
                </div>
                <div className="hero-image">
                    <h1>Discount of <s><span >25%</span></s></h1>
                    <img src="/images/force.png" alt="" />
                </div>
            </div>
            <div className="items">
                {Datastore.map((item, index) => (
                    <div className="item-card" key={index}> 
                        <Link to={`/product/${item.id}`} className="productdetails">
                            <img src={item.image} alt="" />
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                        </Link>
                        {IsProductCart(item.id) ?
                            <button onClick={() => removeFromCart(item.id)}>Remove</button> :
                            <button onClick={() => addToCart(item)}>
                                Add to Cart
                            </button>
                        }
                    </div>
                ))}
            </div>
        </>
    );
}
