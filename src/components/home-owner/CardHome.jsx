import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../../assets/placeholder-image.jpg";

const CardHome = ({ item }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    formatPrice();
  }, [])

  const formatPrice = () => {
    let rupiah = 0
    if (item.price !== null) {
      let number = item.price.toString();
      let sisa = number.length % 3;
      rupiah = number.substr(0, sisa);
      let ribuan = number.substr(sisa).match(/\d{3}/g);

      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
    }

    setPrice(rupiah);
  };

  return (
    <>
      <div className="mt-3 d-flex justify-content-center">
        <Link
          to={`/owner/detail-owner/${item.id}`}
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
                {item.avatar === null ? (
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
                    {item.price === null ? (
                      <h5 className="card-title float-end price text-center pt-2">
                        Rp 0
                      </h5>
                    ) : (
                      <h5 className="card-title float-end price text-center pt-2">
                        Rp {price}
                      </h5>
                    )}
                    <h5 className="card-title text-capitalize">
                      {item.artist_name}
                    </h5>
                  </div>
                  <p className="card-text">
                    {item.catagory.name_catagory} - {item.genre.name_genre}
                  </p>
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
