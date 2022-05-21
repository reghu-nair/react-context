import React, { useContext } from "react";
import authContext from "./authContext";

export default () => {
  const { context } = useContext(authContext);
  const { setContext } = useContext(authContext);
  const handleLogin = () =>
    setContext({ authenticated: true, userContext: "d" });
  const handleLogout = () =>
    setContext({ authenticated: false, userContext: "e" });

  return (
    <React.Fragment>
      {context.userContext}
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </React.Fragment>
  );
};
