import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CompleteArtist = () => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");
  const [price, setPrice] = useState("");
  const [noRek, setNoRek] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [valueCtgy, setValueCtgy] = useState("");
  const [genre, setGenre] = useState([]);
  const [valueGenre, setValueGenre] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    getCategory();
    getGanre();
  }, []);

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

  const submit = () => {
    var formData = new FormData();
    formData.append("id_category", valueCtgy);
    formData.append("id_genre", valueGenre);
    formData.append("phone_number", phoneNumber);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("account_number", noRek);
    formData.append("avatar", avatar);
    axios
      .put(`${base_url}/artist/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        navigate("/artist");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Almost Done!</h1>
        <p>Complete your profile first</p>
        <form className="needs-validation" noValidate>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <label htmlFor="phoneNumber">Your Phone Number</label>
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3" style={{ width: "476px" }}>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <label htmlFor="price">Price</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3 input-form">
                <input
                  type="text"
                  className="form-control"
                  id="debit"
                  style={{ borderRadius: "21px" }}
                  onChange={(e) => setNoRek(e.target.value)}
                  required
                />
                <label htmlFor="debit">No. Rekening</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3 input-form">
                  <select
                    id="category"
                    className="form-select form-select-lg me-5"
                    aria-label=".form-select-lg example"
                    style={{
                      height: "65px",
                      borderRadius: "21px",
                    }}
                    value={valueCtgy}
                    onChange={(e) => setValueCtgy(e.target.value)}
                  >
                    <option value="">Category</option>
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
              </div>
              <div className="col">
                <div className="form-floating mb-3 ms-3 input-form">
                  <select
                    id="genre"
                    className="form-select form-select-lg"
                    aria-label=".form-select-lg example"
                    style={{
                      height: "65px",
                      borderRadius: "21px",
                    }}
                    value={valueGenre}
                    onChange={(e) => setValueGenre(e.target.value)}
                  >
                    <option value="">Genre</option>
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
              </div>
            </div>
            <div className="form-floating input-form mb-3 pe-5 w-100">
              <textarea
                type="text"
                className="form-control"
                id="floatingInput"
                style={{ borderRadius: "21px", height: "100px" }}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="floatingInput">Description</label>
            </div>
          </div>
          <div className="col-12 pe-5">
            <button
              className="botton-complete float-end"
              type="submit"
              onClick={() => submit()}
            >
              Let’s Get It
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompleteArtist;
