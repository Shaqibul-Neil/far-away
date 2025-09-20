import { useState } from "react";

const Form = ({ handleAddItem }) => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState(1);

  //input value
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //select value
  const handleSelect = (e) => {
    setSelect(+e.target.value);
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) alert("Please add an item");
    const newItem = {
      description: input,
      quantity: select,
      packed: false,
      id: Date.now(),
    };
    handleAddItem(newItem);
    setInput("");
    setSelect(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="" id="" value={select} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num, i) => (
          <option value={num} key={i}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={input}
        onChange={handleInput}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
