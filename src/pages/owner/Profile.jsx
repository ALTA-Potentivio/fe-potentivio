import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Map, { Marker } from "react-map-gl";
import axios from "axios";

import image from "../../assets/image-6.png";
import album from "../../assets/image-5.png";
import peta from "../../assets/image-7.png";
import addImage from "../../assets/Group-10.png";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Profile = () => {
  const base_url = useSelector((state) => state.base_url);
  const profileOwner = useSelector((state) => state.profileOwner);
  const token = localStorage.getItem("token");
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 14,
  });

  useEffect(() => {
    setProfile();
    setMap();
  }, []);

  const setMap = (long, lat) => {
    if (long != undefined) {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col-3">
            <img src={`${image}`} className="img-fluid rounded" alt="..." />
          </div>
          <div className="col-4">
            <h2>{profileOwner.cafe_name}</h2>
            <p>by {profileOwner.owner}</p>
            <p>{profileOwner.address}</p>
            <p>{profileOwner.phone_number}</p>
            <p>OPEN 9.30 - 21.00</p>
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
            <img
              src={`${album}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
            <img
              src={`${addImage}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
