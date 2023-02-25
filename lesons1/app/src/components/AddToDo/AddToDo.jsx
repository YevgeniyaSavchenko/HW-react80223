import React from "react";
import s from './style.module.css';

export default function AddToDo({ setNewToDo, importance, setImportance, date, setDate, addToDo }) {
  return (
    <div className={s.select}>
      <input type="text" onChange={(e)=> setNewToDo(e.target.value)}/>
      <div>
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
        >
          <option value="">Importance:</option>
          <option value="important">important</option>
          <option value="current">current</option>
        </select>
      </div>
      <div>
        <select value={date} onChange={(e) => setDate(e.target.value)}>
          <option value="">Day of the Week:</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      <button onClick={addToDo}>Add</button>
    </div>
  );
}