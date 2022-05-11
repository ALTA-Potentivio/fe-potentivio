import { useEffect, useState } from "react";

import image from "../../assets/image-3.png";

const CardPerforme = ({ item }) => {
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
    day = myDays[day];

    var dateString = day + ", " + date + " " + month + " " + year;
    setTime(dateString);
  };

  return (
    <>
      <div className="d-flex w-100" style={{ height: "80px" }}>
        <img src={`${image}`} className="img-fluid rounded-circle" alt="..." />
        <div className="ms-3 mt-3">
          <h5 className="text-capitalize">{item.cafe_name}</h5>
          <p>
            <small>{time}</small>
          </p>
        </div>
      </div>
      <p className="mt-3">{item.comment}</p>
    </>
  );
};

export default CardPerforme;
