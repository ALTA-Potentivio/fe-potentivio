import { useEffect, useState } from "react";
import logo from "../assets/potentivionew1.svg";
import icon from "../assets/icon.svg";
import "../styles/welcome.css";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand
            className="fw-bolder"
            href="#home"
            style={{ color: "#3B4148" }}
          >
            <img
              alt=""
              src={`${logo}`}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Potentivio
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <div className="mt-4 row w-100">
        <div className="col">
          <div className="ms-5 ps-5 pt-5 mt-3">
            <h1 className="fw-bolder ps-4" style={{ color: "#3B4148" }}>
              The New Way <br />
              <span style={{ color: "#53B8D1" }}>Find An Artist </span>To
              Perfome <br />
              At Your Establishment
            </h1>
            <p className="ps-4">
              Hard to find a good artist according to your wishes?
              <br /> Don’t worry because we are here to help you
            </p>
            <p className="ps-4">Choose who you are !</p>
            <div className="d-flex ps-4">
              <div>
                <button type="button" class="button fw-bolder">
                  Cafe Owner
                </button>
              </div>
              <div className="ms-2">
                <button type="button" class="button fw-bolder">
                  Artist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img alt="" src={`${icon}`} />
        </div>
      </div>
    </>
  );
};

export default Welcome;