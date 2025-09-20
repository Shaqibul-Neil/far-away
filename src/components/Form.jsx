import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, index) => index + 1).map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={input}
        onChange={handleSubmit}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
