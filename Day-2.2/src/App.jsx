import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactRouteExample from "./components/ReactRouteExample";
import ContextApiExample from "./components/ContextApiExample";
import UserContext from "./context/UserContext"
const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <ReactRouteExample />
      </BrowserRouter> */}

      <UserContext>
        <ContextApiExample />
      </UserContext>
    </>
  );
};

export default App;
