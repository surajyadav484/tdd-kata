import { useRef } from "react";
import "./App.css";
import { useState } from "react";
import add from "./add";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(null);

  function calculateResult(e) {
    e.preventDefault();
    try {
      const args = inputRef.current.value;
      const result = add(args);
      setResult(result);
      //TODO: Clear form after calculation
    } catch (error) {
      //TODO: Handle error and display proper message to user
      console.error(error);
    }
  }

  return (
    <>
      <form className="text-input" onSubmit={calculateResult}>
        {/* State also can be used, however only one input was there and that also triggers when submitted hence handled with useRef */}
        <textarea cols={70} rows={3} ref={inputRef} />
        <button type="submit">Calculate</button>
      </form>

      {result && <div className="result-section">{`Output: ${result}`}</div>}
    </>
  );
}

export default App;
