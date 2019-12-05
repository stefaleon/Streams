import React from "react";
import { connect } from "react-redux";

import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";
import Modal from "../Modal";

class StreamDelete extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", e => {
      if (e.keyCode === 27) {
        history.push("/");
      }
    });

    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    const currentId = this.props.match.params.id;

    const actions = (
      <div>
        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStream(currentId)}
        >
          Delete
        </button>
      </div>
    );

    const content = this.props.stream
      ? `Confirm the deletion of stream "${this.props.stream.title}"`
      : "Confirm the deletion of this stream";

    return (
      <Modal
        title="Delete Stream"
        content={content}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
