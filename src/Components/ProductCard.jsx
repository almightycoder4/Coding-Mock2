import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ProductCard = ({ id, brand, category, price, image }) => {
  //const { Cart, addtoCart } = useContext(CartContext);
  //console.log(Cart);

  return (
    <div
      style={{
        display: "block",
        width: "300px",
        height: "450px",
        border: "0px",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "320px",
          padding: "20px 20px 0 20px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          alt="product"
          src={image}
          style={{
            backgroundSize: "contain",
            width: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "15px" }}>Brand: {brand}</div>
        <div>Category: {category}</div>
        <div>Price: ${price}/-</div>
        <button
          style={{
            textAlign: "center",
            backgroundColor: "red",
            color: "white",
            height: "30px",
            width: "100px",
          }}
          // onClick={addtoCart()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
