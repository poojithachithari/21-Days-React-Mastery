const TodoForm = ({ todo, setTodo, handleTodo }) => {
  return (
    <div className="todo-form">
      <h2>Add To-do</h2>

      <input
        className="todo-input"
        type="text"
        value={todo}
        placeholder="Enter a task..."
        onChange={(e) => setTodo(e.target.value)}
      />

      <button className="add-btn" onClick={handleTodo}>
        Add
      </button>

      <div className="divider"></div>
    </div>
  );
};

export default TodoForm;
