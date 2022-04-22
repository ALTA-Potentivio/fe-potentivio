import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const Home = () => {
  return (
    <>
      <div className="border border-start-0 border-end-0 mt-3">
        <div className="p-3 d-flex justify-content-evenly">
          <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Price</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="form-floating input-form" style={{ width: "150px" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ width: "150px", height: "50px", borderRadius: "21px" }}
            />
            <label htmlFor="floatingInput">Address</label>
          </div>
          <div>
            <button type="button" className="fw-bolder button-find">
              Find
            </button>
          </div>
        </div>
      </div>
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
                  <h5
                    className="card-title float-end price text-center pt-2"
                  >
                    Rp 300.000
                  </h5>
                  <h5 className="card-title">Sunday Band</h5>
                </div>
                <p className="card-text">Band - Acoustic</p>
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

export default Home;
