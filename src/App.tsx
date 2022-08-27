import React from "react";
import Button from "shared/components/Button";
import Loader from "shared/components/Loader";

function App() {
  return (
    <div className="App">
      <Loader border="4px" size="30px" color="red" />
      <Button isLoading={true} onClick={() => {}}>
        Button
      </Button>
      <Button onClick={() => {}}>Button</Button>
    </div>
  );
}

export default App;
