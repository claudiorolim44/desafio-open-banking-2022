// client/src/App.js

import React from "react";
import logo from "./logo.png";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Carregando..." : data}</p>
    </div>
  );
}

export default App;