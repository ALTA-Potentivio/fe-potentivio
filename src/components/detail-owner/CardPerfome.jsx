import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const CardPerforme = () => {
  return (
    <>
      <div className="d-flex w-100" style={{ height: "80px" }}>
        <img src={`${image}`} className="img-fluid rounded-circle" alt="..." />
        <div className="ms-3 mt-3">
          <p>
            <h5>Bougnet Cafe</h5>
            <small>Monday, 27 April 2022</small>
          </p>
        </div>
      </div>
      <p className="mt-3">
        Description is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap
      </p>
    </>
  );
};

export default CardPerforme;
