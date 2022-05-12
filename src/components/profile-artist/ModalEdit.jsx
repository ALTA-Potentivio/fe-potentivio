import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const ModalEdit = ({ item, parentCallback }) => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  
  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [noRek, setNoRek] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [valueCtgy, setValueCtgy] = useState("");
  const [genre, setGenre] = useState([]);
  const [valueGenre, setValueGenre] = useState("");

  useEffect(() => {
    getCategory();
    getGanre();
    setArtistName(item.artist_name);
    setEmail(item.email);
    setAddress(item.address);
    setPhoneNumber(item.phone_number);
    setDescription(item.description);
    setPrice(item.price);
    setNoRek(item.account_number);
    setValueCtgy(item.id_catagory);
    setValueGenre(item.id_genre);
  }, []);

  const updateArtistName = (event) => {
    setArtistName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateAddress = (event) => {
    setAddress(event.target.value);
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

  const submit = () => {
    var formData = new FormData();
    formData.append("artist_name", artistName);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone_number", phoneNumber);
    formData.append("description", description);
    formData.append("account_number", noRek);
    formData.append("id_category", valueCtgy);
    formData.append("id_genre", valueGenre);
    axios
      .put(`${base_url}/artist/profile`, formData, {
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

  return (
    <div>
      <button
        type="button"
        className="button-map"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Profile
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="cafeName"
                      style={{ borderRadius: "21px" }}
                      value={artistName}
                      onChange={updateArtistName}
                    />
                    <label htmlFor="cafeName">Artist name</label>
                  </div>
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      style={{ borderRadius: "21px" }}
                      value={email}
                      onChange={updateEmail}
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      style={{ borderRadius: "21px" }}
                      value={address}
                      onChange={updateAddress}
                    />
                    <label htmlFor="address">Your cafe’s address</label>
                  </div>
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      style={{ borderRadius: "21px" }}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <label htmlFor="phoneNumber">Your Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="openHours"
                      style={{ borderRadius: "21px" }}
                      value={noRek}
                      onChange={(e) => setNoRek(e.target.value)}
                      required
                    />
                    <label htmlFor="openHours">No. Rekening</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3 input-form">
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      style={{ borderRadius: "21px" }}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                    <label htmlFor="price">Price</label>
                  </div>
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
                  <div className="form-floating mb-3 input-form">
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="floatingInput">Description</label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => submit()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
