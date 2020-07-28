import React from "react";
import "./Productos.scss";

const Productos = (props) => {
  const handleDiscount = (listPrice, sellingPrice) => {
    const pricePercentage = (sellingPrice * 100) / listPrice;
    const discount = Math.floor(100 - pricePercentage);
    return discount;
  };

  return (
    <div className="productsContainer">
      {props.products.map((product) => {
        return (
          <div className="productContainer" key={product.id}>
            {handleDiscount(
              product.price.listPrice,
              product.price.sellingPrice
            ) > 0 ? (
              <div className="discount">
                {handleDiscount(
                  product.price.listPrice,
                  product.price.sellingPrice
                ) + "%"}
              </div>
            ) : null}
            <a className="card" href={product.href}>
              <img
                src={require(`../../../img/Productos/${product.image}`)}
                alt=""
              />
              <p className="productTitle">{product.title}</p>
              <div className="listPrice">
                {product.price.listPrice > product.price.sellingPrice
                  ? `$${product.price.listPrice}`
                  : ""}
              </div>
              <div className="productPrice">${product.price.sellingPrice}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Productos;
