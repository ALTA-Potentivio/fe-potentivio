import { useEffect, useState } from "react";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";

import image from "../../assets/image-3.png";
import video from "../../assets/link-video.png";

const Detail = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col-3">
            <img src={`${image}`} className="img-fluid rounded" alt="..." />
          </div>
          <div className="col pt-4">
            <h2>Sunday Band</h2>
            <p>Jakarta</p>
            <div className="d-flex">
              <h5 className="card-title price text-center pt-2">Rp 300.000</h5>
              <button className="button-hire">Hire</button>
            </div>
          </div>
        </div>
        <div className="border-top border-bottom">
          <h3 className="mt-3">Description</h3>
          <p>
            Description is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
          <div className="mb-5">
            <img
              src={`${video}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
            <img
              src={`${video}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
            <img
              src={`${video}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
            <img
              src={`${video}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
          </div>
        </div>
        <div className="mt-3 border-bottom">
          <h3>Not available in :</h3>
          <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
            <CardAvailable />
            <CardAvailable />
            <CardAvailable />
            <CardAvailable />
            <CardAvailable />
            <CardAvailable />
          </div>
        </div>
        <div className="mt-3">
          <h3>Perfome history</h3>
          <CardPerforme />
          <CardPerforme />
          <CardPerforme />
        </div>
      </div>
    </>
  );
};

export default Detail;
