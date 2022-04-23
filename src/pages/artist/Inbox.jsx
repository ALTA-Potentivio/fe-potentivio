import { useEffect, useState } from "react";

import CardInbox from "../../components/inbox/CardInbox";

import image from "../../assets/image-3.png";

const HireStatus = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardInbox />
        </div>
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardInbox />
        </div>
      </div>
    </>
  );
};

export default HireStatus;
