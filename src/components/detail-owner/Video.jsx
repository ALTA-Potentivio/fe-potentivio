import { useEffect, useState } from "react";

import image from "../../assets/link-video.png";

const Video = ({ item }) => {
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
      console.log();
    }
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
      </div>
    );
  }
};

export default Video;
