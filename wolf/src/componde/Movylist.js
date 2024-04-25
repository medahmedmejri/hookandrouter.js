import React from "react";
import Movycard from "./Movycard";
import data from "./Data";
import Filter from './Filter'
function Movylist() {
  return (
    <div class='aa'>
      {data.filter((item)=>{  
        return search.toLowerCase()===''? item.TiTle.
        toLowerCase().includes(search)}).map((movie) => (
        <div key={movie.id}>
          <Movycard 
            TiTle={movie.TiTle} 
            Image={movie.Image}
            Rating={movie.Raiting} 
          />
        </div>
      ))}
    </div>
  );
}

export default Movylist;
