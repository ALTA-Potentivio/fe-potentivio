import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const CompleteOwner = () => {
  let navigate = useNavigate();
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [viewState, setViewState] = useState({
    longitude: 106.8296006299729,
    latitude: -6.172645040772892,
    zoom: 14,
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [avatar, setAvatar] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");

  const updateLanglat = () => {
    setLongitude(viewState.longitude);
    setLatitude(viewState.latitude);
  };

  const submit = () => {
    var formData = new FormData();
    formData.append("phone_number", phoneNumber);
    formData.append("description", description);
    formData.append("opening_hours", openingHours);
    formData.append("avatar", avatar);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    axios
      .put(`${base_url}/cafe/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/owner");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Almost Done!</h1>
        <p>Complete your profile first</p>
        <form className="needs-validation" noValidate>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  onChange={(e) => setOpeningHours(e.target.value)}
                  required
                />
                <label htmlFor="openHours">Open Hours (08.00 - 23.00)</label>
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
              <div className="input-group mb-3" style={{ width: "476px" }}>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setAvatar(e.target.files[0])}
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
                  value={longitude}
                  onChange={() => setLongitude()}
                  disabled
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
                  value={latitude}
                  onChange={() => setLatitude()}
                  disabled
                />
                <label htmlFor="longitude">Latitude</label>
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
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <div className="col-12 pe-5">
            <button
              className="botton-complete float-end"
              type="submit"
              onClick={() => submit()}
            >
              Let’s Get It
            </button>
          </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal Map
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="sidebar">
                <p>
                  Longitude: {viewState.longitude} | Latitude:{" "}
                  {viewState.latitude} | Zoom: {viewState.zoom}
                </p>
              </div>
              <Map
                {...viewState}
                style={{ width: 450, height: 300 }}
                onMove={(evt) => setViewState(evt.viewState)}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
              >
                <Marker
                  longitude={viewState.longitude}
                  latitude={viewState.latitude}
                  color="red"
                />
              </Map>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="button-map"
                data-bs-dismiss="modal"
                onClick={() => updateLanglat()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteOwner;
