import React from "react";

function TodoList(props) {
  const handleDelete = (index) => {
    props.onDelete(index);
  };

  return (
    <div>
      <h1>TodoList</h1>
      {props.tasks.map((task, index) => (
        <div key={index}>
          <h3 className="text-white">{task}</h3>
          <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
