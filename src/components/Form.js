import { useRef, useState } from "react";
import { generatePassword } from "./FormHelper";

const Form = () => {
  console.log(generatePassword(true, true, 24));
  const numberRef = useRef();
  const symbolRef = useRef();
  const lengthRef = useRef();

  const [passwordText, setPasswordText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newPassword = generatePassword(
      numberRef.current.checked,
      symbolRef.current.checked,
      lengthRef.current.value || 6
    );
    setPasswordText(newPassword);
  };
  return (
    <form className="password-form" onSubmit={handleSubmit}>
      <h2>Generate a secure password!</h2>
      <div className="password-input">
        <h4 className="password-text">{passwordText}</h4>
        <div className="flex-container">
          <label htmlFor="password-length">password length ?</label>
          <input
            type="number"
            name="password-length"
            id="password-length"
            max={44}
            min={6}
            style={{ maxWidth: "8ch" }}
            ref={lengthRef}
          />
        </div>
        <div className="flex-container">
          <label htmlFor="numbers">include numbers?</label>
          <input type="checkbox" name="numbers" id="numbers" ref={numberRef} />
        </div>
        <div className="flex-container">
          <label htmlFor="symbols">include symbols?</label>
          <input type="checkbox" name="symbols" id="symbols" ref={symbolRef} />
        </div>
      </div>
      <button className="btn">Generate</button>
    </form>
  );
};

export default Form;
