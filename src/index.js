import ReactDOM from "react-dom";
import React, { useState } from "react";

import authContext from "./authContext";
import Login from "./Login";

const App = () => {
  const [context, setContext] = useState(false);

  return (
    <authContext.Provider value={{ context, setContext }}>
      <div>
        {" "}
        user is {`${context.authenticated ? "" : "not"} authenticated`}{" "}
      </div>
      <h1>{context.userContext}</h1>
      <Login />
    </authContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
