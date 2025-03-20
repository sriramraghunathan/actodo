import React, { useState } from "react";

export default function AddTodoForm(props) {
  const activityArr = props.activityArr;
  const setactivityArr = props.setactivityArr;

  const [newactivity, setNewactivity] = useState("");
  function handleChange(evt) {
    setNewactivity(evt.target.value);
  }
  function addActivity() {
    setactivityArr([
      ...activityArr,
      { id: activityArr.length + 1,activity: newactivity },
    ]);
    setNewactivity("")
  }
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activity</h1>
      <input
        onChange={handleChange}
        value={newactivity}
        type="text"
        className="p-1 border border-black bg-transparent"
        placeholder="Next Activity?"
      />
      <button
        onClick={addActivity}
        className="bg-black text-white p-1 border border-black"
      >
        ADD
      </button>
    </div>
  );
}
