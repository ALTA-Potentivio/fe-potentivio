import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardHire from "../../components/hire/CardHire";

const HireStatus = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const [dataHire, setDataHire] = useState([]);

  useEffect(() => {
    getHire();
  }, []);

  setTimeout(() => {
    getHire();
  }, 100000);

  const getHire = () => {
    axios
      .get(`${base_url}/hire/cafe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setDataHire(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dataHire.length === 0) {
    return (
      <div className="text-center">
        <h1>data not found</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          {dataHire.map((item) => {
            return (
              <div className="pt-5 pb-5 border-top border-bottom" key={item.id}>
                <CardHire item={item} parentCallback={() => getHire()} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default HireStatus;
