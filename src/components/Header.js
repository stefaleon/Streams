import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streams
        </Link>
        {this.props.isSignedIn ? (
          <Link to="/streams/new" className="item">
            New Stream
          </Link>
        ) : (
          ""
        )}
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Header);
