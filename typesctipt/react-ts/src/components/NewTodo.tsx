import { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";
import classes from "./NewTodo.module.css";

const NewTodo:React.FC/* <{onAddTodo: (text: string) => void}> */ = (/* props */) => {
  const todoCtx = useContext(TodosContext);

  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todoCtx.addTodo(enteredText);

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="textTodo">Todo text</label>
      <input type="text" id="textTodo" ref={todoInputRef} />
      <button type="submit">add todo</button>
    </form>
  );
};

export default NewTodo;
