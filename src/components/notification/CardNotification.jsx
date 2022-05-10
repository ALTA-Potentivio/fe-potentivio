import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const CardNotification = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="d-flex w-100" style={{ height: "80px" }}>
            <img
              src={`${image}`}
              className="img-fluid rounded-circle"
              alt="..."
            />
            <div className="ms-3 mt-3">
              <h5>Sunday Band</h5>
              <small>22 Desember 2022</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center pt-4">
            <h5 className="card-title price text-center pt-2 me-5">
              Rp 300.000
            </h5>
            <button className="button-hire">Detail</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotification;
