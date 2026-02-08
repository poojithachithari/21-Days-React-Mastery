import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  // let todos = [
  //   {
  //     id: 1,
  //     todo: "Study",
  //   },
  //   {
  //     id: 2,
  //     todo: "Editing",
  //   }
  // ];
  function handleTodo() {
    if (todo.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      todo: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  }

  return (
    <>
      <h1>To-do List</h1>
      <TodoForm todo={todo} setTodo={setTodo} handleTodo={handleTodo} />
      <h2>To-do List</h2>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.todo}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
