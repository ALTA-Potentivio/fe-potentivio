import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardInbox from "../../components/inbox/CardInbox";

import image from "../../assets/image-3.png";

const Inbox = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [dataInbox, setDataInbox] = useState([]);

  useEffect(() => {
    getDataInbox();
  }, []);

  const getDataInbox = () => {
    axios
      .get(`${base_url}/hire/artist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setDataInbox(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardInbox />
        </div>
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardInbox />
        </div>
      </div>
    </>
  );
};

export default Inbox;
