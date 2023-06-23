import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoCount from "./components/TodoCount";
import TodoList from "./components/TodoList";
import { useState } from "react";


function App() {
  let data1 = "srijith";

  //state to be shared with children
  let [tasks, setTasks] = useState([]);

  let addNewTask = (newTaskObj) => {
    setTasks([...tasks, newTaskObj.task]);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  return (
    <div className="main">
      <h1>Welcome</h1>
      <div className="row text-center">
        <div className="col-sm-4">
          <AddTodo tasks={tasks} addNewTask={addNewTask} />
        </div>
        <div className="col-sm-4">
          <TodoList tasks={tasks} onDelete={handleDelete} />
        </div>
        <div className="col-sm-4">
          <TodoCount tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
