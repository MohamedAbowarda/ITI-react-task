import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details() {
  const params = useParams();
  const [state, setstate] = useState({});
  const getSingleProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setstate(json));
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <h1 className="my-5 fw-bold">Product Details</h1>

      <div className=" container Details d-flex justify-content-between align-items-center">
        <img src={state.image} alt="clothes" />
        <div className="info">
          <h1 className="fw-bold mb-5">{state.title}</h1>
          <p className="descr">{state.description}</p>
          <p className="cate">{state.category}</p>
          <p className="price fw-bold">${state.price}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
