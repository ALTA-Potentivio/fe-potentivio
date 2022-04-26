import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reduxAction } from "../../utils/redux/actions/action";
import axios from "axios";

import CardHome from "../../components/home-owner/CardHome";

const Home = () => {
  const base_url = useSelector((state) => state.base_url);
  const dataArtist = useSelector((state) => state.dataArtist);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [category, setCategory] = useState([]);
  const [valueCtgy, setValueCtgy] = useState("all");
  const [genre, setGenre] = useState([]);
  const [valueGenre, setValueGenre] = useState("all");
  const [price, setPrice] = useState([
    {
      value: "asc",
      name: "Ascending",
    },
    {
      value: "desc",
      name: "Descending",
    },
  ]);
  const [valuePrice, setValuePrice] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    getArtist();
    getCategory();
    getGanre();
  }, []);

  const getArtist = () => {
    axios
      .get(`${base_url}/artist?price=desc&address=${address}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(reduxAction("setArtist", res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategory = () => {
    axios
      .get(`${base_url}/category`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGanre = () => {
    axios
      .get(`${base_url}/genre`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGenre(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const find = () => {
    if (valueCtgy === "all" && valueGenre === "all") {
      axios
        .get(`${base_url}/artist?price=${valuePrice}&address=${address}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(reduxAction("setArtist", res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (valueCtgy === "all") {
      axios
        .get(
          `${base_url}/artist?id_genre=${valueGenre}&price=${valuePrice}&address=${address}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          dispatch(reduxAction("setArtist", res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (valueGenre === "all") {
      axios
        .get(
          `${base_url}/artist?id_catagory=${valueCtgy}&price=${valuePrice}&address=${address}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          dispatch(reduxAction("setArtist", res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `${base_url}/artist?id_catagory=${valueCtgy}&id_genre=${valueGenre}&price=${valuePrice}&address=${address}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          dispatch(reduxAction("setArtist", res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      <div className="border border-start-0 border-end-0 mt-3">
        <div className="p-3 d-flex justify-content-center">
          <div className="form-floating">
            <select
              id="category"
              className="form-select form-select-lg me-5"
              aria-label=".form-select-lg example"
              style={{ width: "160px", height: "65px", borderRadius: "21px" }}
              value={valueCtgy}
              onChange={(e) => setValueCtgy(e.target.value)}
            >
              <option value="all">all</option>
              {category.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name_catagory}
                  </option>
                );
              })}
            </select>
            <label htmlFor="category">Category</label>
          </div>
          <div className="form-floating">
            <select
              id="genre"
              className="form-select form-select-lg me-5"
              aria-label=".form-select-lg example"
              style={{ width: "160px", height: "65px", borderRadius: "21px" }}
              value={valueGenre}
              onChange={(e) => setValueGenre(e.target.value)}
            >
              <option value="all">all</option>
              {genre.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name_genre}
                  </option>
                );
              })}
            </select>
            <label htmlFor="ganre">Ganre</label>
          </div>
          <div className="form-floating">
            <select
              id="price"
              className="form-select form-select-lg me-5"
              aria-label=".form-select-lg example"
              style={{ width: "160px", height: "65px", borderRadius: "21px" }}
              value={valuePrice}
              onChange={(e) => setValuePrice(e.target.value)}
            >
              {price.map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <label htmlFor="price">Price</label>
          </div>
          <div className="input-form me-5 mt-2" style={{ width: "160px" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              style={{ width: "160px", height: "50px", borderRadius: "21px" }}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <button type="button" className="fw-bolder button-find mt-2" onClick={() => find()}>
              Find
            </button>
          </div>
        </div>
      </div>
      {dataArtist.map((item) => {
        return (
          <div key={item.id}>
            <CardHome item={item} />
          </div>
        );
      })}
    </>
  );
};

export default Home;
