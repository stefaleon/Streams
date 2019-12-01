import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streams App
      </Link>
      <div className="right menu">
        <Link to="/streams/new" className="item">
          New Stream
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
