import React from "react";
import logo from "../media/Netflix_Logo.png";

const Header = () => {
  return (
    <div className=" absolute px-32 py-2 bg-gradient-to-b w-full from-black">
      <img className="  w-48" src={logo} />
    </div>
  );
};

export default Header;
