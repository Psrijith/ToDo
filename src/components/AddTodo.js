import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddTodo(props) {

  

  let { register, handleSubmit } = useForm();

  return (
    <div>
      <h1>AddTodo</h1>
      <form onSubmit={handleSubmit(props.addNewTask)}>
        <div className="mb-3">
          <label htmlFor="task">Enter a Task</label>
          <input
            type="text"
            id="task"
            className="form-control"
            {...register("task")}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Add new Task
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
