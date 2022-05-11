import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

import image from "../../assets/image-3.png";

const RatingArtist = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h3 className="mb-3">did you enjoy the perform ?</h3>
        <img
          src={`${image}`}
          className="img-fluid rounded-circle mb-3"
          alt="..."
        />
        <br />
        <Rating
          onClick={handleRating}
          initialValue={rating}
          className="mb-3"
          fillColor={`#53b8d1`}
        />
        <div className="d-flex justify-content-center">
          <div className="form-floating input-form" style={{ width: "911px" }}>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ borderRadius: "21px", height: "203px" }}
            />
            <label htmlFor="floatingInput">Write your comment here</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default RatingArtist;
