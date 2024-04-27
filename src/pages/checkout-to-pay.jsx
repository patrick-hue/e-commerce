import React, { useContext } from 'react';
import { CartContext } from '../CartContext/context';

export default function Payment() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    // Function to calculate the total price of the items in the cart
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };
 
    // Function to count the total number of unique products in the cart
    const countTotalProducts = () => {
        return cart.length;
    };

    // Function to render individual cart items
    const renderCartItems = () => {
        if (cart.length !== 0) {
            return cart.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}$</p>
                    <button onClick={(e) => handleRemove(e, item.id)}>Remove</button>
                </div>
            ));
        } else {
            return (
                <div>
                    <h1>Shopping list is empty!</h1>
                    <button onClick={() => window.location.href = '/src/pages/home.jsx'}>Go back</button>
                </div>
            );
        }
    };

    // Function to handle remove button click
    const handleRemove = (e, id) => {
        e.preventDefault();
        removeFromCart(id);
    };

    return (
        <div className="containerforpay">
            <form action="">
                <div className="row">
                    <div className="col">
                        <h3 className="title">Shopping List</h3>
                        <h2>Total price : {calculateTotalPrice()}$</h2>
                        <h4>Total product : {countTotalProducts()} products</h4>
                        {renderCartItems()}
                    </div>
                    <div className="col">
                        <h3 className="title">shipping address</h3>
                        <div className="inputBox">
                            <span>full name :</span>
                            <input type="text" placeholder="Kmt kiven" />
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="example@example.com" />
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="room - street - locality" />
                        </div>
                        <div className="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="Angeles" />
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>state :</span>
                                <input type="text" placeholder="California" />
                            </div>
                            <div className="inputBox">
                                <span>zip code :</span>
                                <input type="text" placeholder="003 400" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="title">payment</h3>
                        <div className="inputBox">
                            <span>cards accepted :</span>
                            <img src="images/card_img.png" alt="" />
                        </div>
                        <div className="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. Kmt kiven" />
                        </div>
                        <div className="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444" />
                        </div>
                        <div className="inputBox">
                            <span>exp month :</span>
                            <input type="text" placeholder="january" />
                        </div>
                        <div className="flex">
                            <div className="inputBox">
                                <span>exp year :</span>
                                <input type="number" placeholder="2025" />
                            </div>
                            <div className="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1030" />
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="proceed to checkout" className="submit-btn" />
            </form>
        </div>
    );
}
