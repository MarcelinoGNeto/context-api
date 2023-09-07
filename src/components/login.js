import React, { useState } from "react";
import { useAuth } from "../providers/auth";

export const Login = () => {
  const [input, setInput] = useState({
    name: "",
  });
  const { setUser } = useAuth();

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(input));
    setUser(input);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ name: "" });
    setInput({ name: "" });
  };

  return (
    <div>
      <input
        type="text"
        value={input.name}
        onChange={(e) => setInput({ name: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
