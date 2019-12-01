import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "378009912383-vn7a30ulek1418el6vphiocdtk9n43g7.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
