import React from "react";
import Main from "./component/Main";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Main />
      <Outlet />
    </div>
  );
}

export default App;
