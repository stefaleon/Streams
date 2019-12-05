import React from "react";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import history from "./history";

import Header from "./components/Header";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";

import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
