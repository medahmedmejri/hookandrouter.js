import React from 'react';

function Movycard(props) {
  const { Image, TiTle, Rating } = props; 
  return (
    <div>
      <h1>Title: {TiTle}</h1>
      <img src={Image}  />
      <h4>Rating: {Rating}</h4> 
    </div>
  );
}

export default Movycard;
