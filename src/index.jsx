import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "./Counter.jsx";
import ToDoList from "./ToDoList.jsx";
import "./style.css";

const App = () => {
  return (
    <>
      <Counter />
      <ToDoList />
    </>
  );
};

const el = document.querySelector("#root");
if (el) {
  const root = createRoot(el);
  root.render(<App />);
}
