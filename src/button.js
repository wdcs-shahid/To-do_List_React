import React, { useState } from "react";

function Change() {
  const [text, setText] = useState("");
  const [displayList, setDisplayList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const btn = () => {
    if (text.trim() !== "") {
      if (editIndex !== null) {

        const updatedList = displayList.map((item, index) =>
          index === editIndex ? text : item
        );
        setDisplayList(updatedList);
        setEditIndex(null);
      } else {

        setDisplayList([...displayList, text]);
      }
      setText("");
    }
  };
  const jj = (e) => {
    setText(e.target.value);
  };

  const handleEdit = (index) => {
    setText(displayList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = displayList.filter((_, i) => i !== index);
    setDisplayList(updatedList);
  };

  return (
    <div>
      <input value={text} onChange={jj}></input>
      <button onClick={btn}>Click Me</button>
      <div>
        {displayList.map((item, index) => {
          return (
            <div class="card">
              <h5 class="card-header">Task no.{index + 1}</h5>
              <div class="card-body">
                <h5 class="card-title">{item}</h5>
                <p class="card-text"></p>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button
                  style={{ color: "white", backgroundColor: "red" }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Change;
