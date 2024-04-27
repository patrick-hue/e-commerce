import React, { useContext } from "react";
import { CartContext } from "../CartContext/context";

export default function CartPage() {
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
        if (cart.length !=0) {
             return cart.map((item, index) => (
            <div key={index} className="cart-item">
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>Price: {item.price}$</p>
                <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        ));
        }else{
            return (<div>
                <h1>Cart is Empty</h1>
            </div>)
        }
       
    };

    const totalProducts = countTotalProducts();
    const totalPrice = calculateTotalPrice();

    return (
        <div className="cart-container">
            <div className="Cart_header">
                {
                    (cart.length > 0)&&(<h1>Cart List</h1>)
                }
                <br/>
                {renderCartItems()}
            </div>
            {
                (cart.length > 0)&&(
                    <div className="cart_details">
                        <h1>Cart Details</h1>
                        <p>Total Products: {totalProducts}</p>
                        <p>Total Price: {totalPrice}$</p>
                        <button onClick={() => window.location.href = "/checkout-to-pay"}>Checkout</button>
                    </div>
                )
            }
        </div>
    );
}
