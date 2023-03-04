import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  const changeTextHandler = () => {
    setChangeText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {changeText ? (
        <Output>Changed!</Output>
      ) : (
        <Output>It's good to see you!</Output>
      )}
      <button onClick={changeTextHandler}>change text</button>
    </div>
  );
};

export default Greeting;
