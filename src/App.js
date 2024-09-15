import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { ContextProvider } from "./Context/context";
import Main from "./Components/Main";
import { useState,useEffect } from "react";


function App() {

  return (
    <div className="App">
      <ContextProvider>
      <Main/>
      </ContextProvider>
    </div>
  );
}

export default App;
