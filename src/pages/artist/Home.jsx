import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import CardHome from "../../components/home-artist/CardHome";

const Home = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");

  const [dataOwner, setDataOwner] = useState([]);

  useEffect(() => {
    getOwner();
  }, []);

  const getOwner = () => {
    axios
      .get(`${base_url}/cafe`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataOwner(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {dataOwner.length === 0 ? (
        <div className="text-center">
          <h1>data not found</h1>
        </div>
      ) : (
        <div>
          {dataOwner.map((item) => {
            return (
              <div key={item.id}>
                <CardHome item={item} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
