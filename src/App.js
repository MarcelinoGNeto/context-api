import React from "react";
import { useAuth } from "./providers/auth";
import Profile from "./components/profile";
import { Login } from "./components/login";

function App() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
