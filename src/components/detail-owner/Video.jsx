import { useEffect, useState } from "react";

const Video = () => {
  const [idYoutube, setIdYoutube] = useState("");
  useEffect(() => {
    youtube();
  }, []);

  const youtube = () => {
    let item = "https://www.youtube.com/watch?v=m7A03XMyVDM";
    // if (item !== "") {
    let id = item.split("=");
    setIdYoutube(id[1]);

    // }
  };

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
};

export default Video;
