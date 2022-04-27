import React from "react";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";
import { useNavigate } from "react-router-dom";
import logo from "../assets/potentivionew1.svg";
import icon from "../assets/icon.svg";
import "../styles/welcome.css";

import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Welcome = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const loginArtist = () => {
    dispatch(reduxAction("status", "artist"));
    navigate("/login");
  };

  const loginOwner = () => {
    dispatch(reduxAction("status", "owner"));
    navigate("/login");
  };

  return (
    <div className="h-100">
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
      <div className="container py-4">
        <div className="row w-100 gy-5">
          <div className="col">
            <div className="pt-5 mt-3">
              <h1 className="fw-bolder" style={{ color: "#3B4148" }}>
                The New Way <br />
                <span style={{ color: "#53B8D1" }}>Find An Artist </span>To
                Perfome <br />
                At Your Establishment
              </h1>
              <p className="">
                Hard to find a good artist according to your wishes?
                <br /> Don’t worry because we are here to help you
              </p>
              <p className="">Choose who you are !</p>
              <div className="d-flex">
                <div>
                  <button
                    type="button"
                    className="button fw-bolder"
                    onClick={loginOwner}
                  >
                    Cafe Owner
                  </button>
                </div>
                <div className="ms-2">
                  <button
                    type="button"
                    className="button fw-bolder"
                    onClick={loginArtist}
                  >
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
      </div>
    </div>
  );
};

export default Welcome;
