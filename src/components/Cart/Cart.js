import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Selected items: {cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button style={{ color: "red", marginLeft: "10px" }} onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;