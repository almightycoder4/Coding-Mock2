import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../Redux/AppReducer/action";
//import { Navigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AppReducer.product);
  const [Product, setProduct] = useState({});

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProduct());
    }
  }, [products.length, dispatch]);

  useEffect(() => {
    if (id) {
      const Product = products.find((product) => product.id === Number(id));
      Product && setProduct(Product);
    }
  }, [id, products]);
  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        width: "700px",
        padding: "10px",
        margin: "auto",
      }}
    >
      <h2>{Product.brand}</h2>
      <div>
        <img
          src={`${Product.image}`}
          alt="Product Pic"
          style={{ width: "500px" }}
        />
      </div>
      <div>
        <div>
          <p>Brand: {Product.brand}</p>
          <p>Category: {Product.category}</p>
          <p>Price: ${Product.price}/-</p>
          <p>Title: {Product.title}</p>
          <button
            style={{
              textAlign: "center",
              backgroundColor: "red",
              color: "white",
              height: "50px",
              width: "100px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
