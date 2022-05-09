import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "../../styles/login.css";

import logo from "../../assets/logo.svg";

const RegisterArtist = () => {

  const base_url = useSelector((state) => state.base_url);
  let navigate = useNavigate();
  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const updateArtistName = (event) => {
    setArtistName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateAddress = (event) => {
    setAddress(event.target.value);
  };

  const submit = () => {
    axios
    .post(`${base_url}/artist`, {
      artist_name: artistName,
      email: email,
      password: password,
      address: address,
    })
    .then((res) => {
      const data = res.data;
      Swal.fire({
        title: "Sukses",
        text: `${data.message}`,
        icon: "success",
        confirmButtonText: "Berhasil",
      });
      navigate("/");
    })
    .catch((err) => {
      Swal.fire({
        title: "Gagal",
        text: `Incomplete data`,
        icon: "error",
        confirmButtonText: "Gagal",
      });
    });
  };

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
                id="artistName"
                style={{ borderRadius: "21px" }}
                value={artistName}
                onChange={updateArtistName}
              />
              <label htmlFor="floatingInput">Artist name</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="email"
                className="form-control"
                id="email"
                style={{ borderRadius: "21px" }}
                value={email}
                onChange={updateEmail}
              />
              <label htmlFor="floatingInput">Your email</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="password"
                className="form-control"
                id="password"
                style={{ borderRadius: "21px" }}
                value={password}
                onChange={updatePassword}
              />
              <label htmlFor="floatingInput">Your password</label>
            </div>
            <div className="form-floating mb-3 input-form">
              <input
                type="text"
                className="form-control"
                id="address"
                style={{ borderRadius: "21px" }}
                value={address}
                onChange={updateAddress}
              />
              <label htmlFor="floatingInput">Your address</label>
            </div>
          </form>
          <div className="mt-5">
            <button 
              type="button"
              className="button-login fw-bolder"
              onClick={() => submit()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterArtist;
