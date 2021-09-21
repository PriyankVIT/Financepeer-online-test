import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
};

export default App;
