import { createContext } from "react";

const authContext = createContext({
  context: {
    authenticated: false,
    userContext: {}
  },

  setContext: (context) => {}
});

export default authContext;
