import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <NavLink to={`/anime/${props.id}`}>
      <div className="card">
        <img src={props.imageUrl} alt="anime image" />
      </div>
    </NavLink>
  );
}

export default Card;
