import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
const itemClass = cart ? "in-cart" : ""
const btnClass = cart ? "remove" : "add"
  function handleCart() {
    setCart((cart) => !cart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={btnClass}>{cart ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
