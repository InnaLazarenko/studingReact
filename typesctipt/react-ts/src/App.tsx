//import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todo-context";
//import Todo from "./models/todo";

function App() {
  /* const [todos, setTodos] = useState<Todo[]>([]);
  //const todos = [new Todo("learn react"), new Todo("learn tS")];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos(prevState => {
      return prevState.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevState => {
      return prevState.filter(todo => todo.id !== todoId);
    });
  }; */

  return (
<TodosContextProvider>
      <NewTodo />
      <Todos />

            {/* <NewTodo
        onAddTodo={addTodoHandler}
      />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
    </TodosContextProvider>
  );
}

export default App;
