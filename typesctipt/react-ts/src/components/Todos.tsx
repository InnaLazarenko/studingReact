import { useContext } from "react";
//import Todo from "../models/todo";
import { TodosContext } from "../store/todo-context";
import TodoItem from "./Todo";
import classes from "./Todos.module.css";

const Todos: React.FC/* <{ items: Todo[]; onRemoveTodo: (id: string) => void }> */ = (/* props */) => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
