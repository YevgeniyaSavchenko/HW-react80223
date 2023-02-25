import React, { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import ToDoContainer from "../ToDoContainer/ToDoContainer";
import s from './style.module.css'


export default function App() {
  const [toDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [date, setDate] = useState("");
  const [importance, setImportance] = useState("");

  const addToDo = () => {
    const newEntry = {
      id: toDo.length + 1,
      title: newToDo,
      date,
      importance,
    };
    setToDo([...toDo, newEntry]);
    setNewToDo("");
    setDate("");
    setImportance("");
  };

  const deleteToDo = (id) => {
    let newToDoList = toDo.filter((el) => el.id !== id);
    setToDo(newToDoList);
  };

  return (
    <div className={s.app}>
      <AddToDo 
        setNewToDo={setNewToDo}
        importance={importance}
        setImportance={setImportance}
        date={date}
        setDate={setDate}
        addToDo={addToDo}
      />
      <ToDoContainer deleteToDo={deleteToDo}
      toDo={toDo} />
    </div>
  );
}