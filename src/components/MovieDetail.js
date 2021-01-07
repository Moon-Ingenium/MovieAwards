import React from "react";
import Button from "./Button"

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
      <Button type= "button" className="btn">Nominate</Button>
    </div>
  );
}

export default MovieDetail;
