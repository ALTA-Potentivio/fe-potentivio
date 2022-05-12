import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardInbox from "../../components/inbox/CardInbox";

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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  if (dataInbox.length === 0) {
    return (
      <div className="text-center">
        <h1>data not found</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          {dataInbox.map((item) => {
            return (
              <div className="pt-5 pb-5 border-top border-bottom" key={item.id}>
                <CardInbox item={item} parentCallback={() => getDataInbox()} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Inbox;
