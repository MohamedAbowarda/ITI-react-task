import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRating from "./StarRating";
import { Link } from "react-router-dom"; 

import "./Home.css";
function Home() {
  const [products, setProducts] = useState([]);

  const getproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <>
    
      <h1 className="my-5 fw-bold">Products</h1>
      <div className=" container products-list d-flex justify-content-between align-items-center flex-wrap">
        {products.map((product) => {
          return (
            <div className="product-item mb-5">
              <Card style={{ width: "18rem" }}>
                <img variant="top" className="img py-3" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.category}</Card.Text>
                  <Card.Text className="fw-bold text-primary">
                    ${product.price}
                  </Card.Text>
                  <div className=" d-flex  justify-content-evenly align-items-center">
                    <StarRating rating={product.rating.rate} />
                    {<p className="mb-0">({product.rating.count})</p>}
                  </div>
                  <Link to={`/${product.title}/${product.id}`}>
                    <Button variant="dark" className="my-3">
                      View Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
