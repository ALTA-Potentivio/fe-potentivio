import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import logo from "../../assets/logo.svg";

const Register = () => {
  return (
    <>
      <div className="row w-100">
        <div className="col text-center mt-5">
          <img alt="" src={`${logo}`} className="image" />
        </div>
        <div className="col mt-5">
          <h2 className="fw-bolder" style={{ color: "#3B4148" }}>
            Register Here
          </h2>
          <p className="fw-lighter mb-5">Regeister as an artist</p>
          <form>
            <div className="form-floating mb-3 input-form">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                style={{ borderRadius: "21px" }}
              />
              <label htmlFor="floatingInput">Artist name</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                style={{ borderRadius: "21px" }}
              />
              <label htmlFor="floatingInput">Your email</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="password"
                className="form-control"
                id="floatingInput"
                style={{ borderRadius: "21px" }}
              />
              <label htmlFor="floatingInput">Your password</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                style={{ borderRadius: "21px" }}
              />
              <label htmlFor="floatingInput">Your address</label>
            </div>
          </form>
          <div className="mt-5">
            <button type="button" className="button-login fw-bolder">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
