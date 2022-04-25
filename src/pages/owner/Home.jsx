import { useEffect, useState } from "react";

import CardHome from "../../components/home-owner/CardHome"
import Header from "../../components/HeaderOwner"


const Home = () => {
  return (
    <>
      <Header />
      <div className="border border-start-0 border-end-0 mt-3">
        <div className="p-3 d-flex justify-content-center">
          <select
            className="form-select form-select-lg me-5"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg me-5"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select
            className="form-select form-select-lg me-5"
            aria-label=".form-select-lg example"
            style={{ width: "150px", height: "50px", borderRadius: "21px" }}
          >
            <option defaultValue>Price</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div
            className="form-floating input-form me-5"
            style={{ width: "150px" }}
          >
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
      <CardHome />
      <CardHome />
    </>
  );
};

export default Home;
