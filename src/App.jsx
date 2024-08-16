import React, { useState } from "react";
import Dashboard from './assets/component/Dashboard/Dashboard';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <div className="toggle-switch" onClick={toggleDarkMode}>
          <div className={`toggle-bar ${darkMode ? "active" : ""}`}>
            <div className="toggle-circle"></div>
          </div>
        </div>
      </header>
      <Dashboard darkMode={darkMode} />
    </div>
  );
}

export default App;