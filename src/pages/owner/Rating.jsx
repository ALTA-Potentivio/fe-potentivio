import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Swal from "sweetalert2";

import image from "../../assets/image-3.png";

const RatingArtist = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const [dataArtist, setDataArtist] = useState([]);
  const params = useParams();
  let navigate = useNavigate();

  // useEffect(() => {
  //   getArtist();
  // }, []);

  // const getArtist = () => {
  //   const { id } = params;
  //   axios
  //     .get(`${base_url}/artist/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setDataArtist(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleRating = (rate) => {
    rate = rate / 20;
    setRating(rate);
  };

  const submit = () => {
    const { id } = params;
    axios
      .put(
        `${base_url}/rating/${id}`,
        {
          rating: rating,
          comment: comment,
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
        navigate("/owner");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h3 className="mb-3">did you enjoy the perform ?</h3>
        <img
          src={`${image}`}
          className="img-fluid rounded-circle mb-3"
          alt="..."
        />
        <br />
        <Rating
          onClick={handleRating}
          initialValue={rating}
          className="mb-3"
          fillColor={`#53b8d1`}
        />
        <div className="d-flex justify-content-center">
          <div className="form-floating input-form" style={{ width: "911px" }}>
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ borderRadius: "21px", height: "203px" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <label htmlFor="floatingInput">Write your comment here</label>
          </div>
        </div>
        <button
          type="button"
          className="button-map mb-5 mt-3"
          onClick={() => submit()}
        >
          RATE
        </button>
      </div>
    </>
  );
};

export default RatingArtist;
