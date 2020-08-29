import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";
import "./Details.css";

export default function Details() {
  let { detailProduct, addToCart, openModal } = useContext(ProductContext);

  const displayPrice = price => {
    return `$${price}`;
  };
  const { id, img, info, price, title, company, inCart } = detailProduct;
  return (
    <div className="container details-container p-3">
      <h2 className="text-center p-3 pt-5 text-bright">
        {title}
      </h2>
      <div className="row d-flex inner-container text-center justify-content-center">
        <div className="col-10 col-md-6 left-side">
          <img src={img} alt="" className="img-phone" />
        </div>
        <div className="col-10 col-md-6 right-side p-5 mt-2">
          <h3 className="title py-2">{`Model: ${title}`}</h3>
          <h5 className="company text-uppercase font-weight-bold">
            {`Made by: ${company}`}
          </h5>
          <p className="price">Price: {displayPrice(price)}</p>
          <p className="info pt-2">
            <span className="d-block font-weight-bold py-2 info-heading">
              {" "}
              Some info about the product:{" "}
            </span>
            <span className="info-body">{info}</span>
          </p>
          <div className="button-container py-3 d-flex justify-content-center">
            <Link
              className="btn-style text-bright border-bright mr-2 w-50 p-1"
              to="/"
            >
              Back to Products
            </Link>
            <button
              className="btn-style text-yellow border-yellow w-50 p-1"
              to="" disabled = {inCart? true : false} onClick={() => { 
                  addToCart(id);
                  openModal(id);
                  }}>
              { inCart? `In Cart` : `Add to Cart`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
