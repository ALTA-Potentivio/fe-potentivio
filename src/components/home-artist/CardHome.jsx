import { useEffect, useState } from "react";

import image from "../../assets/image-6.png";

const CardHome = () => {
  return (
    <>
      <div className="mt-3 d-flex justify-content-center">
        <div
          className="card mb-3"
          style={{
            width: "1078px",
            borderRadius: "21px",
            backgroundColor: "#EDEDED",
          }}
        >
          <div className="row g-0">
            <div className="col-md-3 pt-1 ps-2">
              <img
                src={`${image}`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div>
                  <h5 className="card-title">Beignet Cafe</h5>
                </div>
                <p className="card-text">Jl. Thamrin, Jakarta Pusat</p>
                <p className="card-text">
                  Description is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHome;
