import { useEffect, useState } from "react";

import CardNotification from "../../components/notification/CardNotification";

import image from "../../assets/image-3.png";

const Notification = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h3>See who wants to perform!</h3>
        </div>
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardNotification />
        </div>
      </div>
    </>
  );
};

export default Notification;
