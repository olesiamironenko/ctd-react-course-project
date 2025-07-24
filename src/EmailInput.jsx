//setEmail is a state update function provided as a callback by the parent component
import { useRef } from 'react';

function EmailInput({ setEmail }) {
  const emailInput = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const lowerCaseEmail = emailInput.current.value.toLowerCase();
    setEmail(lowerCaseEmail);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" ref={emailInput} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmailInput;
