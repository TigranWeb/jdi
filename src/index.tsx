import * as React from "react";
import * as ReactDOM from "react-dom";

const App: any = () => {
  return (
    <div>
      <h1>Start up test</h1>
    </div>
  );
};

const MainElement = document.getElementById("root");

ReactDOM.render(<App />, MainElement);
