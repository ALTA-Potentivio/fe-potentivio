import { useEffect, useState } from "react";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";

import image from "../../assets/image-3.png";
import video from "../../assets/link-video.png";

const Profile = () => {
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
        <div className="border-top border-bottom pb-3">
          <h3 className="mt-3">Description</h3>
          <p>
            Description is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap
          </p>
        </div>
        <div className="mt-3">
          <div className="form-floating mb-3 input-form">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ borderRadius: "21px" }}
            />
            <label htmlFor="floatingInput">Add link video</label>
          </div>
          <img src={`${video}`} className="img-fluid rounded me-4" alt="..." />
          <img src={`${video}`} className="img-fluid rounded me-4" alt="..." />
          <img src={`${video}`} className="img-fluid rounded me-4" alt="..." />
          <img src={`${video}`} className="img-fluid rounded me-4" alt="..." />
        </div>
      </div>
    </>
  );
};

export default Profile;
