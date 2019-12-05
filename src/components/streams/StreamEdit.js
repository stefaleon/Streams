import React from "react";
import { connect } from "react-redux";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h3> Edit Stream</h3>
        {this.props.stream && (
          <StreamForm
            initialValues={{
              title: this.props.stream.title,
              description: this.props.stream.description
            }}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
