import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { addTodo } from "./redux/todoapp/actions";

import Button from "react-bootstrap/Button";

import "./App.css";

export default function Textbar() {
  const [todoValue, setTodoValue] = useState("");
  const todo = useSelector((state) => state.todo);

  const dispatch = useDispatch();

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
    <div className="todo--header">
      <div className="textbar--area">
        <input
          type="text"
          name="textbar"
          id="textbar"
          placeholder="Add something to do..."
          onChange={(e) => setTodoValue(e.target.value)}
          required
        />
        <Button
          variant="success"
          size="sm"
          type="submit"
          onClick={handleSubmit}
          className="save--button"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
