import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { deleteAll } from "./redux/todoapp/actions";

import Textbar from "./Textbar";
import Lists from "./Lists";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationsReducer);

  return (
    <>
      <main className="main--container">
        <div className="header">
          <h1>My Todos</h1>
          <Textbar />
        </div>
        <Lists />
        {todos.length > 1 && (
          <button
            className="btn btn-danger btn-md clear--all"
            onClick={() => dispatch(deleteAll())}
          >
            CLEAR ALL
          </button>
        )}
      </main>
    </>
  );
}

export default App;
