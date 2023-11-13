import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, itemName: "Carrot", price: 4 },
    { id: 2, itemName: "Avacado", price: 3 },
    { id: 3, itemName: "Tomato", price: 5 },
    { id: 4, itemName: "Potato", price: 6 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) =>{
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((total, cartItem) => total + cartItem.price, 0);
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item)=>(
            <div key = {item.id}>
                {item.itemName} -${item.price}
                <button onClick={()=>addToCart(item)}>Add to Cart</button>
            </div>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
      {cart.map((cartItem)=>(
        <div key={cartItem.id}>
          {cartItem.itemName} - ${cartItem.price}
        </div>
      ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};
export default Cart;
