import { useEffect, useState } from "react";

import CardHire from "../../components/hire/CardHire";

import image from "../../assets/image-3.png";

const HireStatus = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardHire />
        </div>
        <div className="pt-5 pb-5 border-top border-bottom">
          <CardHire />
        </div>
      </div>
    </>
  );
};

export default HireStatus;
