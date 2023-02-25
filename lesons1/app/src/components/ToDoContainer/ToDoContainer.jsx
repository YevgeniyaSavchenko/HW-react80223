import React from "react";
import ToDo from "../ToDo/ToDo";
import s from "./style.module.css";

export default function ToDoContainer({ toDo, deleteToDo }) {
  const changeDay = (day) => {
    return toDo.filter((toDo) => toDo.date === day);
  };
  return (
    <div className={s.days}
    >
      <div>Monday
        {changeDay("monday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>Tuesday
        {changeDay("tuesday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>Wednsday
        {changeDay("wednesday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
    
      <div>Thursday
        {changeDay("thursday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>Friday
        {changeDay("friday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>Saturday
        {changeDay("saturday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>Sunday
        {changeDay("sunday")
          .sort((elem1, elem2) =>
            elem1.importance < elem2.importance ? 1 : -1
          )
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      
      
      
    </div>
  );
}
