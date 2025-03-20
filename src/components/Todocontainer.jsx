import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todocontainer() {

  const [activityArr, setactivityArr] = useState([
    {
      id: 1,
      activity: "go for a walk",
    },
  ]);

  return (
    <div className="flex gap-5 flex-wrap ">
      <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr}/>
      <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />
    </div>
  );
}
