import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Map, { Marker } from "react-map-gl";
import axios from "axios";
import Swal from "sweetalert2";

import image from "../../assets/placeholder-image.jpg";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Detail = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const params = useParams();
  let navigate = useNavigate();
  const [dataDetail, setDataDetail] = useState([]);

  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 14,
  });

  useEffect(() => {
    getDetail();
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

  const getDetail = () => {
    const { id } = params;
    axios
      .get(`${base_url}/cafe/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.data;
        setMap(data.longitude, data.latitude);
        setDataDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submit = () => {
    const { id } = params;
    axios
      .post(
        `${base_url}/offer/${id}`,
        { id: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        Swal.fire({
          title: "Sukses",
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "Berhasil",
        });
        navigate("/artist");
      })
      .catch((err) => {
        Swal.fire({
          title: "Gagal",
          text: "gagal apply",
          icon: "error",
          confirmButtonText: "Gagal",
        });
      });
  };

  if (dataDetail.length === 0) {
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
            <div className="col-3">
              {dataDetail.avatar === null || dataDetail.avatar === "" ? (
                <img
                  src={`${image}`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              ) : (
                <img
                  src={`${dataDetail.avatar}`}
                  className="img-fluid rounded"
                  alt="..."
                />
              )}
            </div>
            <div className="col-6">
              <button
                className="float-end button-hire"
                onClick={() => submit()}
              >
                Apply
              </button>
              <h2 className="text-capitalize">{dataDetail.cafe_name}</h2>
              <p className="text-capitalize">by {dataDetail.owner}</p>
              <p className="text-capitalize">{dataDetail.address}</p>
              <p className="text-capitalize">{dataDetail.phone_number}</p>
              <p className="text-capitalize">OPEN 9.30 - 21.00</p>
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
            <p className="text-capitalize">{dataDetail.description}</p>
            <div className="mb-5">
              {dataDetail.ImageCafe.length === 0 ? (
                <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                  <h1>No image yet</h1>
                </div>
              ) : (
                <>
                  {dataDetail.ImageCafe.map((item) => {
                    return (
                      <div key={item.ID}>
                        <img
                          src={`${item.image_url}`}
                          className="img-fluid rounded me-4"
                          alt="..."
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Detail;
