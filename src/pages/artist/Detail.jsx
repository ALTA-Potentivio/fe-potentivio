import { useEffect, useState } from "react";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";

import image from "../../assets/image-6.png";
import album from "../../assets/image-5.png";
import peta from "../../assets/image-7.png";

const Detail = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col-3">
            <img src={`${image}`} className="img-fluid rounded" alt="..." />
          </div>
          <div className="col-6">
            <button className="float-end button-hire">Apply</button>
            <h2>Baignet Cafe</h2>
            <p>by Tono Subagyo</p>
            <p>Jl. Thamrin, Jakarta Pusat</p>
            <p>0858693423422</p>
            <p>OPEN 9.30 - 21.00</p>
          </div>
          <div className="col">
            <img
              src={`${peta}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
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
              src={`${album}`}
              className="img-fluid rounded me-4"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
