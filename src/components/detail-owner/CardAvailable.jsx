import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const CardAvailable = ({ item }) => {
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
    var myDays = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum&#39;at",
      "Sabtu",
    ];
    var date = temp.getDate();
    var month = months[temp.getMonth()];
    var year = temp.getFullYear();
    var day = temp.getDay();
    day = myDays[day]

    var dateString = day +", "+ date + " " + month + " " + year;
    setTime(dateString);
  };
  return (
    <>
      <div
        className="card mb-5 border-0"
        style={{ maxWidth: "332px", maxHeight: "73px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${image}`}
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted">{time}</small>
              </p>
              <h5 className="card-title">{item.cafe_name}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardAvailable;
