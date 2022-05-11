import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";

import ModalEdit from "../../components/profile-artist/ModalEdit";

import Video from "../../components/profile-artist/Video";
import videoImg from "../../assets/link-video.png";

const Profile = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [profileArtist, setProfileArtist] = useState([]);

  const [price, setPrice] = useState(0);
  const [videoYt, setVideoYt] = useState("");

  useEffect(() => {
    setProfile();
  }, []);

  const formatPrice = (data) => {
    let rupiah = 0;
    if (data !== null) {
      let number = data.toString();
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

  const setProfile = () => {
    axios
      .get(`${base_url}/artist/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let data = res.data.data;
        formatPrice(data.price);
        setProfileArtist(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addVideo = () => {
    axios
      .post(
        `${base_url}/video/artist`,
        {
          video_url: videoYt,
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
        setProfile();
      })
      .catch((err) => {
        Swal.fire({
          title: "Gagal",
          text: "Video sudah ada",
          icon: "error",
          confirmButtonText: "Gagal",
        });
      });
  };

  if (profileArtist.length === 0) {
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
                src={`${profileArtist.avatar}`}
                className="img-fluid rounded"
                alt="..."
              />
            </div>
            <div className="col pt-4">
              <h2>{profileArtist.artist_name}</h2>
              <p>{profileArtist.name_category}</p>
              <p>{profileArtist.address}</p>
              <p>{profileArtist.name_genre}</p>
              <div className="d-flex mb-2">
                <p className="pt-2 pe-2">Rating :</p>
                <div>
                  <Rating
                    fillColor={`#53b8d1`}
                    initialValue={profileArtist.rating}
                    readonly
                  />
                  <p>{profileArtist.total_rate} Orang Yang Sudah Menilai</p>
                </div>
                <p className="pt-2 ps-2">{profileArtist.rating}/5</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <ModalEdit
                  item={profileArtist}
                  parentCallback={() => setProfile()}
                />
                <h5 className="card-title price text-center pt-2">
                  Rp {price}
                </h5>
              </div>
            </div>
            <div className="col pt-4">
              No. Rek {profileArtist.account_number}
            </div>
          </div>
          <div className="border-top border-bottom pb-3">
            <h3 className="mt-3">Description</h3>
            <p>{profileArtist.description}</p>
          </div>
          <div className="mt-3">
            <div className="d-flex">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setVideoYt(e.target.value)}
                />
                <label htmlFor="floatingInput">Add link video</label>
              </div>
              <button
                type="button"
                className="button-map ms-3 mt-1"
                onClick={() => addVideo()}
              >
                Add
              </button>
            </div>
            {profileArtist.video_artist.length === 0 ? (
              <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                <img
                  src={`${videoImg}`}
                  className="img-fluid rounded me-4"
                  alt="..."
                />
              </div>
            ) : (
              <div className="container-fluid d-flex flex-grow-1 flex-wrap justify-content-around pt-3 mt-3 mb-5">
                {profileArtist.video_artist.map((item) => {
                  return (
                    <div key={item.id} className="mb-3">
                      <Video item={item} parentCallback={() => setProfile()} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Profile;
