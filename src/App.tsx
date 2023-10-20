import React, { FC, useState } from "react";
import "./App.css";
import InputField from "./Component/InputField";
import Todo from "./Component/model";
import TodoList from "./Component/TodoList";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
    
  };
  return (
    <div className="App">
      <span className="heading"> Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
