import { useState } from "react";

function ControllComp() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
    <label htmlFor="fname">First Name</label>
    <p>
      <input
        className="form-input"
        type="text"
        name="firstname"
        onChange={handleChange}
        value = {inputValue}
      />
    </p>

<p>{inputValue}</p>
    </>
  );
}

export default ControllComp;
