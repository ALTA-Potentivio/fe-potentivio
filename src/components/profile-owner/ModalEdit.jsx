import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Map, { Marker } from "react-map-gl";
import axios from "axios";
import Swal from "sweetalert2";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const ModalEdit = ({ item, parentCallback }) => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [viewState, setViewState] = useState({
    longitude: 106.8296006299729,
    latitude: -6.172645040772892,
    zoom: 14,
  });

  const [ownerName, setOwnerName] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [noRek, setNoRek] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setOwnerName(item.owner);
    setCafeName(item.cafe_name);
    setEmail(item.email);
    setAddress(item.address);
    setPhoneNumber(item.phone_number);
    setOpeningHours(item.opening_hours);
    setNoRek(item.account_number);
    setLongitude(item.longitude);
    setLatitude(item.latitude);
    setDescription(item.description);
  }, []);

  const updateCafeName = (event) => {
    setCafeName(event.target.value);
  };

  const updateOwnerName = (event) => {
    setOwnerName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateAddress = (event) => {
    setAddress(event.target.value);
  };

  const updateLanglat = () => {
    setLongitude(viewState.longitude);
    setLatitude(viewState.latitude);
  };

  const submit = () => {
    var formData = new FormData();
    formData.append("cafe_name", cafeName);
    formData.append("owner", ownerName);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone_number", phoneNumber);
    formData.append("description", description);
    formData.append("opening_hours", openingHours);
    formData.append("longitude", longitude);
    formData.append("latitude", latitude);
    formData.append("account_number", noRek);
    axios
      .put(`${base_url}/cafe/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        Swal.fire({
          title: "Sukses",
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "Berhasil",
        });
        parentCallback();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        type="button"
        className="button-map"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="cafeName"
                      style={{ borderRadius: "21px" }}
                      value={cafeName}
                      onChange={updateCafeName}
                    />
                    <label htmlFor="cafeName">Your cafe name</label>
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
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="ownerName"
                      style={{ borderRadius: "21px" }}
                      value={ownerName}
                      onChange={updateOwnerName}
                    />
                    <label htmlFor="ownerName">Owner cafe’s name</label>
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
                    <label htmlFor="address">Your cafe’s address</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      style={{ borderRadius: "21px" }}
                      value={phoneNumber}
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
                      value={openingHours}
                      onChange={(e) => setOpeningHours(e.target.value)}
                      required
                    />
                    <label htmlFor="openHours">
                      Open Hours (08.00 - 23.00)
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="button"
                    className="button-map mb-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modalMap"
                  >
                    See Maps
                  </button>
                </div>
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="openHours"
                      style={{ borderRadius: "21px" }}
                      value={noRek}
                      onChange={(e) => setNoRek(e.target.value)}
                      required
                    />
                    <label htmlFor="openHours">No. Rekening</label>
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
              <div className="form-floating input-form mb-3 pe-5 w-100">
                <textarea
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  style={{ borderRadius: "21px", height: "100px" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="floatingInput">Description</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => submit()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalMap"
        tabIndex="-1"
        aria-labelledby="modalMapLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalMapLabel">
                Modal Map
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
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
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => updateLanglat()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
