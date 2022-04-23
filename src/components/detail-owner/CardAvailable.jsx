import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const CardAvailable = () => {
  return (
    <>
      <div
        className="card mb-5 border-0"
        style={{ maxWidth: "332px", maxHeight: "73px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${image}`}
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted">Monday, 27 April 2022</small>
              </p>
              <h5 className="card-title">Bougnet Cafe</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAvailable;
