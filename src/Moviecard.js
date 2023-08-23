import React from "react";
import "./Moviecard.css";
function Moviecard(props) {
  return (
    <div id="parent">
      <img id="imga" src={props.mdata.imgurl} alt="" />
      <h4>{props.mdata.name}</h4>
      <h5>{props.mdata.type}</h5>
    </div>
  );
}

export default Moviecard;
