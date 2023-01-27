import React, { useState } from "react";
import { useEffect } from "react";
import {FaStar} from 'react-icons/fa';

const StarRating = ({readOnly,value}) => {
  const [rating, setRating] = useState(value?value:0);
  const [hover, setHover] = useState(null);
  // Needed because the onMouseLeave event is not working on mobile phone devices
  useEffect(()=>{
    if(!rating)setHover(null);
  },[rating])
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;

        return (
            <label key={i} >
                <FaStar
                    size={30}
                    style={{
                      color:
                      ratingValue <= (hover||rating)
                      ? '#43BCCD'
                      : '#e4e5e9'
                    }}
                    onClick={() => {
                      if(!readOnly){
                      setRating(ratingValue);
                      if (ratingValue === rating) setRating(0);
                    }}}
                    onMouseEnter={() => {
                      if(!readOnly) setHover(ratingValue);
                    }}
                    onMouseLeave={() =>setHover(null)}
                />
            </label>
        );
      })}
    </div>
  );
};

export default StarRating;
