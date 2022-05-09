import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";
import Video from "../../components/detail-owner/Video";

import axios from "axios";

const Detail = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const params = useParams();
  let navigate = useNavigate();
  const [detail, setDetail] = useState([]);
  const [price, setPrice] = useState(0);
  const [valueCalendar, setValueCalendar] = useState(new Date());

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { id } = params;
    await axios
      .get(`${base_url}/artist/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDetail(res.data.data);
        formatPrice(res.data.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatPrice = (item) => {
    let rupiah = 0;
    let number = item.toString();
    let sisa = number.length % 3;
    rupiah = number.substr(0, sisa);
    let ribuan = number.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    setPrice(rupiah);
  };

  const hire = () => {
    const { id } = params;
    const temp = valueCalendar.toISOString();
    const date = temp.split("T");
    console.log(date);
    axios
      .post(
        `${base_url}/hire/${id}`,
        {
          date: date[0],
        },
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
        navigate("/owner");
      })
      .catch((err) => {
        Swal.fire({
          title: "Gagal",
          text: "gagal hire artist",
          icon: "error",
          confirmButtonText: "Gagal",
        });
      });
  };

  if (detail.length === 0) {
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
              <img
                src={`${detail.avatar}`}
                className="img-fluid rounded"
                alt="..."
              />
            </div>
            <div className="col pt-4">
              <h2 className="text-capitalize">{detail.artist_name}</h2>
              <p className="text-capitalize pt-2">{detail.address}</p>
              <div className="d-flex mb-2">
                <p className="pt-2 pe-2">Rating :</p>
                <div>
                  <Rating
                    fillColor={`#53b8d1`}
                    initialValue={detail.rating}
                    readonly
                  />
                  <p>{detail.total_rate} Orang Yang Sudah Menilai</p>
                </div>
                <p className="pt-2 ps-2">{detail.rating}/5</p>
              </div>
              <div className="d-flex">
                <h5 className="card-title price text-center pt-2">
                  Rp {price}
                </h5>
                <button
                  className="button-hire"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Hire
                </button>
              </div>
            </div>
          </div>
          <div className="border-top border-bottom">
            <h3 className="mt-3">Description</h3>
            <p className="text-capitalize">{detail.description}</p>
            <div className="mb-5 d-flex justify-content-around">
              {detail.video_artist.length === 0 ? (
                <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                  <h1>No schedule yet</h1>
                </div>
              ) : (
                <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                  {detail.video_artist.map((item) => {
                    return (
                      <div key={item.id}>
                        <Video item={item} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 border-bottom">
            <h3>Not available in :</h3>
            {detail.not_available.length === 0 ? (
              <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                <h1>No schedule yet</h1>
              </div>
            ) : (
              <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                <CardAvailable />
              </div>
            )}
          </div>
          <div className="mt-3 mb-5">
            <h3>Perfome history</h3>
            {detail.hire_history.length === 0 ? (
              <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                <h1>No history yet</h1>
              </div>
            ) : (
              <CardPerforme />
            )}
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
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Calendar onChange={setValueCalendar} value={valueCalendar} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="button-map"
                  data-bs-dismiss="modal"
                  onClick={() => hire()}
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

export default Detail;
