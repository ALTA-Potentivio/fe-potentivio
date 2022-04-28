import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";
import Video from "../../components/detail-owner/Video";

import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

const Detail = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const params = useParams();
  const [detail, setDetail] = useState([]);
  const [price, setPrice] = useState(0);

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
        console.log(res);
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
              <p className="text-capitalize">{detail.address}</p>
              <div className="d-flex">
                <h5 className="card-title price text-center pt-2">
                  Rp {price}
                </h5>
                <button className="button-hire">Hire</button>
              </div>
            </div>
          </div>
          <div className="border-top border-bottom">
            <h3 className="mt-3">Description</h3>
            <p className="text-capitalize">{detail.description}</p>
            <div className="mb-5 d-flex justify-content-around">
              <Video />
              <Video />
            </div>
          </div>
          <div className="mt-3 border-bottom">
            <h3>Not available in :</h3>
            <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
              <CardAvailable />
            </div>
          </div>
          <div className="mt-3 mb-5">
            <h3>Perfome history</h3>
            <CardPerforme />
          </div>
        </div>
      </>
    );
  }
};

export default Detail;
