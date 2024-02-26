import React from "react";
import logoImage from "../../../assets/logo.jpeg";

function logo() {
  return (
    <>
      <div className="navlogo">
        <img src={logoImage} alt="Logo" width={100} height={80} />
      </div>
    </>
  );
}

export default logo;
