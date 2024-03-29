import React from "react";
import Product from "./product";
import { PRODUCTS } from "../../data/products";
import img2 from "./image/img2.jpg"; 

const Shop = () => {
  return (
    <React.Fragment>
      <div className="hero-image">
        <h1 style={{ marginTop: "30px", marginBottom: "20px" }}>Shop</h1>
        <img src={img2} alt="Hero" style={{ width: "100%", maxHeight: "800px" }} /> {/* Adjust the maxHeight */}
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        {PRODUCTS.map((productData) => (
          <Product key={productData.id} data={productData} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
