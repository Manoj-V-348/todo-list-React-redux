import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { removeTodo } from "./redux/todoapp/actions";

import Textbar from "./Textbar";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

export default function Lists() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  const [focusedInputIndex, setFocusedInputIndex] = useState(null);

  const [todoValue, setTodoValue] = useState("");
  const todo = useSelector((state) => state.todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  return (
    <div className="list--area">
      {todos.map((todo, index) => (
        <div className="list--items" key={todo.id}>
          <div className="text--area">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              defaultChecked={todo.completed}
            />
            <input
              type="text"
              name="list-text"
              id="list--textbox"
              defaultValue={todo.todo}
              onClick={() => setFocusedInputIndex(index)}
              onBlur={() => setFocusedInputIndex(null)}
              onChange={(e) => setTodoValue(e.target.value)}
            />
          </div>
          <div className="buttons--area">
            {focusedInputIndex === index && (
              <Button variant="success" size="sm" onClick={handleSubmit}>
                Save
              </Button>
            )}
            <Button
              variant="danger"
              size="sm"
              id="remove--button"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
