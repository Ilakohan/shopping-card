import React, {
  useContext,
} from "react";
import "./Product.css";
import { CartContext } from "../Shared/context/cart-context";

const Product = (props) => {
  const [CartItems, setCartItems] =
    useContext(CartContext);

  const addTocart = () => {
    const product = {
      title: props.title,
      price: props.price,
    };
    setCartItems((currState) => {
      return [...currState, product];
    });
  };

  return (
    <div className="product">
      <p> {props.price}</p>
      <button
        className="btn"
        onClick={addTocart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
