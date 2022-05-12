import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import image from "../../assets/link-video.png";

const Video = ({ item, parentCallback }) => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [idYoutube, setIdYoutube] = useState("");

  useEffect(() => {
    youtube();
  }, []);

  const youtube = () => {
    let item1 = item.video_url;
    let id = item1.split("=");
    if (id.length > 2) {
      let idy = id[1].split("&");
      setIdYoutube(idy[0]);
    } else {
      setIdYoutube(id[1]);
    }
  };

  const deteleVideo = () => {
    axios
      .delete(`${base_url}/video/artist/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        Swal.fire({
          title: "Sukses",
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "Berhasil",
        });
        parentCallback();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (idYoutube === "") {
    return (
      <div>
        <img src={`${image}`} />
      </div>
    );
  } else {
    return (
      <div>
        <iframe
          width="250"
          height="150"
          src={`https://www.youtube.com/embed/${idYoutube}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <br />
        <button className="btn btn-danger" onClick={() => deteleVideo()}>
          Delete
        </button>
      </div>
    );
  }
};

export default Video;
