import React from "react";

function TodoCount(props) {
  return (
    <div>
      <h1>TodoCount</h1>
      <p className="display-3 text-white">{props.tasks.length}</p>
    </div>
  );
}

export default TodoCount;
 