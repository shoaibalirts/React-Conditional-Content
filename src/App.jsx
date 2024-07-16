import { useState } from "react";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  let warning = "";
  if (showDialog === true) {
    warning = (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleClick}>Proceed</button>
      </div>
    );
  }

  function handleClick() {
    setShowDialog((x) => !x);
  }
  return (
    <div>
      {warning}
      {showDialog === false ? (
        <button onClick={handleClick}>Delete</button>
      ) : null}
    </div>
  );
}

export default App;
