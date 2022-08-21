import { useState } from "react";
import "./App.css";
// import { Hello } from "./Hello";

function App() {
  const [currentText, setCurrentText] = useState("");

  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...todo, currentText]);
    setCurrentText("");
  };
  const deleteTodo = (i) => {
    todo.splice(i, 1);
    setTodo([...todo]);
  };
  const editTodo = (i) => {
    todo[i] = prompt("Enter Update Value", todo[i]);
    setTodo([...todo]);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={currentText}
          placeholder="Enter Something here"
          onChange={(e) => setCurrentText(e.target.value)}
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <div>
        {todo.map((curr, i) => {
          return (
            <ul key={i}>
              <li>
                {curr}{" "}
                <button
                  className="btn btn-success"
                  onClick={() => {
                    editTodo(i);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteTodo(i)}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
