import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Header from "../../components/header/header";

const BookDetails = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState();
  const history = useHistory();
  console.log(history.location.state.id);
  let id = "6084973ce5f4e90015172b1f";
  useEffect(() => {
    axios
      .get(
        `http://procerasoft.com:5000/api/products/${history.location.state.id}`
      )
      .then((knjiga) => {
        setData(knjiga.data);
        console.log(knjiga.data);
      });
  }, []);
  return (
    <div className="card-detail-container">
      <Header />
      <div className="all-content">
        <div
          className="back-button"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </div>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            className="img_details"
            src={data && data.image && data.image}
            alt=""
          ></img>
          <div className="book-det">
            <p className="genre">{data && data.genre && data.genre}</p>
            <p className="writer">{data && data.writer && data.writer}</p>
            <p className="description">
              {data && data.description && data.description}
            </p>
          </div>
          <div className="book-details">
            <p className="price">{data && data.price && data.price}</p>
            <p className="title">{data && data.name && data.name}</p>
            <p className="stock">
              {data && data.countInStock === 0
                ? "There is no books"
                : data && data.countInStock}
            </p>
            <h2>Quantity</h2>
            <div className="add-to-card">
              <button
                className="deduct-nubmer"
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </button>
              <input class="value" value={count}></input>
              <button
                className="deduct-nubmer"
                onClick={() => {
                  setCount(count + 1);
                  <a href="/login">sign in</a>;
                }}
              >
                +
              </button>
            </div>
            <div className="add-button">Add to card</div>
          </div>
        </div>
        <div className="rewiew">
          <h2>Write a Review</h2>
          <div role="alert" class="alert alert-info show">
            Please <a href="/login">sign in</a> to write a review.{" "}
          </div>
          <div className="copyright">Copyright © BookShop</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
