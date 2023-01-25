import React, { useState } from "react";
import {FaStar} from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <form>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
            <label key={i}>
                <input
                    style={{ display: 'none' }}
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => {
                        setRating(ratingValue);
                        if (ratingValue === rating) setRating(0);
                    }}
                />
                <FaStar
                    size={30}
                    style={{
                        color:
                            ratingValue <= (hover || rating)
                                ? '#43BCCD'
                                : '#e4e5e9'
                    }}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                />
            </label>
        );
      })}
      <FaStar/>
    </form>
  );
};

export default StarRating;
