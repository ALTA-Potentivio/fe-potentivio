import { useState } from "react";

const CompleteOwner = () => {
  return (
    <>
      <div className="container mt-3">
        <h1>Almost Done!</h1>
        <p>Complete your profile first</p>
        <form className="needs-validation" novalidate>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  style={{ borderRadius: "21px" }}
                  required
                />
                <label htmlFor="phoneNumber">Your Phone Number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="openHours"
                  style={{ borderRadius: "21px" }}
                  required
                />
                <label htmlFor="openHours">Open Hours</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="button-map mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                See Maps
              </button>
            </div>
            <div className="col">
              <div class="input-group mb-3" style={{ width: "476px" }}>
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile02"
                  style={{ borderRadius: "21px" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  style={{ borderRadius: "21px" }}
                  required
                />
                <label htmlFor="longitude">Longitude</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="longitude"
                  style={{ borderRadius: "21px" }}
                  required
                />
                <label htmlFor="longitude">Longitude</label>
              </div>
            </div>
          </div>
          <div
            className="form-floating input-form mb-3"
            style={{ width: "1050px" }}
          >
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ borderRadius: "21px", height: "100px" }}
            />
            <label htmlFor="floatingInput">Write your comment here</label>
          </div>
          <div className="col-12 pe-5">
            <button className="botton-complete float-end" type="submit">
              Let’s Get It
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompleteOwner;
