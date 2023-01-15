import React from "react";
import "./ProductList.css";
import Product from "./Product";
const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "book 1",
      price: 79,
    },
    {
      id: 2,
      title: "book 2",
      price: 59,
    },
    {
      id: 3,
      title: "book 3",
      price: 89,
    },
    {
      id: 4,
      title: "book 4",
      price: 99,
    },
  ];

  return (
    <div className="product-List">
      {products.map((item) => (
        <Product
          key={item.id}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
