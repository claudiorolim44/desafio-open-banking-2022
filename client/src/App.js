// client/src/App.js

import React from "react";
import logo from "./logo.png";

function App() {
  const [servidoresDeAutorizacao, setServidoresDeAutorizacao]  = React.useState(null);

  React.useEffect(() => {
    fetch("/api/servidores-de-autorizacao")
      .then((res) => res.json())
      .then((data) => setServidoresDeAutorizacao(data));
  }, []);

  return (
    <div className="App">
      {!servidoresDeAutorizacao ? (
        <h1>Carregando...</h1>
      ) : ( 
        <ul>
          {servidoresDeAutorizacao.map(authorisationServer => {
            return (
              <li key={authorisationServer.CustomerFriendlyName}>
                {authorisationServer.CustomerFriendlyName}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
}

export default App;