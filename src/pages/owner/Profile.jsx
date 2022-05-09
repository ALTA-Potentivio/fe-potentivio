import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Map, { Marker } from "react-map-gl";
import axios from "axios";
import Swal from "sweetalert2";

import ModalEdit from "../../components/profile-owner/ModalEdit";

import album from "../../assets/image-5.png";
import addImage from "../../assets/Group-10.png";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Profile = () => {
  const base_url = useSelector((state) => state.base_url);
  const [profileOwner, setProfileOwner] = useState([]);
  const token = localStorage.getItem("token");
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 14,
  });

  const [imageCafe, setImageCafe] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setProfile();
    setMap();
  }, []);

  const setMap = (long, lat) => {
    if (long !== undefined) {
      let viewState = {
        longitude: long,
        latitude: lat,
        zoom: 14,
      };
      setViewState(viewState);
    }
  };

  const setProfile = () => {
    axios
      .get(`${base_url}/cafe/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.data;
        setMap(data.longitude, data.latitude);
        setProfileOwner(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postImage = () => {
    var formData = new FormData();
    formData.append("image_url", imageCafe);
    axios
      .post(`${base_url}/image/cafe`, formData, {
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
        setProfile();
      });
  };

  const updateImage = () => {
    var formData = new FormData();
    formData.append("avatar", avatar);
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
        setProfile();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (profileOwner.length === 0) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mt-3">
          <div className="row mb-3">
            <div className="col-2 position-relative me-5">
              <img
                src={`${profileOwner.avatar}`}
                className="img-fluid rounded position-absolute top-50 start-50 translate-middle"
                alt="..."
              />
              <i
                className="bi bi-pencil-square position-absolute bottom-0 end-0"
                data-bs-toggle="modal"
                data-bs-target="#modalImage"
              ></i>
            </div>
            <div className="col-4">
              <h2 className="text-capitalize">{profileOwner.cafe_name}</h2>
              <p className="text-capitalize">by {profileOwner.owner}</p>
              <p className="text-capitalize">{profileOwner.address}</p>
              <p>{profileOwner.phone_number}</p>
              <p>OPEN 9.30 - 21.00</p>
              <p>No Rekening: {profileOwner.account_number}</p>
              <ModalEdit
                item={profileOwner}
                parentCallback={() => setProfile()}
              />
            </div>
            <div className="col">
              <Map
                {...viewState}
                // onMove={(evt) => console.log(evt)}
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
          </div>
          <div className="border-top border-bottom">
            <h3 className="mt-3">Description</h3>
            <p>{profileOwner.description}</p>
            <div className="mb-5">
              {profileOwner.ImageCafe.length === 0 ? (
                <></>
              ) : (
                <img
                  src={`${album}`}
                  className="img-fluid rounded me-4"
                  alt="..."
                />
              )}
              <img
                src={`${addImage}`}
                className="img-fluid rounded me-4"
                alt="..."
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
          </div>
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
                  Add Image
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3" style={{ width: "476px" }}>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    style={{ borderRadius: "21px" }}
                    onChange={(e) => setImageCafe(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="button-map"
                  data-bs-dismiss="modal"
                  onClick={() => postImage()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modalImage"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Change Image
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => updateImage()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Profile;
