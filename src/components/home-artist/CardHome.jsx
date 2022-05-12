import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../../assets/placeholder-image.jpg";

const CardHome = ({item}) => {
  return (
    <>
      <div className="mt-3 d-flex justify-content-center">
        <Link
          to={`/artist/detail-artist/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="card mb-3"
            style={{
              width: "1078px",
              borderRadius: "21px",
              backgroundColor: "#EDEDED",
            }}
          >
            <div className="row g-0">
              <div className="col-md-3 pt-1 ps-2">
                {item.avatar === null || item.avatar === "" ? (
                  <img
                    src={`${image}`}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                ) : (
                  <img
                    src={`${item.avatar}`}
                    className="img-fluid rounded-start rounded-3"
                    alt="..."
                  />
                )}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div>
                    <h5 className="card-title">{item.cafe_name}</h5>
                  </div>
                  <p className="card-text">{item.address}</p>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardHome;
