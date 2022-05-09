import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import image from "../../assets/image-3.png";

const CardHire = ({ item, parentCallback }) => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  const [time, setTime] = useState("");

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const temp = new Date(item.date);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = temp.getDate();
    var month = months[temp.getMonth()];
    var year = temp.getFullYear();

    var dateString = date + " " + month + " " + year;
    setTime(dateString);
  };

  const cancel = () => {
    axios
      .put(
        `${base_url}/cafe/cancel/${item.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
    <>
      <div className="row">
        <div className="col">
          <div className="d-flex w-100" style={{ height: "80px" }}>
            <img
              src={`${image}`}
              className="img-fluid rounded-circle"
              alt="..."
            />
            <div className="ms-3 mt-3">
              <h5 className="text-capitalize">{item.artis_name}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
        {item.status_cafe === "waiting" && (
          <div className="col pt-4">
            <div className="d-flex justify-content-evenly">
              <h3 className="pt-2">WAITING..</h3>
              <button
                type="button"
                className="button-map"
                onClick={() => cancel()}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardHire;
