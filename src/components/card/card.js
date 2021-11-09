import React from "react";
import { useHistory } from "react-router";

const Card = ({ knjiga }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/details", { id: knjiga._id });
  };
  return (
    <div className="card-container" onClick={handleClick}>
      <img src={knjiga.image} alt=""></img>
      <p className="title">{knjiga.name}</p>
      <p className="autor">{knjiga.writer}</p>
      <p className="price">{knjiga.price}</p>
    </div>
  );
};

export default Card;
