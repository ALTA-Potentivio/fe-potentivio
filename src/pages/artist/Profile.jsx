import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import CardAvailable from "../../components/detail-owner/CardAvailable";
import CardPerforme from "../../components/detail-owner/CardPerfome";

import image from "../../assets/image-3.png";
import video from "../../assets/link-video.png";

const Profile = () => {

  const base_url = useSelector((state) => state.base_url);
  const [profileArtist, setProfileArtist] = useState([]);
  const token = localStorage.getItem("token");

  const [imageArtist, setImageArtist] = useState("");
  const [avatar, setAvatar] = useState("");

  // const [price, setPrice] = useState(0);

  useEffect(() => {
    setProfile();
  }, []);
  
  // const formatPrice = (data) => {
  //   let rupiah = 0
  //   if (data.price !== null) {
  //     let number = data.price.toString();
  //     let sisa = number.length % 3;
  //     rupiah = number.substr(0, sisa);
  //     let ribuan = number.substr(sisa).match(/\d{3}/g);

  //     if (ribuan) {
  //       let separator = sisa ? "." : "";
  //       rupiah += separator + ribuan.join(".");
  //     }
  //   }

  //   setPrice(rupiah);
  // };

  const setProfile = () => {
    axios
      .get(`${base_url}/artist/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.data;
        console.log(data);
        // formatPrice(data.price)
        setProfileArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row mb-3">
          <div className="col-3">
            <img src={`${profileArtist.avatar}`}
            className="img-fluid rounded" alt="..." />
          </div>
          <div className="col pt-4">
            <h2>{profileArtist.artist_name}</h2>
            <p>{profileArtist.name_category}</p>
            <p>{profileArtist.address}</p>
            <p>{profileArtist.name_genre}</p>
            <div className="d-flex">
              <h5 className="card-title price text-center pt-2">Rp 300.000</h5>
            </div>
          </div>
        </div>
        <div className="border-top border-bottom pb-3">
          <h3 className="mt-3">Description</h3>
          <p>
            {profileArtist.description}
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
