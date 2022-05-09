import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import image from "../../assets/image-3.png";

const CardInbox = ({ item, parentCallback }) => {
  const base_url = useSelector((state) => state.base_url);
  const token = localStorage.getItem("token");
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

  const reject = () => {
    axios
      .put(
        `${base_url}/reject/${item.id}`,
        {
          id: item.id,
        },
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

  const accept = () => {
    axios
      .post(
        `${base_url}/accept/${item.id}`,
        { id: item.id },
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
              <h5>{item.cafe_name}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
        {item.status_artist === "waiting" && (
          <div className="col pt-4">
            <div className="d-flex justify-content-evenly">
              <button
                type="button"
                className="button-map"
                style={{ backgroundColor: "white", color: "#53b8d1" }}
                onClick={() => reject()}
              >
                REJECT
              </button>
              <button
                type="button"
                className="button-map"
                onClick={() => accept()}
              >
                ACCEPT
              </button>
            </div>
          </div>
        )}
        {item.status_artist === "waiting payment" && (
          <div className="col pt-4">
            <div className="d-flex justify-content-evenly">
              <h3 className="pt-2">WAITING PAYMENT</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardInbox;
