import React from "react";

export default function ProductsView({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div>
          {product.name}
          {product.description}
          {product.value}
          {product.available}
        </div>
      ))}
    </div>
  );
}
