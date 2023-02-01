import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import { getProduct } from "../Redux/AppReducer/action";

const Products = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.AppReducer.product);
  console.log(getProducts);
  const location = useLocation();

  useEffect(() => {
    let getProductParams;
    if (location.search) {
      getProductParams = {};
    }
    dispatch(getProduct(getProductParams));
  }, [location.search, dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "100%",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit,  minmax(310px, max-content))",
          justifyContent: "center",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
        }}
      >
        {getProducts.map((items) => {
          return (
            <div
              key={items.id}
              style={{
                width: "320px",
                boxShadow: " 0px 5px 15px rgba(0, 0, 0, 0.35)",
                padding: "10px",
              }}
            >
              <Link
                to={`/product/${items.id}`}
                style={{ textDecoration: "none", color: "red" }}
              >
                <ProductCard {...items} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
