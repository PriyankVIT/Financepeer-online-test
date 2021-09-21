import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Landing from "./screens/Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Landing} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
