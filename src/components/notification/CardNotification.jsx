import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../../assets/image-3.png";

const CardNotification = ({ item }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    formatPrice();
  }, []);

  const formatPrice = () => {
    let rupiah = 0;
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
      <div className="row">
        <div className="col">
          <div className="d-flex w-100" style={{ height: "80px" }}>
            <img
              src={`${item.avatar}`}
              className="img-fluid rounded-circle"
              alt="..."
            />
            <div className="ms-3 mt-3">
              <h5>{item.artist_name}</h5>
              <small>{item.name_genre}</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center pt-4">
            <h5 className="card-title price text-center pt-2 me-5">
              Rp {price}
            </h5>
            <Link
              to={`/owner/detail-owner/${item.id_artist}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <button className="button-hire">Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNotification;
