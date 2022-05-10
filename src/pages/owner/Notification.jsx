import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardNotification from "../../components/notification/CardNotification";

import image from "../../assets/image-3.png";

const Notification = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [dataNotif, setDataNotif] = useState([]);

  useEffect(() => {
    getNotif();
  }, []);

  const getNotif = () => {
    axios
      .get(`${base_url}/offer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data.data;
        setDataNotif(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dataNotif.length === 0) {
    return (
      <div className="text-center">
        <h1>data not found</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          <div className="text-center mb-5">
            <h3>See who wants to perform!</h3>
          </div>
          {dataNotif.map((item) => {
            return (
              <div className="pt-5 pb-5 border-top border-bottom" key={item.id}>
                <CardNotification item={item} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Notification;
