import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { useState } from "react";
import Login from "./components/Login/Login";
import { useStateValues } from "./context/StateProvider";

function App() {
  const [{ user }] = useStateValues();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
