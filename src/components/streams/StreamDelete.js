import React from "react";

import history from "../../history";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button">Cancel</button>
      <button className="ui button negative">Delete</button>
    </div>
  );

  return (
    <div>
      <div>StreamDelete</div>
      <Modal
        title="Delete Stream"
        content="Confirm the deletion of this stream"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
