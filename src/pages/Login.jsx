import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/login.css";

import logo from "../assets/logo.svg";

const Login = () => {
  let navigate = useNavigate();
  const status = useSelector((state) => state.status);
  const base_url = useSelector((state) => state.base_url);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (status === "artist") {
      axios
        .post(`${base_url}/login/artist`, {
          email: email,
          password: password,
        })
        .then((res) => {
          const data = res.data;
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("id", data.data.id_artist);
          if (data.data.status_profile === "not complete") {
            navigate("/complete-artist");
          } else {
            navigate("/artist");
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Gagal",
            text: `Incomplete data`,
            icon: "error",
            confirmButtonText: "Gagal",
          });
        });
    } else {
      axios
        .post(`${base_url}/login/cafe-owner`, {
          email: email,
          password: password,
        })
        .then((res) => {
          const data = res.data;
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("id", data.data.id_cafe);
          if (data.data.status_profile === "not complete") {
            navigate("/complete-owner");
          } else {
            navigate("/owner");
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Gagal",
            text: `Incomplete data`,
            icon: "error",
            confirmButtonText: "Gagal",
          });
        });
    }
  };

  return (
    <>
      <div className="row w-100">
        <div className="col text-center mt-5">
          <img alt="" src={`${logo}`} className="image" />
        </div>
        <div className="col mt-5">
          <h2 className="fw-bolder" style={{ color: "#3B4148" }}>
            Log In to continue
          </h2>
          <p className="fw-lighter mb-5">
            Please log in using that account has
            <br /> registered on the website.
          </p>
          <form>
            <div className="mb-5 input-form">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="input form-control"
                style={{ borderRadius: "21px" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 input-form">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control input"
                style={{ borderRadius: "21px" }}
                id="exampleInputPassword1"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <div className="mt-5">
            <button
              type="button"
              className="button-login fw-bolder"
              onClick={() => submit()}
            >
              Log In to My Acount
            </button>
          </div>
          {status === "artist" ? (
            <div className="ps-3 mt-3">
              <p>
                Don’t have any acount yet ?{" "}
                <Link to="/register-artist">
                  <span style={{ color: "#53b8d1" }}>Register Here</span>
                </Link>
              </p>
            </div>
          ) : (
            <div className="ps-3 mt-3">
              <p>
                Don’t have any acount yet ?{" "}
                <Link to="/register-owner">
                  <span style={{ color: "#53b8d1" }}>Register Here</span>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
