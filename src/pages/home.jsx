import { Link, NavLink, Navigate } from "react-router-dom";
import { Datastore, totalPrice } from "../assets/data";
import { CartContext } from "../CartContext/context";
import { useContext } from "react";

export default function Home() {
    const { addToCart, removeFromCart, cart, CartExists } = useContext(CartContext);

    const IsProductCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    return (
        <>
            <div>
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
                        <img src="/images/hero-image1.png" alt="" />
                    </div>
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
